import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import bgImg from "./loginBg.svg"
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useAuthContext();

    const [userData, setUserData] = useState({
      username: "",
      password: "",
    });

    const guestUserData = {
      username: "guestUser",
      password: "adarshBalika",
    };

    const loginHandler = (e) => {
      e.preventDefault();
      if (!userData.username.trim() || !userData.password.trim()) {
        toast.warning("Enter valid Credentials!");
      } else {
        userLogin(userData);
      }
    };

    const loginAsGuest = (e) => {
      e.preventDefault();
      setUserData(guestUserData);
      userLogin(guestUserData);
   
    };
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-left-bar">
          <h1 className="logo-login">Cyber <span style={{color:"black"}}>Chat</span></h1>
          <img className="background-login-img" src={bgImg} alt="bg" />
        </div>
        <div className="login-right-bar">
          <form className="login-form-main">
            <div className="inner-form">
            <h3 style={{textAlign:"center"}}>Login</h3>
            <label htmlFor="email">User name: </label>
            <input
              id="username"
              value={userData.username}
              type="text"
              placeholder="Enter your username"
              onChange={(e) =>
                setUserData((data) => ({ ...data, username: e.target.value }))
              }
              required
            />


            <label htmlFor="password">Password: </label>
              <div className="password-container">
            <input
              id="password"
              value={userData.password}
              type={showPassword ? "text" : "password"}
              placeholder="********"
              onChange={(e) =>
                setUserData((data) => ({ ...data, password: e.target.value }))
              }
              required
              minLength="8"
              maxLength="16"
            />
              <span
                onClick={() =>
                  setShowPassword((showPassword) => !showPassword)
                }
              >
                {!showPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                ) : (
                      <i className="fa-regular fa-eye"></i>
                )}
              </span>
              </div>
           
            <button
             style={{backgroundColor:"black"}}
              className="login-btn"
              onClick={loginHandler}
            >
              Login
            </button>
            <button className="login-btn" onClick={loginAsGuest}>
              Login as Guest
            </button>
            <button
              className="new-account"
              onClick={() => navigate("/signup")}
            >
              Create New Account  ▶
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
