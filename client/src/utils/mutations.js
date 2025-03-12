import { gql } from '@apollo/client';

export const ADD_CLUB = gql`
    mutation addClub(
        $clubName: String!
        $password: String!
    ) {
        addClub(
            clubName: $clubName
            password: $password
        ) {
            token
            Club {
                _id
                clubName
            }
        }
    }
`;

export const LOGIN = gql`
  mutation login($clubName: String!, $password: String!) {
    login(club: $clubName, password: $password) {
      token
      Club {
        _id
        clubName
      }
    }
  }
`;