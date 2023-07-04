import React, { useState } from "react";
import girl from "../productCard/girl-2.png";
import { useAuthContext } from "../../context/authContext";
import "./postModal.css";
import { createPostHandler } from "../../utils/createPostHandler";
import { useDataContext } from "../../context/dataContext";

const PostModal = () => {
  const { authState } = useAuthContext();
  const { dataDispatch } = useDataContext();
  const [postContent, setPostContent] = useState("");

  const postBtnHandler = async () => {
    try {
      // const response = await media()
      createPostHandler(authState?.token, dataDispatch, {
        content: postContent,
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      {" "}
      <div className="post-card">
        <div className="profile-card">
          <img src={girl} alt="Avatar" className="avatar" />{" "}
          <div>
            <textarea
              onChange={(e) => setPostContent(e.target.value)}
              className="text-area"
              placeholder="What is happening?"
              name=""
              id=""
              cols="40"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="post-container">
          <div>
            {/* <i className="fa-regular fa-image" onClick={imageSelectHandler}></i> */}
          </div>
          {postContent === "" ? (
            <button style={{padding:"0.5rem"}} disabled>
              POST
            </button>
          ) : (
            <button onClick={() => postBtnHandler()} className="post-btn">
              POST
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostModal;
