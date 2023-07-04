import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

function SideBar() {
  const {userLogout} = useAuthContext()
  const navigate = useNavigate();
  return (
    <div className="sidebar-container item-left">
      <ul className="sidebar-items">
        <li onClick={() => navigate("/")}>
          <i className="fa-solid fa-house fa-lg"></i>Home
        </li>
        <li onClick={() => navigate("/explore")}>
          {" "}
          <i className="fa-solid fa-compass fa-lg"></i>Explore
        </li>
        <li onClick={() => navigate("/bookmarks")}>
          <i className="fa-solid fa-bookmark fa-lg"></i>BookMarks
        </li>
        <li onClick={() => navigate("/likedposts")}>
          {" "}
          <i className="fa-solid fa-heart fa-lg"></i>
          Liked Posts
        </li>
        <li
          onClick={() => {
            navigate("/login");
            userLogout()
          }}
        >
          {" "}
          <i className="fa-solid fa-heart fa-lg"></i>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
