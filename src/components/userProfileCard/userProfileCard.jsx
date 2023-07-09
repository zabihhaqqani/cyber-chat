import React, { useState } from "react";
import "./userProfileCard.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import userFollowed from "../../utils/userFollowed";
import unFollowUserHandler from "../../utils/unFollowUserHandler";
import followUserHandler from "../../utils/followUserHandler";
import { useDataContext } from "../../context/dataContext";
import EditProfileModal from "./editProfileModal";
import moment from "moment";

const UserProfileCard = ({ userProfile }) => {
  const { dataState, dataDispatch } = useDataContext();
  const { userLogout, authState } = useAuthContext();

  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  // const { _id,firstName, lastName, username, email, bio ,following,followers} = userProfile;
  const userLoggedIn = authState?.user?.username === userProfile?.username;

  const userPosts = dataState?.posts?.filter(
    (post) => post?.username === userProfile?.username
  );

  const onClose = () => setModalState(false);

  return (
    <div className="post-card">
      <div className="bg">
        <img src={userProfile?.backgroundImg} alt="bg" height="200vh" width="100%"  />
      </div>
      <div className="user-profile-header">
        <img src={userProfile?.avatar} alt="avatar" className="user-avatar" />
        {userLoggedIn ? (
          <button onClick={() => setModalState(true)}>Edit Profile</button>
        ) : (
          <button
            onClick={(e) => {
              if (userFollowed(dataState?.users, userProfile?._id)) {
                unFollowUserHandler(
                  userProfile?._id,
                  authState?.token,
                  dataDispatch
                );
              } else {
                followUserHandler(
                  userProfile?._id,
                  authState?.token,
                  dataDispatch
                );
              }
            }}
          >
            {userFollowed(dataState?.users, userProfile?._id)
              ? "UnFollow"
              : "Follow"}
          </button>
        )}
      </div>

      <div className="user-profile-name-container">
        <p><strong>{userProfile?.firstName} {userProfile?.lastName}</strong></p>

        <p>@{userProfile?.username}</p>

        <p>
          <strong>Bio: </strong>
          {userProfile?.bio}
        </p>
        <p>
          <a
            href={userProfile?.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userProfile?.website}
          </a>
        </p>
        <p>Joined {moment(userProfile?.createdAt).format("LL")}</p>
      </div>

      <div className="user-profile-metrics">
        <p>
          <strong>{userPosts?.length} </strong>
          Posts
        </p>
        <p>
        <strong>{userProfile?.following?.length} </strong>
        following
        </p>
        <p>
        <strong>{userProfile?.followers?.length} </strong>
        followers
        </p>
      </div>
      {/* <a href="zabihhaqqani@netlify.app">zabihhaqqani@netlify.app</a> */}
      {modalState ? (
        <EditProfileModal
          data={userProfile}
          dataDispatch={dataDispatch}
          token={authState?.token}
          closeModal={onClose}
          // website={}
        />
      ) : (
        ""
      )}

      {/* {userLoggedIn ? (
        <li
          onClick={() => {
            navigate("/login");
            userLogout();
          }}
        >
          {" "}
          <i className="fas fa-sign-out-alt fa-lg"></i>
          Logout
        </li>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default UserProfileCard;
