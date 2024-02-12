import React, { useState } from "react";
import {
  Nav,
  NavbarWrapper,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarWrapper>
            <NavLogo to="/">
              <NavIcon />
              JOHNSON
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarWrapper>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
