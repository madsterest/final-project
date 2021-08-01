import React from "react";
import { Hstack } from "@chakra-ui/react";

export default function About(props) {
  return (
    <HStack>
      {props.recipes?.map((recipe) => {
        return (
          <Card
            title={recipe.name}
            prep={recipe.prepTime}
            cook={recipe.cookTime}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            rating={recipe.rating}
          ></Card>
        );
      })}
    </HStack>
  );
}
