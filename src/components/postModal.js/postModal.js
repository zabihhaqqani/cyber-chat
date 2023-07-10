import React, { useState } from "react";
import girl from "../productCard/girl-2.png";
import { useAuthContext } from "../../context/authContext";
import "./postModal.css";
import { createPostHandler } from "../../utils/createPostHandler";
import { useDataContext } from "../../context/dataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostModal = () => {
  const { authState } = useAuthContext();
  const { dataDispatch, dataState } = useDataContext();
  const [postContent, setPostContent] = useState("");
  const navigate = useNavigate();

  const postBtnHandler = async () => {
    try {
      // const response = await media()
      setPostContent("");
      createPostHandler(authState?.token, dataDispatch, {
        content: postContent,
      });
      toast.success('New Post added!');
    } catch (error) {
      console.error(error);
    }
  };

  const userData = dataState?.users?.find(
    (user) => user?.username === authState?.user?.username
  );
  return (
    <div>
      {" "}
      <div className="post-card">
        <div className="profile-card">
          <img
            onClick={() => {
              navigate(`/user/${userData?.username}`);
            }}
            src={
              userData?.avatar ??
              "https://fastly.picsum.photos/id/100/150/150.jpg?hmac=uGUauJoHAFEamhXY6HLrXsmhPdapec4KAi8TqFasrQo"
            }
            alt="Avatar"
            className="avatar"
          />{" "}
          <div>
            <textarea
              onChange={(e) => setPostContent(e.target.value)}
              className="text-area"
              placeholder="What is happening?"
              value={postContent}
              name=""
              id=""
              cols="40"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div className="post-container">
          <div>
            {/* <i className="fa-regular fa-image" onClick={imageSelectHandler}></i> */}
          </div>

          <button
            disabled={postContent === "" ? true : false}
            onClick={() => postBtnHandler()}
            className="post-btn"
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
