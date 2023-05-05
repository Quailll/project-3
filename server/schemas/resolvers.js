const { AuthenticationError } = require("apollo-server-express");
const { User, Review } = require("../models");
const { signToken } = require("../utils/auth.js");
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getMovie: async (parent, { title }) => {
      const API_KEY = "06d957d483298391d0b324df8b069c4c";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  },
  Mutation: {
    register: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    createReview: async (parent, { title, rating, body }, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          "You need to be logged in to create a review!"
        );
      }
      const review = await Review.create({
        title,
        body,
        rating,
        author: context.user._id,
      });

      await User.findByIdAndUpdate(context.user._id, {
        $push: { reviews: review._id },
      });

      return review;
    },
    removeReview: async (parent, { reviewId }, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          "You need to be logged in to delete a review!"
        );
      }
      const review = await Review.findOneAndDelete({ _id: reviewId });

      await User.findByIdAndUpdate(context.user._id, {
        $pull: { reviews: review._id },
      });

      return review;
    },
    addFavorite: async (parent, { movieId }, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          "You need to be logged to favorite a movie!"
        );
      }

      const user = await User.findByIdAndUpdate(context.user._id, {
        $addToSet: { favorites: movieId }
      });
      return user;
    }
  },

  Movie: {
    id: (parent) => parent.id.toString(),
    title: (parent) => parent.title,
    release_date: (parent) => parent.year,
    genre: (parent) => parent.genre,
    director: (parent) => parent.director,
    runtime: (parent) => parent.runtime,
    overview: (parent) => parent.overview,
    poster_path: (parent) => parent.poster_path
  }
};

module.exports = resolvers;
