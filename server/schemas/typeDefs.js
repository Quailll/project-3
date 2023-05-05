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
    author: ID
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
    createReview(title: String!, rating: Int!, body: String!): Review
    removeReview(reviewId: ID!): Review
    addFavorite(movieId: ID!, title: String!, posterPath: String!): User
    addWatchlist(movieId: ID!, title: String!, posterPath: String!): User
    removeFavorite(id: ID!): User
    removeWatchlist(id: ID!): User
  }
`;

module.exports = typeDefs;
