import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;

export const GET_REVIEWS = gql`
  query getReviews {
    getReviews {
      _id
      title
      body
      rating
      author {
        _id
        name
      }
      
    }
  }
`;


