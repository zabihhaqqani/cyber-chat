import React from "react";
import { useDataContext } from "../../context/dataContext";
import PostCard from "../../components/productCard/postCard";
import Navbar from "../navbar/navbar";
import SideBar from "../sidebar/sidebar";
import RightSideBar from "../rightSideBar/rightSideBar";

const BookMarks = () => {
  const { dataState } = useDataContext();

  const bookmarkedPosts = (id) =>
    dataState?.posts?.filter((post) => post?._id === id)[0];

    
  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar />
        <div className="item-home">
          {dataState?.bookmarks?.length !== 0 ? <div>{dataState?.bookmarks?.map((post) => {
            return (
              <PostCard key={post?._id} post={bookmarkedPosts(post?._id)} />
            );
          })}</div> : <h3>No Bookmarks Yet!</h3>}
         
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default BookMarks;
