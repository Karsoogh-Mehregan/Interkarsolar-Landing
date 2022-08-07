import React from "react";
import {
  Nav,
  NavBtn,
  NavBtnLink,
}
from "./NavBarStyle.js";
const NavBar = ({onConfirm}) => {
    return (
      <Nav>
        <NavBtn>
          <NavBtnLink to={`/`} bg={"#B60343"} onClick={onConfirm}>
              خروج
          </NavBtnLink>
        </NavBtn>
      </Nav>
    );
  };
  
  export default NavBar;