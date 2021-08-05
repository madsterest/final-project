import React, { useEffect, useState, useLayoutEffect } from "react";
import { VStack, Image, Text } from "@chakra-ui/react";
import { getIndividualRecipe } from "../utils/API";
import SingleCard from "../components/SingleCard";

export default function View(props) {
  const [recipes, setRecipes] = useState({
    name: "",
    description: "",
    prepTime: "",
    cookTime: "",
    ingredients: [""],
    instructions: [""],
    img: "",
    user: "",
  });
  console.log(recipes);
  console.log(recipes.name);

  useEffect(() => {
    const getRecipeData = async () => {
      const recipeId = props.match.params.id;

      console.log(recipeId);
      try {
        const response = await getIndividualRecipe(recipeId);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const recipeData = await response.json();

        setRecipes(recipeData[0]);
      } catch (err) {
        console.error(err);
      }
    };
    getRecipeData();
  }, []);

  return (
    <SingleCard
      name={recipes.name}
      prepTime={recipes.prepTime}
      cookTime={recipes.cookTime}
      ingredients={recipes.ingredients}
      instructions={recipes.instructions}
      img={recipes.img}
      desciption={recipes.description}
      user={recipes.user}
    />
  );
}
