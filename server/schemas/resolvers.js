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
        }

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
        }
    }
}

module.exports = resolvers