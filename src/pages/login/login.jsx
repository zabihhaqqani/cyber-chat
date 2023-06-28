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
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              value={userData.username}
              type="email"
              placeholder="Enter your email"
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
              placeholder="******** "
              onChange={(e) =>
                setUserData((data) => ({ ...data, password: e.target.value }))
              }
              required
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
            <button className="add-to-cart-btn" onClick={loginAsGuest}>
              Login as Guest
            </button>
            <button
              style={{ backgroundColor: "" }}
              className="add-to-cart-btn"
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
