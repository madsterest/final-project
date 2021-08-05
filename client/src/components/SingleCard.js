import React from "react";
import { VStack, Text, Image, Button } from "@chakra-ui/react";

export default function SingleCard(props) {
  return (
    <VStack>
      <Text>{props.name}</Text>
      <Text>{props.description}</Text>
      <Image
        src={props.img}
        mx="auto"
        objectFit="cover"
        boxSize="400px"
        alt="Recipe Photo"
      />
      <Text>Prep Time: {props.prepTime}</Text>
      <Text>Cook Time: {props.cookTime}</Text>
      <Text>Ingredients:</Text>
      {props.ingredients.map((ingredient, index) => {
        return <Text key={index}>{ingredient}</Text>;
      })}
      <Text>Instructions:</Text>
      {props.instructions.map((instruction, index) => {
        return (
          <Text key={index}>
            {index + 1}. {instruction}
          </Text>
        );
      })}
    </VStack>
  );
}
