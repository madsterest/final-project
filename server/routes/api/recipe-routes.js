const router = require("express").Router();
const { getRecipes, getUserRecipes } = require("../../controller/recipe");

router.route("/").get(getRecipes);

module.exports = router;
