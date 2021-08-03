import React from "react";
import { HStack, Link } from "@chakra-ui/react";
import MenuItem from "./MenuItem.js";
import Auth from "../utils/auth";

export default function MenuLink() {
  const login = localStorage.getItem("id_token");

  return (
    <HStack>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/dashboard">Your Recipes</MenuItem>
      {/* <MenuItem href="favs">Favourites</MenuItem> */}
      {login ? (
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
          onClick={Auth.logout}
        >
          Logout
        </Link>
      ) : (
        <>
          <MenuItem href="/signup">Create Account</MenuItem>
          <MenuItem href="/login">Log In</MenuItem>
        </>
      )}
    </HStack>
  );
}
