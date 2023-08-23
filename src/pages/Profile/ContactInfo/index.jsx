import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUserData, selectUser } from '../../../features/users/userSlice';
import './style.css'

const ContactInfo = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const params = useParams();

  useEffect(() => {
    dispatch(getUserData(params.id));
  }, []);

  const { firstName, lastName, email, phone, dob, address, createdAt } =
    userData;

  const date = new Date(createdAt);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}/${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="contactInfo">
      <div className="info">
        <div className="profpic">profpic</div>
        <div className="userData">
          <div>
            <small>
              <b>First Name</b>
            </small>
            <small>{firstName}</small>
          </div>
          <div>
            <small>
              <b>Last Name</b>
            </small>
            <small>{lastName}</small>
          </div>
          <div>
            <small>
              <b>Address</b>
            </small>
            <small>{address?.address}</small>
          </div>
          <div>
            <small>
              <b>Phone</b>
            </small>
            <small>{phone}</small>
          </div>
          <div>
            <small>
              <b>Email</b>
            </small>
            <small>{email}</small>
          </div>
          <div>
            <small>
              <b>DOB</b>
            </small>
            <small>{dob}</small>
          </div>
        </div>
      </div>
      <div className="date">
        <small>App User Since: {formattedDate}</small>
        <button>Reactivate account</button>
      </div>
    </div>
  );
}

export default ContactInfo