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
      bg="#fce38a"
      _hover={{
        borderColor: "#fc5185",
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
        <Text fontSize="20px" fontWeight="bold" color="#364f6b">
          <LinkOverlay
            _hover={{
              color: "#fc5185",
              textDecoration: "none",
            }}
            href="#"
          >
            {props.title}
          </LinkOverlay>
        </Text>
        <Text color="#364f6b">Prep Time: {props.prep}</Text>
        <Text color="#364f6b">Cook Time: {props.cook}</Text>
        <Text color="#364f6b">{props.description}</Text>
      </LinkBox>
    </WrapItem>
  );
}
