import React, { useState } from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import './style.css'

const EditUser = ({toggleEditModal}) => {
  const [formData, setFormData] = useState({});

  const handleDateChange = (newDate) => {
    console.log(newDate);
  };

  const handleSave = async () => {
    reset();
    toggleEditModal();
  };

  const onSubmit = (data) => {
    setFormData({ ...data });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="editUser">
      <div className="editUser-container">
        <div className="editUser-container-header">
          <div>Edit User Contact Details</div>
          <div className="cancel-icon">
            <ClearIcon onClick={toggleEditModal} />
          </div>
        </div>
        <form>
          <div className="editUser-form">
            <div className="form">
              <TextField
                label="First Name*"
                sx={{ m: "0 0 30px 0" }}
                {...register("firstName", { required: true })}
              />
              <TextField
                label="Email"
                sx={{ m: "0 0 30px 0" }}
                {...register("email", { required: true })}
              />
              <TextField
                label="Street Address"
                sx={{ m: "0 0 30px 0" }}
                {...register("address", { required: true })}
              />
              <TextField
                label="State/Region"
                sx={{ m: "0 0 30px 0" }}
                {...register("state", { required: true })}
              />
              <TextField
                label="City"
                {...register("city", { required: true })}
              />
            </div>
            <div className="form">
              <TextField
                label="Last Name*"
                sx={{ m: "0 0 30px 0" }}
                {...register("lastName", { required: true })}
              />
              <TextField
                label="Phone Number"
                sx={{ m: "0 0 30px 0" }}
                {...register("phone", { required: true })}
              />
              <TextField
                label="Country"
                sx={{ m: "0 0 30px 0" }}
                {...register("country", { required: true })}
              />
              <TextField
                label="Postal Code"
                sx={{ m: "0 0 30px 0" }}
                {...register("postal_code", { required: true })}
              />
              <input
                type="date"
                className="dateInput"
                onChange={(newDate) => {
                  handleDateChange(newDate.toISOString());
                }}
                {...register("dob", { required: true })}
              />
            </div>
          </div>
          <div className="editUser-button">
            <button>save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser