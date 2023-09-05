import React, { useEffect, useState } from "react";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import NavBarLogo from "../../assets/images/NavBarLogo";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = ({ isOpen, handleOpen }) => {
  const [formattedPageName, setFormattedPageName] = useState('')
  const location = useLocation()
  const pageName = location.pathname.split("/")[2];

  useEffect(() => {
    if(pageName) {
      const formattedName = pageName
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
        .replace(/^./, (str) => str.toUpperCase());
  
      setFormattedPageName(formattedName);
    } else {
      setFormattedPageName("");
    }
  }, [pageName]);

  return (
    <div className="navBar-container">
      <div className="navBar">
        <div className="navbar-logo">
          <Link to={"/dashboard"}><NavBarLogo /></Link>
        </div>
        <div className="menu-button">
          {isOpen ? (
            <TfiClose className="burger_button" onClick={handleOpen} />
          ) : (
            <TfiMenu className="burger_button" onClick={handleOpen} />
          )}
        </div>
        <div className="navbar-pageName">{formattedPageName ? formattedPageName : null}</div>
      </div>
    </div>
  );
};

export default NavBar;
