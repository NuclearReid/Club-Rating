const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        club: String!
        password: String!
    }

    type Auth {
        token: String
        User: User
    }

    type Query{
        users: [User]
        me: User
    }

    type Mutation {
        addUser(
            club: String!
            password: String!
            #foo: [ID]
        ): Auth

        login(
            club: String!
            password: String!
        ): Auth
    }
`;

module.exports = typeDefs;