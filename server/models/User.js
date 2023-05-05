const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"]
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review"
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("reviewCount").get(function () {
  return this.reviews.length;
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model("User", userSchema);
