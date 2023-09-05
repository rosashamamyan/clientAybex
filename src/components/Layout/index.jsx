import React, { useState } from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import "./style.css";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="layout">
      <header className="header">
        <SideBar isOpen={isOpen} handleOpen={handleOpen} />
        <NavBar isOpen={isOpen} handleOpen={handleOpen} />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
