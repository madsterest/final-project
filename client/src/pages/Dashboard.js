import React, { useEffect, useState } from "react";
import { Wrap, Center, Link, Button } from "@chakra-ui/react";
import Card from "../components/Card";
import Auth from "../utils/auth";
import { getUserRecipes } from "../utils/API";

export default function Dashboard() {
  const login = localStorage.getItem("id_token");
  const [recipes, setRecipes] = useState([]);
  // const [loading, setLoading] = useState(false);
  // let componentMounted = true;

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }
        const userId = Auth.getUserId(token);
        console.log(userId);
        const response = await getUserRecipes(token, userId);

        if (!response.ok) {
          throw new Error("Unable to finish request");
        }

        const userData = await response.json();
        const recipes = userData[0].recipes;
        console.log(recipes);

        setRecipes(recipes);
      } catch (err) {
        console.error(err);
      }
    };
    getRecipes();
  }, []);

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
              img={recipe.img}
            ></Card>
          );
        })}
      </Wrap>
    </>
  );
}
