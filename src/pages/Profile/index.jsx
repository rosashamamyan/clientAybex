import React, { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {IoChevronBackCircleOutline} from "react-icons/io5"
import {BiSolidPencil} from "react-icons/bi"
import './style.css'
import EditUser from '../../components/EditUser';

const Profile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const navigate = useNavigate()

  const toggleEditModal = () => {
     setIsEditOpen(!isEditOpen)
  }

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <Link to={"/dashboard/userManagment"}>
            <IoChevronBackCircleOutline />
          </Link>
          <small>User Profile</small>
        </div>
        <div className="profile-tabs">
          <div className="tabs">
            {/* <button onClick={() => navigateTo("")}>Contact Info</button>
            <button onClick={() => navigateTo("investorFunds")}>Investor Funds</button>
            <button onClick={() => navigateTo("investorEntities")}>Investor Entities</button>
            <button onClick={() => navigateTo("documents")}>Documents</button> */}
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Contact Info
              </NavLink>
              <NavLink
                to="investorFunds"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Investor Funds
              </NavLink>
              <NavLink
                to="investorEntities"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Investor Entities
              </NavLink>
              <NavLink
                to="documents"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Documents
              </NavLink>
          </div>
          <div>
            <button className="editButton" onClick={toggleEditModal}>
              <BiSolidPencil />
            </button>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      {isEditOpen && <EditUser toggleEditModal={toggleEditModal} />}
    </div>
  );
}

export default Profile