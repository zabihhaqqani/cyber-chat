import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useDataContext } from "../../context/dataContext";

function Navbar() {
  const {authState} = useAuthContext()
  const {dataState} = useDataContext()
  const navigate = useNavigate();
  const userData = dataState?.users?.find(
    (user) => user?.username === authState?.user?.username
  );
  return (
    <div>
      <div className="navbar-container">
        <div onClick={() => navigate("/")}>
          <h3 className="logo-name">CyberChat</h3>
        </div>

        <div>
          <img
            onClick={() => {
              navigate(`/user/${userData?.username}`);
            }}
            src={
              userData?.avatar ??
              "https://fastly.picsum.photos/id/100/150/150.jpg?hmac=uGUauJoHAFEamhXY6HLrXsmhPdapec4KAi8TqFasrQo"
            }
            alt="Avatar"
            className="avatar"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
