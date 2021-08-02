const router = require("express").Router();
const {
  getRecipes,
  getUserRecipes,
  createUser,
} = require("../../controller/recipe");

router.route("/").get(getUserRecipes);

router.route("/new").post(createUser);

module.exports = router;
