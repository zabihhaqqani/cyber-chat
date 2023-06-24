import React from 'react'
import "./sidebar.css"

function SideBar() {
  return (
    <div className="sidebar-container item-left">
      <ul className="sidebar-items">
        <li>
          <i className="fa-solid fa-house fa-lg"></i>Home
        </li>
        <li>
          {" "}
          <i className="fa-solid fa-compass fa-lg"></i>Explore
        </li>
        <li>
          <i className="fa-solid fa-bookmark fa-lg"></i>BookMarks
        </li>
        <li>
          {" "}
          <i className="fa-solid fa-heart fa-lg"></i>Liked Posts
        </li>
        <div className="vl"></div>
      </ul>
    </div>
  );
}

export default SideBar