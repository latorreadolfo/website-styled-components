import React, { useState } from "react";
import {
  Nav,
  NavbarWrapper,
  NavLogo,
  NavIcon,
  MobileIcon,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarWrapper>
          <NavLogo to="/">
            <NavIcon />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
