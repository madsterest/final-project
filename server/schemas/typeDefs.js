const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    recipes: [Recipe]
  }

  type Recipe {
    _id: ID!
    name: String!
    prepTime: Int
    cookTime: Int
    ingredients: [String]
    instructions: [String]
    rating: [Int]
    comments: [Comment]
  }

  type Comment {
    comment: String
    user: User
  }

  type Query {
    recipes: [Recipe]
    users: [User]
  }
`;

module.exports = typeDefs;
