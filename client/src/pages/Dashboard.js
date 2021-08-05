import React, { useEffect, useState } from "react";
import { Wrap, Center, Button } from "@chakra-ui/react";
import Card from "../components/Card";
import Auth from "../utils/auth";
import { getUserRecipes } from "../utils/API";

export default function Dashboard() {
  const login = localStorage.getItem("id_token");
  const [recipes, setRecipes] = useState([
    {
      name: "",
      description: "",
      prepTime: "",
      cookTime: "",
      ingredients: [""],
      instructions: [""],
      user: "",
    },
  ]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }
        const userId = Auth.getUserId(token);
        console.log(userId);
        console.log(token);
        const response = await getUserRecipes(token, userId);

        if (!response.ok) {
          throw new Error("Unable to finish request");
        }

        const userData = await response.json();
        console.log(userData);
        const recipeData = userData[0].recipes;
        console.log(recipes);

        setRecipes(recipeData);
      } catch (err) {
        console.error(err);
      }
    };
    getRecipes();
  }, [recipes]);

  if (!login) {
    window.location.assign("/login");
  }

  const handleOnClick = () => {
    window.location.assign("/new-recipe");
  };

  return (
    <>
      <Center mb="6" fontSize="20px">
        Your Recipes!'
      </Center>
      <Center>
        <Button onClick={handleOnClick} bg=" #D991EE" mx="auto" mb="10">
          Add a New Recipe
        </Button>
      </Center>

      <Wrap spacing="30px" justify="center">
        {recipes?.map((recipe) => {
          return (
            <Card
              key={recipe._id}
              title={recipe.name}
              prep={recipe.prepTime}
              cook={recipe.cookTime}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              rating={recipe.rating}
              _id={recipe._id}
              user={recipe.user}
            ></Card>
          );
        })}
      </Wrap>
    </>
  );
}
