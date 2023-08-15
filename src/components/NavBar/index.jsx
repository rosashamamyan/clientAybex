import React from "react";
import "./style.css";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import NavBarLogo from "../../assets/images/NavBarLogo";
import bg from "../../assets/images/dashboard_banner3.jpg"

const NavBar = ({ isOpen, handleOpen }) => {
  return (
    <div className="navBar-container">
      <div className="navBar">
        <div className="navbar-logo">
          <NavBarLogo />
        </div>
        <div>
          {isOpen ? (
            <TfiClose className="burger_button" onClick={handleOpen} />
          ) : (
            <TfiMenu className="burger_button" onClick={handleOpen} />
          )}
        </div>
      </div>
      {/* <div className="navBar-image">
        <img src={bg} alt="navbar background image" />
      </div> */}
    </div>
  );
};

export default NavBar;
