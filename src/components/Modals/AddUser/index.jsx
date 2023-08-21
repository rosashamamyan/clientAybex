import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SaveChanges from "../SaveChanges";
import { useDispatch } from "react-redux";
import { addUser } from "../../../features/users/userSlice";
import "./style.css";

const AddUser = ({ toggleForm }) => {
  const [isShow, setIsShow] = useState(true);
  const [isSaveOpen, setIsSaveOpen] = useState(false)
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()

  const handleShow = () => {
    setIsShow(!isShow);
  };
  
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDateChange = (newDate) => {
   console.log(newDate);
  };

  const handleSave = async() => {
    dispatch(addUser(formData))
    toggleSaveModal(false)
    reset()
    toggleForm()
  } 

  const toggleSaveModal = (bool) => {
     setIsSaveOpen(bool)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setFormData({...data})
  };

  return (
    <div className="addUser">
      <div className="addUser__container">
        <div className="addUser__container-header">
          <div>Add New User</div>
          <div className="cancel-icon">
            <ClearIcon onClick={toggleForm} />
          </div>
        </div>
        <div className="addUser__container-numbers">
          <div className="addUser__container_tabs">
            <div className={`num-container ${isShow ? "activeTab" : ""}`}>
              1
            </div>
            <div className="line"></div>
            <div className={`num-container ${isShow ? "" : "activeTab"}`}>
              2
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="addUser__forms">
            {isShow ? (
              <>
                <div className="addUser__form">
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
                      label="Country"
                      {...register("country", { required: true })}
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
                      label="City"
                      sx={{ m: "0 0 30px 0" }}
                      {...register("city", { required: true })}
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
                <div className="tabs-buttons">
                  <button onClick={handleShow} className="purple-button">
                    continue
                  </button>
                </div>
              </>
            ) : (
              <div className="addAcount__form">
                <div className="form__inputs">
                  <TextField
                    label="Account Number"
                    sx={{ m: "0 30px 0 0" }}
                    {...register("account_number", { required: true })}
                  />
                  <select {...register("account_status", { required: true })} className="status-input" value={status} onChange={handleStatusChange}>
                    <option value={0}>deactivted</option>
                    <option value={1}>activated</option>
                  </select>
                </div>
                <div className="tabs-buttons">
                  <button
                    className="purple-button"
                    onClick={() => toggleSaveModal(true)}
                  >
                    save
                  </button>
                  <button onClick={handleShow} className="white-button">
                    back
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
        {isSaveOpen && (
          <SaveChanges
            toggleSaveModal={toggleSaveModal}
            isSaveOpen={isSaveOpen}
            handleSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};
export default AddUser;






              {/* <TextField
                value={status}
                onChange={(e) => handleStatusChange(e)}
                select
                {...register("account_status", { required: true })}
                label="Acount Status"
              >
                <MenuItem value={1}>activated</MenuItem>
                <MenuItem value={0}>deactivated</MenuItem>
              </TextField> */}
              {
                /* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Age"
                onChange={(e) => handleStatusChange(e)}
                {...register("account_status", { required: false })}
              >
              <MenuItem value={10}>activated</MenuItem>
              <MenuItem value={20}>deactivated</MenuItem>
            </Select> */
              }