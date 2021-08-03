import React, { useState } from "react";
import { Center, Stack, Input, Button } from "@chakra-ui/react";
import { userLogin } from "../utils/API";
import Auth from "../utils/auth";

export default function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);

    try {
      const response = await userLogin(userData);

      if (!response.ok) {
        throw new Error("Unable to perform request");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setUserData({ username: "", password: "" });
  };
  return (
    <>
      <Center mb="6" fontSize="20px">
        Welcome Back!
      </Center>
      <Stack w="500px" align="center" mx="auto">
        <Input
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <Input
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <Button onClick={handleFormSubmit} bg="#D991EE" align="center">
          Come on In!
        </Button>
      </Stack>
    </>
  );
}
