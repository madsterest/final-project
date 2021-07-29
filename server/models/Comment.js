const { Schema, model } = require("mongoose");

const userSchema = require("./User");
const recipeSchema = require("./Recipe");

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
