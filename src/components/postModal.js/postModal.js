import React, { useState } from "react";
import girl from "../productCard/girl-2.png";
import { useAuthContext } from "../../context/authContext";
import "./postModal.css";
import { createPostHandler } from "../../utils/createPostHandler";
import { useDataContext } from "../../context/dataContext";

const PostModal = () => {
  const { authState } = useAuthContext();
  const {dataDispatch}  = useDataContext()
  const [postContent,setPostContent] = useState("")
 const imageSelectHandler = () => {
   const input = document.createElement("input");
   input.type = "file";
   input.accept = "image/*";
   input.onchange = (e) => {
     const file = e.target.files[0];
     Math.round(file.size / 1024000) 
      
   };
   input.click();
 };

 const postBtnHandler = async() =>{
    try {
        // const response = await media()
        createPostHandler(authState?.token,dataDispatch,{content:postContent})
    } catch (error) {
        console.error(error)
    }
 } 
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
              placeholder="What is happening?!"
              name=""
              id=""
              cols="40"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="post-container">
          <div>
            <i className="fa-regular fa-image" onClick={imageSelectHandler}></i>
          </div>
          <button onClick={() => postBtnHandler()} className="post-btn">
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
