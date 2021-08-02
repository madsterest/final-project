const { Recipe, User } = require("../models");

module.exports = {
  async getRecipes(req, res) {
    try {
      const allRecipes = await Recipe.find({});

      res.status(200).json(allRecipes);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  async getUserRecipes(req, res) {
    try {
      const userRecipes = await User.find({ _id: req.body.user }).populate({
        path: "recipes",
      });

      res.status(200).json(userRecipes);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
};
