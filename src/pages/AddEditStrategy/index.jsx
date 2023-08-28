import React from 'react'
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './style.css'

const AddEditStrategy = () => {
  return (
    <div className="strategy">
      <div className="strategy-container">
        <div className="strategy-header">
          <Link to={"/dashboard/strategyManagment"}>
            <IoChevronBackCircleOutline />
          </Link>
          <small>Strategy Managment</small>
        </div>
        <div className="strategy-tabs">
          <div className="tabs">
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Strategy Overview
            </NavLink>
            <NavLink
              to="/"
              onClick={ (event) => event.preventDefault() }
              className={({ isActive }) => (isActive ? "active" : "disabledLink")}
            >
              Sub-Funds
            </NavLink>
            <NavLink
              to="/"
              onClick={ (event) => event.preventDefault() }
              className={({ isActive }) => (isActive ? "active" : "disabledLink")}
            >
              Offering Docs
            </NavLink>
            <NavLink
              to="/"
              onClick={ (event) => event.preventDefault() }
              className={({ isActive }) => (isActive ? "active" : "disabledLink")}
            >
              Payment Instructions
            </NavLink>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AddEditStrategy