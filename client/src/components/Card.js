import React from "react";

import {
  WrapItem,
  Text,
  Image,
  LinkOverlay,
  LinkBox,
  Container,
  Button,
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
        <Container>
          {props.user && <Text>Created by {props.user}</Text>}
        </Container>
        <Image
          src={props.img}
          objectFit="cover"
          boxSize="200px"
          alt="Recipe Photo"
          align="center"
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
        {props.onEdit && (
          <Button onClick={props.onEdit} id={props._id}>
            Edit
          </Button>
        )}
        {props.delete && (
          <Button onClick={props.onDelete} id={props._id}></Button>
        )}
      </LinkBox>
    </WrapItem>
  );
}
