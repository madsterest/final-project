const db = require("../config/connection");
const { Recipe, User } = require("../models");
const recipeData = require("./recipe-data.json");
const userData = require("./user-data.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Recipe.deleteMany({});
    const users = await User.insertMany(userData);
    const recipes = await Recipe.insertMany(recipeData);

    const recipeId = recipes.map((recipe) => {
      return recipe._id;
    });

    const uploadRecipes = await User.findOneAndUpdate(
      { username: "maddieiscool" },
      { $push: { recipes: recipeId } }
    );
  } catch (err) {
    console.log(err);
  }

  console.log("Recipes Seeded!");
  process.exit(0);
});
