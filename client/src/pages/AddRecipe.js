import React, { useState, useEffect } from "react";
import {
  Center,
  Stack,
  Input,
  FormLabel,
  Button,
  Image,
} from "@chakra-ui/react";
import Auth from "../utils/auth";
import { addNewRecipe } from "../utils/API";

export default function AddRecipe(props) {
  const [formData, addFormData] = useState({
    name: "",
    description: "",
    prepTime: "",
    cookTime: "",
    ingredients: [""],
    instructions: [""],
    user: "",
  });

  useEffect(() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    const userId = Auth.getUserId(token);
    console.log(userId);
    addFormData({ ...formData, user: userId });
    console.log(formData);
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    addFormData({ ...formData, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { name, value } = event.target;
    const list = { ...formData };
    list[name][index] = value;
    addFormData(list);

    console.log(formData);
  };

  const handleInstructionChange = (event, index) => {
    const { name, value } = event.target;
    const list = { ...formData };
    list[name][index] = value;
    addFormData(list);

    console.log(formData);
  };

  const onPictureChange = (event) => {
    const image = URL.createObjectURL(event.target.files[0]);
    console.log(image);
    const list = { ...formData, img: event.target.files[0] };
    addFormData(list);
  };

  const handleAddClick = (event) => {
    const buttonId = event.target.id;
    if (buttonId === "ingredient") {
      addFormData({ ...formData, ingredients: [...formData.ingredients, ""] });
    } else if (buttonId === "instruction") {
      addFormData({
        ...formData,
        instructions: [...formData.instructions, ""],
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    const userId = Auth.getUserId(token);
    console.log(userId);
    addFormData({ ...formData, user: userId });

    try {
      console.log(formData);
      const response = await addNewRecipe(formData, token);

      if (!response.ok) {
        throw new Error("Unable to finish request");
      }
      const newRecipe = await response.json();

      console.log(newRecipe);
    } catch (err) {
      console.error(err);
    }

    console.log(formData);
    addFormData({
      name: "",
      description: "",
      prepTime: "",
      cookTime: "",
      ingredients: [""],
      instructions: [""],
      img: "",
      user: "",
    });

    window.location.assign("/dashboard");
  };

  return (
    <>
      <form encType="multipart/form-data">
        <Center mb="6" fontSize="20px">
          What are you cooking for us today?
        </Center>
        {/* <Header>Join the Family</Header> */}
        <Stack w="500px" align="center" mx="auto" mb="20">
          <FormLabel>Dish Name:</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            placeholder="Wine Cream Chicken"
          />
          <FormLabel>Description:</FormLabel>
          <Input
            name="description"
            value={formData.description}
            onChange={handleOnChange}
            placeholder="Creamy chicken bake covered in breadcrumbs. Perfect for a holiday feast or a cozy night in"
          />
          <FormLabel>Prep Time:</FormLabel>
          <Input
            name="prepTime"
            value={formData.prepTime}
            onChange={handleOnChange}
            placeholder="20 Mins"
          />
          <FormLabel>Cook Time:</FormLabel>
          <Input
            name="cookTime"
            value={formData.cookTime}
            onChange={handleOnChange}
            placeholder="1 Hr"
          />
          <FormLabel>Ingredients:</FormLabel>
          {formData.ingredients.map((ingredient, i) => {
            return (
              <Input
                key={i}
                name="ingredients"
                value={ingredient}
                onChange={(e) => handleIngredientChange(e, i)}
                placeholder="200g Chicken Breast"
              />
            );
          })}
          <Button
            id="ingredient"
            onClick={handleAddClick}
            size="sm"
            bg=" #D991EE"
            align="center"
          >
            Add Ingredient
          </Button>
          <FormLabel>Instructions:</FormLabel>
          {formData.instructions.map((instruction, i) => {
            return (
              <Input
                key={i}
                name="instructions"
                value={instruction}
                onChange={(e) => handleInstructionChange(e, i)}
                placeholder="Preheat Oven to 250 degrees"
              />
            );
          })}
          <Button
            id="instruction"
            onClick={(e) => handleAddClick(e)}
            size="sm"
            bg=" #D991EE"
            align="center"
          >
            Add Step
          </Button>
          <FormLabel>
            *Warning* This cannot be changed later, so choose wisely!
          </FormLabel>
          <Input
            name="img"
            onChange={onPictureChange}
            type="file"
            accept="img/x-png"
          />

          <Button
            onClick={(e) => handleFormSubmit(e)}
            size="md"
            bg=" #D991EE"
            align="center"
          >
            Create Recipe!
          </Button>
        </Stack>
      </form>
    </>
  );
}
