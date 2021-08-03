import React, { useState } from "react";

import { Center, Stack, Input, FormLabel, Button } from "@chakra-ui/react";

export default function AddRecipe() {
  const [ingredient, AddIngredient] = useState([]);

  const handleIngredientAdd = (event) => {
    return (
      <Input
        name="ingredient"
        //   value={userData.username}
        //   onChange={handleInputChange}
        placeholder="200g Chicken Breast"
      />
    );
  };
  return (
    <>
      <Center mb="6" fontSize="20px">
        What are you cooking for us today?
      </Center>
      {/* <Header>Join the Family</Header> */}
      <Stack w="500px" align="center" mx="auto">
        <FormLabel>Dish Name:</FormLabel>
        <Input
          name="name"
          //   value={userData.name}

          placeholder="Chicken Curry"
        />
        <FormLabel>Prep Time:</FormLabel>
        <Input
          name="prepTime"
          //   value={userData.email}
          //   onChange={handleInputChange}
          placeholder="20 Mins"
        />
        <FormLabel>Cook Time:</FormLabel>
        <Input
          name="cookTime"
          //   value={userData.email}
          //   onChange={handleInputChange}
          placeholder="1 Hr"
        />
        {/* <FormLabel>Ingredients:</FormLabel>
        <Input
          name="ingredient"
          //   value={userData.username}
          //   onChange={handleInputChange}
          placeholder="200g Chicken Breast"
        />
        <Button size="sm" bg=" #D991EE" align="center">
          Add Ingredient
        </Button> */}

        <Input
          name="password"
          //   value={userData.password}
          //   onChange={handleInputChange}
          placeholder="Password"
        />
        <Button onClick={handleIngredientAdd} bg=" #D991EE" align="center">
          Come on In!
        </Button>
      </Stack>
    </>
  );
}
