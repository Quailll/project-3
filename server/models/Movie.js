const {Schema, model} = require("mongoose");
const mongoose = require('mongoose')
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
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  runtime: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  poster_path: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Movie", movieSchema);
