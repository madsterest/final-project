import React from "react";
import { Flex } from "@chakra-ui/react";

export default function NavBarContainer({ children }) {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      pl="8"
      pr="8"
      mb="2"
      borderBottom="1px"
      borderBottomColor="#fc5185"
    >
      {children}
    </Flex>
  );
}
