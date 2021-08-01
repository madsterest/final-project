import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Card(props) {
  return (
    <Box w="300px" h="400px" p="5" border="1px" borderRadius="10">
      <Heading>{props.title}</Heading>
      <Text>Prep Time: {props.prep}</Text>
      <Text>Cook Time: {props.cook}</Text>
      <Text>Description: {props.description}</Text>
    </Box>
  );
}
