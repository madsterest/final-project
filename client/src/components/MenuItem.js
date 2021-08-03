import React from "react";

import { Link, Text } from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

export default function MenuItem({ href, children }) {
  return (
    <Link
      py="2"
      px="5"
      border="1px"
      // bg=" #75ffff"
      borderColor=" #75ffff"
      borderRadius="10px"
      color="#364f6b"
      _hover={{
        borderColor: "#D991EE",
        textDecoration: "none",
      }}
      as={ReachLink}
      to={href}
    >
      <Text display="block">{children}</Text>
    </Link>
  );
}
