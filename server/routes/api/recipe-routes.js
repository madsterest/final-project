const router = require("express").Router();
const {
  getRecipes,
  getUserRecipes,
  createRecipe,
  getIndividRecipe,
} = require("../../controller/recipe");

const { authMiddleware } = require("../../utils/auth");

router.route("/").get(getRecipes);

router.route("/new").post(createRecipe);
router.route("/:id").get(getIndividRecipe);

module.exports = router;
