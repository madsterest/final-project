import React from "react";

import {
  WrapItem,
  Text,
  Image,
  LinkOverlay,
  LinkBox,
  Container,
} from "@chakra-ui/react";

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
        <Container mb="0">
          <Text>Created by </Text>
        </Container>
        <Image
          src={props.img}
          align="center"
          objectFit="cover"
          boxSize="200px"
          alt="Recipe Photo"
        />
        <Text fontSize="20px" fontWeight="bold" color="#ffffff">
          <LinkOverlay
            _hover={{
              color: "#d3d3d3",
              textDecoration: "none",
            }}
            href={props._id}
          >
            {props.title}
          </LinkOverlay>
        </Text>
        <Text color="#ffffff">Prep Time: {props.prep}</Text>
        <Text color="#ffffff">Cook Time: {props.cook}</Text>
        <Text color="#ffffff">{props.description}</Text>
      </LinkBox>
    </WrapItem>
  );
}
