import React from "react";
import Navbar from "../navbar/navbar";
import SideBar from "../sidebar/sidebar";
import RightSideBar from "../rightSideBar/rightSideBar";
import { useDataContext } from "../../context/dataContext";
import PostCard from "../../components/productCard/postCard";
import { sortedPosts } from "../../utils/sortedPosts";

const Explore = () => {
  const { dataState, sortBy } = useDataContext();

  const filteredPosts = sortedPosts(dataState?.posts, sortBy);
    
  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar />
        <div className="item-home">
          <div>
            {filteredPosts?.map((post) => {
              return <PostCard key={post._id} post={post} />;
            })}
          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default Explore;
