import React, { useEffect, useState } from "react";
import {
  Wrap,
  Center,
  Link,
  Button,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Card from "../components/Card";
import Auth from "../utils/auth";
import { getUserRecipes } from "../utils/API";

export default function View() {
  const recipes = {
    name: "Chicken Puffs",
    prepTime: "20",
    cookTime: "30",
    ingredients: ["Chicken", "Puff Pastry", "White Sauce"],
    instructions: [
      "Make white sauce",
      "cook chicken",
      "Wrap in pastry",
      "bake",
    ],
    description:
      "Delicious chicken pastry in a whote cream sauce. Perfect for a cold night in",
    rating: "5",
    user: "6102893526de5735bb0cca6c",
  };
  return (
    <VStack>
      <Text>{recipes.name}</Text>
      <Text>{recipes.description}</Text>
      <Image
        src={recipes.img}
        mx="auto"
        objectFit="cover"
        boxSize="400px"
        alt="Recipe Photo"
      />
      <Text>Prep Time: {recipes.prepTime}</Text>
      <Text>Cook Time: {recipes.cookTime}</Text>
      <Text>Ingredients:</Text>
      {recipes.ingredients.map((ingredient) => {
        return <Text>{ingredient}</Text>;
      })}
      <Text>Instructions:</Text>
      {recipes.instructions.map((instruction, index) => {
        return (
          <Text>
            {index + 1}. {instruction}
          </Text>
        );
      })}
    </VStack>
  );
}
