import React from "react";
import NavBarContainer from "./NavBarContainer";
import Logo from "./Logo";
// import MenuLinks from "./MenuLinks";

export default function Navbar() {
  return (
    <NavBarContainer>
      {/*
      <MenuLinks /> */}
      <Logo />
      <p>I am the tabs</p>
    </NavBarContainer>
  );
}
