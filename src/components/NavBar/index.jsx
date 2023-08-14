import React from "react";
import "./style.css";
import { TfiClose, TfiMenu } from "react-icons/tfi";

const NavBar = ({ isOpen, handleOpen }) => {
  return (
    <div className="navBar">
      {isOpen ? (
        <TfiClose className="burger_button" onClick={handleOpen} />
      ) : (
        <TfiMenu className="burger_button" onClick={handleOpen} />
      )}
    </div>
  );
};

export default NavBar;
