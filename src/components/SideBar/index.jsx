import React, { useEffect, useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { FaRegUserCircle, FaUpload } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import {
  BsGraphUpArrow,
  BsCurrencyDollar,
  BsPhone,
  BsPlusSquare,
} from "react-icons/bs";
import { GiGreekTemple } from "react-icons/gi";
import { CgFileDocument, CgSmartphoneShake } from "react-icons/cg";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlineStar } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { PiUsersThree } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import "./style.css";

const SideBar = ({ isOpen, handleOpen }) => {
  return (
    <nav className={isOpen ? "navOpen" : "navClose"}>
      <div>
        <div className="navItem">
          <FiUserPlus />
          <NavLink to={"accountManagment"} onClick={handleOpen}>
            Account Managment
          </NavLink>
        </div>
        <div className="navItem">
          <FaRegUserCircle />
          <NavLink to={"adminManagment"} onClick={handleOpen}>
            Admin Managment
          </NavLink>
        </div>
        <div className="navItem">
          <GoBell />
          <NavLink to={"adminNotifications"} onClick={handleOpen}>
            Admin Notifications
          </NavLink>
        </div>
        <div className="navItem">
          <BsGraphUpArrow />
          <NavLink to={"balanceUpload"} onClick={handleOpen}>
            Balance Upload
          </NavLink>
        </div>
        <div className="navItem">
          <GiGreekTemple />
          <NavLink to={"balanceManagment"} onClick={handleOpen}>
            Balance Managment
          </NavLink>
        </div>
        <div className="navItem">
          <BsCurrencyDollar />
          <NavLink to={"capitalCallManagment"} onClick={handleOpen}>
            Capital Call Managment
          </NavLink>
        </div>
        <div className="navItem">
          <FaUpload />
          <NavLink to={"documentUpload"} onClick={handleOpen}>
            Document Upload
          </NavLink>
        </div>
        <div className="navItem">
          <CgFileDocument />
          <NavLink to={"documentManagment"} onClick={handleOpen}>
            Document Managment
          </NavLink>
        </div>
        <div className="navItem">
          <LuCalendarDays />
          <NavLink to={"eventManagment"} onClick={handleOpen}>
            Event Managment
          </NavLink>
        </div>
        <div className="navItem">
          <AiOutlineStar />
          <NavLink to={"indicationManagment"} onClick={handleOpen}>
            Indication Managment
          </NavLink>
        </div>
        <div className="navItem">
          <CgSmartphoneShake />
          <NavLink to={"newsfeedManagment"} onClick={handleOpen}>
            Newsfeed Managment
          </NavLink>
        </div>
        <div className="navItem">
          <BsPhone />
          <NavLink to={"pushNotifications"} onClick={handleOpen}>
            Push Notifications
          </NavLink>
        </div>
        <div className="navItem">
          <VscGraph />
          <NavLink to={"strategyManagment"} onClick={handleOpen}>
            Strategy Managment
          </NavLink>
        </div>
        <div className="navItem">
          <BsPlusSquare />
          <NavLink to={"subscriptionManagment"} onClick={handleOpen}>
            Subscription Managment
          </NavLink>
        </div>
        <div className="navItem">
          <PiUsersThree />
          <NavLink to={"userManagment"} onClick={handleOpen}>
            User Managment
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
