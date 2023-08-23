import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import {IoChevronBackCircleOutline} from "react-icons/io5"
import {BiSolidPencil} from "react-icons/bi"
import EditUser from '../../components/EditUser';
import { getUserData, selectUser } from '../../features/users/userSlice';
import './style.css'

const Profile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const dispatch = useDispatch()
  const userData = useSelector(selectUser)
  const params = useParams()

  const toggleEditModal = () => {
    setIsEditOpen(!isEditOpen)
  }

  useEffect(() => {
    dispatch(getUserData(params.id))
  }, [])
  
  const {firstName, lastName, email, phone, dob, address} = userData
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
              <NavLink
                to="contactInfo"
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
        <div className='outlet'>
          <Outlet />
        </div>
      </div>
      {isEditOpen && <EditUser toggleEditModal={toggleEditModal} userData={userData}/>}
    </div>
  );
}

export default Profile