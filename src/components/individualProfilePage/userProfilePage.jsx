import React from "react";
import Navbar from "../../pages/navbar/navbar";
import SideBar from "../../pages/sidebar/sidebar";
import RightSideBar from "../../pages/rightSideBar/rightSideBar";
import PostCard from "../productCard/postCard";
import { useDataContext } from "../../context/dataContext";
import { useParams } from "react-router-dom";
import UserProfileCard from "../userProfileCard/userProfileCard";

const UserProfilePage = ({ userId }) => {
  const { dataState } = useDataContext();
  let { username } = useParams();
  const user = dataState?.users?.find(( user ) => user?.username=== username);

  const userPosts = dataState?.posts?.filter(
    (user) => user?.username === username
  );

  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar />
        <div className="individual">
          
          <UserProfileCard userProfile={user} />
          {userPosts?.map((post) => {
            return <PostCard key={post?._id} post={post} showComments={false} />;
          })}
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default UserProfilePage;
