import React from "react";
import Navbar from "../navbar/navbar";
import SideBar from "../sidebar/sidebar";
import MainPage from "../main/main";
import RightSideBar from "../rightSideBar/rightSideBar";
import "./home.css"

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar  />
        <MainPage  />
        <RightSideBar />
      </div>
    </div>
  );
}

export default HomePage;
