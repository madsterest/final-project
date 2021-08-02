import React from "react";
import { HStack } from "@chakra-ui/react";
import MenuItem from "./MenuItem.js";

export default function MenuLink() {
  const login = localStorage.getItem("id_token");

  return (
    <HStack>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/dashboard">Your Recipes</MenuItem>
      {/* <MenuItem href="favs">Favourites</MenuItem> */}
      {login ? (
        <>
          <MenuItem href="/signup">Create Account</MenuItem>
          <MenuItem href="/signin">Sign In</MenuItem>
        </>
      ) : (
        <MenuItem href="/signup">Logout</MenuItem>
      )}
    </HStack>
  );
}
