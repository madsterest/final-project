import React, { useState, useEffect } from "react";
import {
  Center,
  Stack,
  Input,
  FormLabel,
  Button,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Auth from "../utils/auth";
import { addNewRecipe } from "../utils/API";

export default function AddRecipe() {
  const [formData, addFormData] = useState({
    name: "",
    description: "",
    prepTime: "",
    cookTime: "",
    img: "",
    ingredients: [""],
    instructions: [""],
    user: "",
  });

  const [formError, addFormError] = useState({
    name: false,
    description: false,
    prepTime: false,
    cookTime: false,
    ingredients: false,
    instructions: false,
    img: false,
  });

  console.log(formError);

  useEffect(() => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    const userId = Auth.getUserId(token);
    addFormData({ ...formData, user: userId });
    console.log(formData);
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    addFormData({ ...formData, [name]: value });
  };

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    if (!value) {
      addFormError({ ...formError, [name]: true });
    } else {
      const list = { ...formError, [name]: false };
      addFormError(list);
      console.log("No form error");
    }
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

  const validate = (event) => {
    for (const element in formData) {
      if (formData[element] === "") {
        return;
      }
    }

    handleFormSubmit(event);
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

    addFormError({
      name: false,
      description: false,
      prepTime: false,
      cookTime: false,
      ingredients: false,
      instructions: false,
      img: false,
    });

    window.location.assign("/dashboard");
  };

  return (
    <>
      <form encType="multipart/form-data">
        <Center mb="6" fontSize="20px">
          What are you cooking for us today?
        </Center>
        <Stack w="500px" align="center" mx="auto" mb="20">
          <FormLabel>Dish Name:</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            placeholder="Wine Cream Chicken"
            onBlur={handleOnBlur}
          />
          {formError.name === true && (
            <Text color="#008080">Please input a name</Text>
          )}

          <FormLabel>Description:</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleOnChange}
            placeholder="Creamy chicken bake covered in breadcrumbs. Perfect for a holiday feast or a cozy night in"
            onBlur={handleOnBlur}
          />
          {formError.description === true && (
            <Text color="#008080">Please input a description</Text>
          )}
          <FormLabel>Prep Time:</FormLabel>
          <Input
            name="prepTime"
            value={formData.prepTime}
            onChange={handleOnChange}
            placeholder="20 Mins"
            onBlur={handleOnBlur}
          />
          {formError.prepTime === true && (
            <Text color="#008080">Please input a preparation time</Text>
          )}
          <FormLabel>Cook Time:</FormLabel>
          <Input
            name="cookTime"
            value={formData.cookTime}
            onChange={handleOnChange}
            placeholder="1 Hr"
            onBlur={handleOnBlur}
          />
          {formError.cookTime === true && (
            <Text color="#008080">Please input a Cook time</Text>
          )}
          <FormLabel>Ingredients:</FormLabel>
          {formData.ingredients.map((ingredient, i) => {
            return (
              <Input
                key={i}
                name="ingredients"
                value={ingredient}
                onChange={(e) => handleIngredientChange(e, i)}
                placeholder="200g Chicken Breast"
                onBlur={(e) => handleOnBlur(e)}
              />
            );
          })}
          {formError.ingredients === true ? (
            <>
              <Button id="ingredient" size="sm" bg=" #D991EE" align="center">
                Add Ingredient
              </Button>

              <Text color="#008080">Please input ingredients</Text>
            </>
          ) : (
            <Button
              id="ingredient"
              onClick={handleAddClick}
              size="sm"
              bg=" #D991EE"
              align="center"
            >
              Add Ingredient
            </Button>
          )}

          <FormLabel>Instructions:</FormLabel>
          {formData.instructions.map((instruction, i) => {
            return (
              <Input
                key={i}
                name="instructions"
                value={instruction}
                onChange={(e) => handleInstructionChange(e, i)}
                placeholder="Preheat Oven to 250 degrees"
                onBlur={(e) => handleOnBlur(e)}
              />
            );
          })}
          {formError.instructions === true ? (
            <>
              <Button id="instruction" size="sm" bg=" #D991EE" align="center">
                Add Step
              </Button>

              <Text color="#008080">Please input instructions</Text>
            </>
          ) : (
            <Button
              id="instruction"
              onClick={handleAddClick}
              size="sm"
              bg=" #D991EE"
              align="center"
            >
              Add Step
            </Button>
          )}

          <FormLabel>
            *Warning* This cannot be changed later, so choose wisely!
          </FormLabel>
          <Input
            name="img"
            onChange={onPictureChange}
            type="file"
            accept="img/x-png"
          />

          <Button onClick={validate} size="md" bg=" #D991EE" align="center">
            Create Recipe!
          </Button>
        </Stack>
      </form>
    </>
  );
}
