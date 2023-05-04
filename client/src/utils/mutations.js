import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($title: String!, $body: String!, $rating: Float!) {
    createReview(title: $title, body: $body, rating: $rating) {
      _id
      title
      body
      rating
      author {
        _id
        name
        email
      }
      createdAt
    }
  }
`;
