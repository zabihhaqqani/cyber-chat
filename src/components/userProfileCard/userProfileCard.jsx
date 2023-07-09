import React, { useState } from "react";
import "./userProfileCard.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import userFollowed from "../../utils/userFollowed";
import unFollowUserHandler from "../../utils/unFollowUserHandler";
import followUserHandler from "../../utils/followUserHandler";
import { useDataContext } from "../../context/dataContext";
import EditProfileModal from "./editProfileModal";

const UserProfileCard = ({ userProfile }) => {
  const { dataState, dataDispatch } = useDataContext();
  const { userLogout, authState } = useAuthContext();

  const [modalState,setModalState] = useState(false)
  const navigate = useNavigate();
  // const { _id,firstName, lastName, username, email, bio ,following,followers} = userProfile;
  const userLoggedIn = authState?.user?.username === userProfile?.username;

  const onClose = () => setModalState(false)
  return (
    <div className="post-card">
      <span>{userProfile?.firstName}</span>
      <span>{userProfile?.lastName}</span>
      <span>@{userProfile?.username}</span>
      <span>
        <strong>Bio: </strong>
        {userProfile?.bio}
      </span>
      <span>
        <a
          href={userProfile?.website}
          target="_blank"
          rel="noopener noreferrer"
        >
         {userProfile?.website}
        </a>

       
      </span>
      <span>
        <strong>{userProfile?.following?.length} </strong>
        following
      </span>
      <span>
        <strong>{userProfile?.followers?.length} </strong>
        followers
      </span>
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

      {userLoggedIn ? (
        <button onClick={() => setModalState(true)}>Edit Profile</button>
      ) : (
        ""
      )}
      {userLoggedIn ? (
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
  );
};

export default UserProfileCard;
