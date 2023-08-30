import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'

const DocumentUpload = () => {
  return (
    <div className="doc">
    <div className="doc-container">
      <div className="doc-header">
        <small>Upload documents by user-viewing type</small>
      </div>
      <div className="doc-tabs">
        <div className="tabs">
          <NavLink
            to="universal"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Universal
          </NavLink>
          <NavLink
            to="strategySpecific"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Strategy Specific
          </NavLink>
          <NavLink
            to="subFundSpecific"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sub-Fund Specific
          </NavLink>
          <NavLink
            to="accountSpecific"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Account Specific
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

export default DocumentUpload