const router = require("express").Router();
const {
  getRecipes,
  getUserRecipes,
  createRecipe,
  getIndividRecipe,
  editRecipe,
  deleteRecipe,
  addToFavourites,
} = require("../../controller/recipe");

const { authMiddleware } = require("../../utils/auth");

router.route("/").get(getRecipes);

router.route("/new").post(createRecipe);
router.route("/:id").get(getIndividRecipe);
router.route("/edit").put(editRecipe);
router.route("/delete/:recipeid/:userid").delete(deleteRecipe);
router.route("/favourites/:recipeid").put(addToFavourites);

module.exports = router;
