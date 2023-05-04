const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Review {
    _id: ID
    title: String
    body: String
    rating: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createReview(title: String!, body: String!, rating: Int!): Auth
    removeReview(title: String!, body: String!, rating: Int!): Auth
  }
`;

module.exports = typeDefs;
