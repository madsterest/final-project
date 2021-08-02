import React from "react";
import { HStack } from "@chakra-ui/react";
import MenuItem from "./MenuItem.js";

export default function MenuLink() {
  return (
    <HStack>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/dashboard">Your Recipes</MenuItem>
      <MenuItem>Favourites</MenuItem>
      <MenuItem>Sign Up</MenuItem>
    </HStack>
  );
}
