import React, { useState } from "react";
import { Stack, Center, Button, Input } from "@chakra-ui/react";
import { newUser } from "../utils/API";
// import FormInput from "../components/FormInput";
// import { FontAwesome } from "@fortawesome/react-fontawesome";

// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await newUser(userData);

      if (!response.ok) {
        throw new Error("No new user added");
      }

      const { token, user } = await response.json();
      console.log(user);
    } catch (err) {
      console.error(err);
    }
    console.log(userData);
    setUserData({
      name: "",
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <>
      <Center mb="10" fontSize="20px">
        Join the Family!
      </Center>
      {/* <Header>Join the Family</Header> */}
      <Stack w="500px" align="center" mx="auto">
        <Input
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
        />
        <Input
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
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
        <Button onClick={handleFormSubmit} bg="#fce38a" align="center">
          Come on In!
        </Button>
      </Stack>
    </>
  );
}
