const { Club } = require('../models')
const {signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {

        clubs: async () => {
            return Club.find()
        },

        me: async (parent, args, context) => {
            if (context.club) {
                const foundClub = await Club.findOne({
                    _id: context.club._id,
                })
                return foundClub
            }
            throw AuthenticationError
        },
        club: async (parent, {clubName}) => {
            const foundClub = await Club.findOne({clubName})
            try {
                if(!foundClub){
                    throw new Error('no club found')
                }
                return {
                    ...foundClub.toObject()
                }
            } catch (error) {
                console.error(error)
            }
        },

    },
    Mutation: {
        addClub: async (parent, {clubName, password }) => {
            const club = await Club.create({
                clubName,
                password,
            });
            const token = signToken(club);
            return {token, club}
        },
        login: async (parent, {clubName, password }) => {
            const club = await Club.findOne({ clubName })

            if(!club) {
                throw AuthenticationError;
            }
            const correctPw = await club.isCorrectPassword(password)
            if(!correctPw){
                throw AuthenticationError
            }
            const token = signToken(club)
            return {token, club}
        },
        
        addDescription: async (parent, {description}, context ) => {
            if(context.club){
                const club = await Club.findByIdAndUpdate(
                    context.club._id,
                    {description: description},
                    {new: true}
                )

                const updatedClub = await Club.findById(context.club._id)
                return updatedClub
            }
            throw AuthenticationError
        },
    }
}

module.exports = resolvers