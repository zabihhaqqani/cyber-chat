import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div>
    <div className="navbar-container">
      <div>
        <h3 className='logo-name'>CyberChat</h3>
      </div>
      <div>
        <input placeholder='Search User' className='search-user' type="text" />
      </div>
      <div>
        <i class="fa-solid fa-circle-user fa-xl"></i>{" "}
      </div>
    </div>
    <hr />
    </div>
  );
}

export default Navbar