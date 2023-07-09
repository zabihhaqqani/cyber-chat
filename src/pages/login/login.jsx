import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useAuthContext();

    const [userData, setUserData] = useState({
      username: "",
      password: "",
    });

    const guestUserData = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };

    const loginHandler = (e) => {
      e.preventDefault();
      if (!userData.username.trim() || !userData.password.trim()) {
        // toast.warning("Enter valid Credentials!");
      } else {
        // toast.success("Log In Successful!")
        userLogin(userData);
      }
    };

    const loginAsGuest = (e) => {
      e.preventDefault();
      setUserData(guestUserData);
      userLogin(guestUserData);
    //   toast.success("Log In Successful!");
    };
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="login-container">
        <div className="login-left-bar">Left Image</div>
        <div className="login-right-bar">
          <form className="login-form">
            <h3>Log In</h3>
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
              maxLength="10"
            />

            <span
              className="show-hide-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "hide" : "show"}
            </span>
            <button
              style={{ backgroundColor: "blue" }}
              className="add-to-cart-btn"
              onClick={loginHandler}
            >
              Login
            </button>
            <button className="login-btn" onClick={loginAsGuest}>
              Login as Guest
            </button>
            <button
              style={{ backgroundColor: "" }}
              className="login-btn"
              onClick={() => navigate("/signup")}
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
