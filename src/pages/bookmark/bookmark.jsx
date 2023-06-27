import React from "react";
import { useDataContext } from "../../context/dataContext";
import { sortedPosts } from "../../utils/sortedPosts";
import PostCard from "../../components/productCard/postCard";
import Navbar from "../navbar/navbar";
import SideBar from "../sidebar/sidebar";
import RightSideBar from "../rightSideBar/rightSideBar";

const BookMarks = () => {
  const { dataState } = useDataContext();

  const bookmarkedPosts = (id) =>
    dataState?.posts?.filter((post) => post._id === id)[0];

  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar />
        <div className="item-home">
          <div>
            {dataState?.bookmarks?.map((post) => {
              return (
                <PostCard key={post._id} post={bookmarkedPosts(post._id)} />
              );
            })}
          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default BookMarks;
