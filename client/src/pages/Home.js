import React, { useEffect, useState } from "react";

import { Wrap } from "@chakra-ui/react";
import Card from "../components/Card";
import Auth from "../utils/auth";
import { getRecipes, addToFavourites } from "../utils/API";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  useEffect(() => {
    const getRecipeData = async () => {
      try {
        const response = await getRecipes();

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const recipeData = await response.json();

        console.log(recipeData);
        setRecipes(recipeData);

        console.log(recipes);
      } catch (err) {
        console.error(err);
      }
    };
    getRecipeData();
  }, []);

  const addFavourite = (event) => {
    const recipeId = event.target.id;
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    const userId = Auth.getUserId(token);
    console.log(recipeId, userId);

    const getRecipeData = async () => {
      try {
        const response = await addToFavourites(recipeId, userId);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const recipeData = await response.json();
        console.log(recipeData);
      } catch (err) {
        console.error(err);
      }
    };
    getRecipeData();
  };

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
            _id={recipe._id}
            user={recipe.user.name}
            favourite={addFavourite}
          />
        );
      })}
    </Wrap>
  );
}
