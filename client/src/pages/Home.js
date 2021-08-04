import React, { useEffect, useState } from "react";

import { Wrap } from "@chakra-ui/react";
import Card from "../components/Card";

import { getRecipes } from "../utils/API";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipeData = async () => {
      try {
        const response = await getRecipes();

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const recipes = await response.json();
        setRecipes(recipes);
      } catch (err) {
        console.error(err);
      }
    };
    getRecipeData();
  }, [recipes]);

  return (
    <Wrap spacing="30px" justify="center">
      {recipes?.map((recipe) => {
        return (
          <Card
            key={recipe._id}
            title={recipe.name}
            prep={recipe.prepTime}
            cook={recipe.cookTime}
            img={recipe.img}
            description={recipe.description}
            rating={recipe.rating}
          />
        );
      })}
    </Wrap>
  );
}
