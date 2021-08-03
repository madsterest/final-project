import React from "react";

import { WrapItem, Text, Image, LinkOverlay, LinkBox } from "@chakra-ui/react";

export default function Card(props) {
  return (
    <WrapItem
      w="300px"
      h="400px"
      p="5"
      border="1px"
      borderRadius="30"
      borderColor="#364f6b"
      bg="#008080"
      _hover={{
        border: "2px",
        borderColor: "#D991EE",
        textDecoration: "none",
      }}
    >
      <LinkBox>
        <Image
          src={props.img}
          align="center"
          objectFit="cover"
          boxSize="200px"
        />
        <Text fontSize="20px" fontWeight="bold" color="#d3d3d3">
          <LinkOverlay
            _hover={{
              color: "#d3d3d3",
              textDecoration: "none",
            }}
            href="#"
          >
            {props.title}
          </LinkOverlay>
        </Text>
        <Text color="#d3d3d3">Prep Time: {props.prep}</Text>
        <Text color="#d3d3d3">Cook Time: {props.cook}</Text>
        <Text color="#d3d3d3">{props.description}</Text>
      </LinkBox>
    </WrapItem>
  );
}
