import React from "react";
import { HStack } from "@chakra-ui/react";
import MenuItem from "./MenuItem.js";

export default function MenuLink() {
  return (
    <HStack>
      <MenuItem>Home</MenuItem>
      <MenuItem>Dashboard</MenuItem>
      <MenuItem>Favourites</MenuItem>
      <MenuItem>Logout</MenuItem>
    </HStack>
  );
}
