import React, { useEffect, useState } from "react";
import { Wrap, Center, Button } from "@chakra-ui/react";
import Card from "../components/Card";
import Auth from "../utils/auth";
import { getUserRecipes, deleteRecipe } from "../utils/API";

export default function Dashboard() {
  const login = localStorage.getItem("id_token");
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState();
  console.log(user);

  console.log(recipes);
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }
        const userId = Auth.getUserId(token);
        setUser(userId);

        const response = await getUserRecipes(token, userId);

        if (!response.ok) {
          throw new Error("Unable to finish request");
        }

        const userData = await response.json();
        console.log(userData);

        const recipeData = userData[0].recipes;

        setRecipes(recipeData);
      } catch (err) {
        console.error(err);
      }
    };
    getRecipes();
  }, []);

  if (!login) {
    window.location.assign("/login");
  }

  const handleEditClick = (event) => {
    const recipeId = event.target.id;
    window.location.assign(`/edit/${recipeId}`);
  };

  const handleDelete = (event) => {
    const recipeId = event.target.id;
    console.log(recipeId, user);

    const removeRecipe = async () => {
      try {
        const response = await deleteRecipe(recipeId, user);

        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const userData = await response.json();

        setRecipes(userData.recipes);
      } catch (err) {
        console.error(err);
      }
    };
    removeRecipe();
  };

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
              img={recipe.img}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            ></Card>
          );
        })}
      </Wrap>
    </>
  );
}
