const router = require("express").Router();
const {
  getRecipes,
  getUserRecipes,
  createRecipe,
  getIndividRecipe,
  editRecipe,
} = require("../../controller/recipe");

const { authMiddleware } = require("../../utils/auth");

router.route("/").get(getRecipes);

router.route("/new").post(createRecipe);
router.route("/:id").get(getIndividRecipe);
router.route("/edit").put(editRecipe);

module.exports = router;
