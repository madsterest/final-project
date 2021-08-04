const router = require("express").Router();
const {
  getRecipes,
  getUserRecipes,
  createRecipe,
} = require("../../controller/recipe");

const { authMiddleware } = require("../../utils/auth");
router.route("/").get(getRecipes);
router.route("/recipes").get(getUserRecipes);
router.route("/new").post(authMiddleware, createRecipe);

module.exports = router;
