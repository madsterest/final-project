const router = require("express").Router();
const { getRecipes, getUserRecipes } = require("../../controller/recipe");

router.route("/").get(getUserRecipes);

module.exports = router;
