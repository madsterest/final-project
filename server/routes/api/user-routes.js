const router = require("express").Router();
const {
  getUserRecipes,
  createUser,
  userLogin,
} = require("../../controller/recipe");

router.route("/").get(getUserRecipes);

router.route("/new").post(createUser);

router.route("/login").post(userLogin);

module.exports = router;
