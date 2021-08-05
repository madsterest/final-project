const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  prepTime: {
    type: String,
  },
  cookTime: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
    },
  ],
  instructions: [
    {
      type: String,
    },
  ],
  img: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
  },
  rating: [
    {
      type: Number,
      max: 5,
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
