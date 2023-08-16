import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {IoMdDownload} from "react-icons/io"
import { fetchUsers, selectUsers } from "../../features/users/userSlice";
import AddUser from "../../components/Modals/AddUser"
import "./style.css";

const UserManagment = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(selectUsers);
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(usersData);

  return (
    <div className="userManagment">
      <div className="userManagment__container">
        <div className="userManagment__control">
          <div className="userManagment__control-header">User Managment</div>

          <div className="userManagment__control-checkbox">
            <input type="checkbox" />
            <small>Show pending change requests</small>
          </div>

          <div className="userManagment__control-search">
            <input type="text" placeholder="Search" />
          </div>

          <div className="userManagment__control-buttons">
            <div className="userManagment__control-buttonsContainer">
              <button className="purple-button">+ bulk user upload</button>
              <button onClick={toggleForm} className="purple-button">
                + new user
              </button>
              <button>
                <IoMdDownload />
              </button>
              <button className="purple-button">
                send set password emails
              </button>
            </div>
          </div>

          {isOpen && <AddUser toggleForm={toggleForm} />}
        </div>
        <div className="userManagment__data"></div>
      </div>
    </div>
  );
};

export default UserManagment;
