import React from "react";
import { Flex } from "@chakra-ui/react";

export default function NavBarContainer({ children }) {
  return (
    <Flex
      bg="#dcd0ff"
      align="center"
      justify="space-between"
      w="100%"
      p="10"
      mb="2"
    >
      {children}
    </Flex>
  );
}
