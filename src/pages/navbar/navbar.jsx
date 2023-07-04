import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar-container">
        <div onClick={() => navigate("/")}>
          <h3 className="logo-name">CyberChat</h3>
        </div>
        
        <div>
          <i className="fa-solid fa-circle-user fa-xl"></i>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
