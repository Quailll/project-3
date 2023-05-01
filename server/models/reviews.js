const {Schema, model} = require("mongoose");

const reviewSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    rating: { type: Number, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Review", reviewSchema);
