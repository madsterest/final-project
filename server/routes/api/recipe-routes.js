const router = require("express").Router();
const {
  getRecipes,
  getUserRecipes,
  createRecipe,
  getIndividRecipe,
  editRecipe,
  deleteRecipe,
} = require("../../controller/recipe");

const { authMiddleware } = require("../../utils/auth");

router.route("/").get(getRecipes);

router.route("/new").post(createRecipe);
router.route("/:id").get(getIndividRecipe);
router.route("/edit").put(editRecipe);
router.route("/delete/:recipeid/:userid").delete(deleteRecipe);

module.exports = router;
