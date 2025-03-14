const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Club {
        _id: ID
        clubName: String!
        password: String!
        clubType: String!
        description: String
        createdAt: String
    }

    type Auth {
        token: String
        club: Club
    }

    type Query{
        clubs: [Club]
        me: Club
        club(clubName: String!): Club
    }

    type Mutation {
        addClub(
            clubName: String!
            password: String!
        ): Auth
        
        addDescription(
            description: String
        ): Club

        login(
            clubName: String!
            password: String!
        ): Auth
    }
`;

module.exports = typeDefs;