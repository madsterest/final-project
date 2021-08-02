import React from "react";

import { Link, Text } from "@chakra-ui/react";

export default function MenuItem({ href, children }) {
  return (
    <Link
      py="2"
      px="5"
      border="1px"
      borderColor="#3fc1c9"
      borderRadius="10px"
      color="#364f6b"
      _hover={{
        borderColor: "#fc5185",
        textDecoration: "none",
      }}
      to={href}
    >
      <Text display="block">{children}</Text>
    </Link>
  );
}
