import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { sortedPosts } from "../../utils/sortedPosts";
import PostCard from "../../components/productCard/postCard";
import Navbar from "../navbar/navbar";
import SideBar from "../sidebar/sidebar";
import RightSideBar from "../rightSideBar/rightSideBar";
import { useAuthContext } from "../../context/authContext";

const LikedPosts = () => {
  const { dataState } = useDataContext();
  const { authState } = useAuthContext()

  const [postsLikedByUser, setPostsLikedByUser] = useState([]);

  useEffect(() => {
    setPostsLikedByUser(
      dataState?.posts?.filter((post) =>
        post.likes.likedBy.find(
          (currUser) => currUser.username === authState?.user?.username
        )
      )
    );
  }, [dataState?.posts]);

  console.log(postsLikedByUser?.length);
  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar />
        <div className="item-home">
          <div>
            {postsLikedByUser?.length > 0 ? <div>{postsLikedByUser?.map((post) => {
              return <PostCard key={post._id} post={post} />;
            })}</div> : <h3>No Posts Liked Yet!</h3>}

          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default LikedPosts;
