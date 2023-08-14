import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import { create } from "../../../service/User";
import './style.css'

const AddUser = ({toggleForm}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await create(data)
    reset()
    setTimeout(() => {
      toggleForm()
    }, 500)
  };
  return (
    <div className="addUser">
      <div className="addUser-container">
        <div className="cancel-icon">
          <ClearIcon onClick={toggleForm}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="addUser-form">
          <TextField
            label="firstName"
            {...register("firstName", { required: true })}
          />
          <TextField
            label="lastName"
            {...register("lastName", { required: true })}
          />
          <TextField label="email" {...register("email", { required: true })} />
          <TextField
            label="password"
            {...register("password", { required: true })}
          />
          <TextField label="phone" {...register("phone", { required: true })} />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
