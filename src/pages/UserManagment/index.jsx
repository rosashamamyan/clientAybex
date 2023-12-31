import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {IoMdDownload} from "react-icons/io"
import { fetchUsers, selectUsers } from "../../features/users/userSlice";
import AddUser from "../../components/Modals/AddUser"
import DataTable from "../../components/DataTable";
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

  return (
    <div className="container">
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
        </div>
        <div className="userManagment__data">
          <DataTable usersData={usersData} />
        </div>
      </div>
      {isOpen && <AddUser toggleForm={toggleForm} />}
    </div>
  );
};

export default UserManagment;
