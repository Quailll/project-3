const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const movieSchema = new mongoose.Schema({
  tmdbId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  release_date: {
    type: Number,
    required: false
  },
  genre: {
    type: String,
    required: false
  },
  director: {
    type: String,
    required: false
  },
  runtime: {
    type: String,
    required: false
  },
  overview: {
    type: String,
    required: false
  },
  poster_path: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Movie", movieSchema);


