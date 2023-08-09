import React from "react";
import { signUp } from "../../service/Auth";
import { useForm } from "react-hook-form";
import "./style.css";

const Register = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const user = signUp(data);
    console.log("user", user);
  };

  return (
    <div className="register">
      <div className="register-container">
        <h2>register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <div className="register-input">
            <label>Email</label>
            <input type="email" {...register("email", { required: true })} />
          </div>
          <div className="register-input">
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="form-btns">
            <button className="register-btn">register</button>
            <button
              className="register-btn register-btn-pr"
              onClick={() => {
                setIsLogin(true);
              }}
            >
              go to login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
