import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser(
        $club: String!
        $password: String!
    ) {
        addUser(
            club: $club
            password: $password
        ) {
            token
            User {
                _id
            }
        }
    }
`;

export const LOGIN = gql`
  mutation login($club: String!, $password: String!) {
    login(club: $club, password: $password) {
      token
      User {
        club
      }
    }
  }
`;