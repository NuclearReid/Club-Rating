const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Club {
        _id: ID
        clubName: String!
        password: String!
    }

    type Auth {
        token: String
        Club: Club
    }

    type Query{
        clubs: [Club]
        me: Club
    }

    type Mutation {
        addClub(
            clubName: String!
            password: String!
        ): Auth

        login(
            clubName: String!
            password: String!
        ): Auth
    }
`;

module.exports = typeDefs;