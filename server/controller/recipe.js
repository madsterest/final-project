const { Recipe, User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  async getRecipes(req, res) {
    try {
      const allRecipes = await Recipe.find({});

      res.status(200).json(allRecipes);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  async getUserRecipes(req, res) {
    try {
      const userRecipes = await User.find({ _id: req.body.user }).populate({
        path: "recipes",
      });

      res.status(200).json(userRecipes);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  async createUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.stats(400).json({ message: "Unable to create user" });
    }

    const token = signToken(user);
    res.json({ token, user });
  },
  async userLogin(req, res) {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      res.status(400).json({ message: "Unable to sign in" });
    }
    console.log("Correct User");

    const checkPw = await user.passwordCheck(req.body.password);

    if (!checkPw) {
      return res.status(400).json({ message: "Unable to sign in" });
    }

    const token = signToken(user);
    res.json({ token, user });
  },
};
