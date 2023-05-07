const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    reviews: [Review]
    favorites: [Movie]
  }

  type Review {
    _id: ID
    title: String
    body: String
    rating: Int
    author: User
    tmdb: String
    
  }

  type Movie {
    _id: ID!
    tmdbId: String!
    title: String!
    release_date: Int!
    genre: String!
    director: String!
    runtime: String!
    overview: String!
    poster_path: String!
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getMovie(title: String!): [Movie]
    getReviews: [Review!]!
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createReview(title: String!, rating: Int!, body: String!, tmdb: String!): Review
    removeReview(reviewId: ID!): Review
    addFavorite(movieId: ID!): User!


  }
`;

module.exports = typeDefs;
