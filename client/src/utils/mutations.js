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
  mutation createReview($title: String!, $body: String!, $rating: Int!) {
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
      
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation addFavorite($movieId: ID!, $title: String!, $posterPath: String!) {
    addFavorite(movieId: $movieId, title: $title, posterPath: $posterPath) {
      _id
      favorites {
        tmdbId
        title
        posterPath
      }
    }
  }
`;

export const ADD_WATCHLIST = gql`
  mutation addWatchlist($movieId: ID!, $title: String!, $posterPath: String!) {
    addMovieWatchlist(
      movieId: $movieId
      title: $title
      posterPath: $posterPath
    ) {
      _id
      watchlist {
        movieId
        title
        posterPath
      }
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($id: ID!) {
    removeFavorite(id: $id) {
      _id
      favorites {
        id
        title
        posterPath
      }
    }
  }
`;

export const REMOVE_WATCHLIST = gql`
  mutation removeWatchlist($id: ID!) {
    removeMovieFromWatchlist(id: $id) {
      _id
      watchlist {
        id
        title
        posterPath
      }
    }
  }
`;
