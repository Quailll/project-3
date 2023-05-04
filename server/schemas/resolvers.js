const { AuthenticationError } = require("apollo-server-express");
const { User, Review } = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
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
      const review = await Review.findOneAndDelete({ reviewId });

      await User.findByIdAndUpdate(context.user._id, {
        $push: { reviews: review._id },
      });

      return review;
    },
  },
};

module.exports = resolvers;
