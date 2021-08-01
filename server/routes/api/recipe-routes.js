const router = require("express").Router();
const { getRecipes } = require("../../controller/recipe");

router.route("/").get(getRecipes);

module.exports = router;
