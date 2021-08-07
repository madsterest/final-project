import React, { useState, useEffect } from "react";
import {
  Center,
  Stack,
  Input,
  FormLabel,
  Button,
  Text,
} from "@chakra-ui/react";
import Auth from "../utils/auth";
import { editRecipe, getIndividualRecipe } from "../utils/API";

export default function AddRecipe(props) {
  const [formData, addFormData] = useState({
    name: "",
    description: "",
    prepTime: "",
    cookTime: "",
    ingredients: [""],
    instructions: [""],
    img: "",
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

  const [submitError, setSubmitError] = useState(false);

  console.log(submitError);

  const URLPath = window.location.pathname;
  console.log(URLPath);

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
        addFormData(recipeData[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRecipeData();
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

    console.log(formData);
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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const submitForm = async () => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      try {
        console.log(formData);
        const response = await editRecipe(formData, token);

        if (!response.ok) {
          throw new Error("Unable to finish request");
        }
        const newRecipe = await response.json();

        console.log(newRecipe);
      } catch (err) {
        console.error(err);
      }

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
      console.log("Function still running");

      window.location.assign("/dashboard");
    };

    for (const element in formData) {
      if (formData[element] === "") {
        setSubmitError(true);
      }
    }

    if (submitError) {
      return false;
    } else submitForm();
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
          <Input
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
