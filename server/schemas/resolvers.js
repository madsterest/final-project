const { User, Recipe } = require("../models");

const resolvers = {
  Query: {
    recipes: async () => {
      return Recipe.find({});
    },
    users: async (parent, args, context) => {
      return User.find({});
    },
  },
};

module.exports = resolvers;
