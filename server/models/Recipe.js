const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  prepTime: {
    type: Number,
    required: true,
  },
  cookTime: {
    type: Number,
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
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
