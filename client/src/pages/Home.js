import React from "react";

import { Wrap } from "@chakra-ui/react";
import Card from "../components/Card";

import chicken from "../utils/Chicken-Puffs.jpeg";
import salad from "../utils/salad.jpeg";
import taco from "../utils/tacos.jpeg";

export default function Home() {
  const recipes = [
    {
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
      img: chicken,
      description:
        "Delicious chicken pastry in a whote cream sauce. Perfect for a cold night in",
      rating: "5",
      user: "6102893526de5735bb0cca6c",
    },
    {
      name: "Beef Tacos",
      prepTime: "30",
      cookTime: "60",
      ingredients: ["Beef", "Tacos", "Tomato", "Beans", "Onion"],
      instructions: [
        "Cook Beef",
        "Mix all ingredients together",
        "Warm up Taco",
        "Put ingredients in Taco",
      ],
      img: taco,
      description: "Healthy Beef Tacos with Tomato Salsa",
      rating: "4",
      user: "6102893526de5735bb0cca6c",
    },
    {
      name: "Salad",
      prepTime: "10",
      cookTime: "10",
      ingredients: ["Lettuce", "Spinach", "Tomato", "Cucumber", "Onion"],
      instructions: ["Mix all ingredients together"],
      img: salad,
      description: "Simple and healthy salad recipe",
      rating: "2",
      user: "6102893526de5735bb0cca6c",
    },
  ];
  return (
    <Wrap spacing="30px" justify="center">
      {recipes?.map((recipe) => {
        return (
          <>
            <Card
              title={recipe.name}
              prep={recipe.prepTime}
              cook={recipe.cookTime}
              img={recipe.img}
              description={recipe.description}
              rating={recipe.rating}
            />
          </>
        );
      })}
    </Wrap>
  );
}
