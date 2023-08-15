import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import { create } from "../../../service/User";
import "./style.css";

const AddUser = ({ toggleForm }) => {
  const [isShow, setIsShow] = useState(true)

  const handleShow = () => {
    setIsShow(!isShow)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await create(data);
    reset();
    setTimeout(() => {
      toggleForm();
    }, 500);
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
          {isShow ? (
            <form className="addUser__form">
              <div>
                <TextField
                  label="First Name*"
                  sx={{ m: "0 0 30px 0" }}
                  {...register("First Name*", { required: true })}
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
              <div>
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
                <TextField
                  label="DOB"
                  {...register("postal_code", { required: true })}
                />
              </div>
            </form>
          ) : (
            <form className="addAcount__form">
              <TextField
                label="Account Number"
                sx={{ m: "0 30px 0 0" }}
                {...register("account_number", { required: true })}
              />
              <TextField
                label="Account status"
                {...register("account_status", { required: true })}
              />
            </form>
          )}
        </div>
        <div className="tabs-buttons">
          {isShow ? (
            <button onClick={handleShow} className="purple-button">
              continue
            </button>
          ) : (
            <div>
              <button onClick={handleShow} className="white-button">
                back
              </button>
              <button className="purple-button">save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddUser;
