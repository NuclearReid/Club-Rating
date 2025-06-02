import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query Me {
        me {
            _id
            Club
        }
    }
`;

export const FIND_CLUB = gql`
    query Club($clubName: String!) {
        club(clubName: $clubName) {
            clubName
            description
        }
    }
`