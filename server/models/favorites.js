const { Schema, model } = require("mongoose");

const favoriteSchema = new Schema(
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  movieId: {
    type: String
  },
  movieTitle: {
    type: String
  },
  movieImage: {
    type: String
  },
  { timestamps: true }
);

module.exports = model("Favorites", favoriteSchema);
  