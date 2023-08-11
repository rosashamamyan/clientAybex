import React from "react";
import { useState } from "react";
import "./style.css";
import Login from "../../components/Login";
import Register from "../../components/Register";
import AuthLogo from "../../assets/images/AuthLogo";

const Sign = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginPage = (data) => {
    setIsLogin(data);
  };

  return (
    <div className="sign">
      <div className="sign_logo">
        <AuthLogo />
      </div>
      <div className="sign_form">
        {isLogin ? (
          <>
            <Login setIsLogin={toggleLoginPage} />
          </>
        ) : (
          <Register setIsLogin={toggleLoginPage} />
        )}
      </div>
    </div>
  );
};

export default Sign;
