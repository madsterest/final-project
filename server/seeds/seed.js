const db = require("../config/connection");
const { Recipe } = require("../models");
const recipeData = require("./recipe-data.json");

db.once("open", async () => {
  await Recipe.deleteMany({});

  const recipes = await Recipe.insertMany(recipeData);

  console.log("Recipes Seeded!");
  process.exit(0);
});
