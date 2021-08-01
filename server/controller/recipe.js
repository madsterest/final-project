const { Recipe } = require("../models");

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
};
