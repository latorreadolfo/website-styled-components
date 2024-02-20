import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarWrapper,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarWrapper>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              JOHNSON
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/signup">
                    <Button primary>Register</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/signup">
                    {/* onClick={closeMobileMenu} */}
                    <Button fontBig primary>
                      Register
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarWrapper>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
