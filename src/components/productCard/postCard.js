import React, { useState } from "react";
import "./postCard.css";
import girl from "../productCard/girl-2.png";
import moment from "moment";
import { postLikeHandler } from "../../utils/postLikeHandler";
import { useAuthContext } from "../../context/authContext";
import { useDataContext } from "../../context/dataContext";
import { postUnlikeHandler } from "../../utils/postUnlikeHandler";
import addBookmarkHandler from "../../utils/addBookmarkHandler";
import removeBookmarkHandler from "../../utils/removeBookmarkHandler";

function PostCard({ post }) {
  const {dataDispatch,dataState} = useDataContext()
  console.log(dataState?.posts?.map(item=>item));
  const { content, createdAt, likes, updatedAt, username, mediaURL, _id } =
    post;
  const {authState} = useAuthContext()
  return (
    <div>
      <div className="post-card">
        <div className="profile-card">
          <img src={girl} alt="Avatar" className="avatar" />{" "}
          <p style={{ textTransform: "capitalize" }}>
            <strong>{username} </strong>
          </p>
          <p>
            <strong>{moment(createdAt).format("LL")}</strong>
          </p>
          <p className="user-name">@{username}</p>
        </div>
        <p className="post-card-content">{content}</p>
        <div className="img-container">
          <img className="media-img" src={mediaURL} alt="" />
        </div>
        <div className="card-icons-container">
          {/* {likedHandler ? (
            <i
              onClick={() => {
                postUnlikeHandler(_id, authState?.token, dataDispatch);
                setLikedHandler(false);
              }}
              className="fas fa-heart fa-lg"
            ></i>
          ) : (
            <i
              onClick={() => {
                postLikeHandler(_id, authState?.token, dataDispatch);
                setLikedHandler(true);
              }}
              className="far fa-heart fa-lg"
            ></i>
          )} */}

          {dataState?.posts?.find((item) => item._id === _id) ? (
            <i
              onClick={() => {
                postUnlikeHandler(_id, authState?.token, dataDispatch);
              }}
              className="fas fa-heart fa-lg"
            ></i>
          ) : (
            <i
              onClick={() => {
                postLikeHandler(_id, authState?.token, dataDispatch);
              }}
              className="far fa-heart fa-lg"
            ></i>
          )}

          {dataState?.bookmarks?.find((item) => item._id === _id) ? (
            <i
              onClick={() => {
                removeBookmarkHandler(_id, authState?.token, dataDispatch);
              }}
              className="fas fa-bookmark fa-lg"
            ></i>
          ) : (
            <i
              onClick={() => {
                addBookmarkHandler(_id, authState?.token, dataDispatch);
              }}
              className="far fa-bookmark fa-lg"
            ></i>
          )}
          {/* {bookmarkHandler ? (
            <i
              onClick={() => {
                removeBookmarkHandler(_id, authState?.token, dataDispatch);
                setBookmarkHandler(false);
              }}
              className="fas fa-bookmark fa-lg"
            ></i>
          ) : (
            <i
              onClick={() => {
                addBookmarkHandler(_id, authState?.token, dataDispatch);
                setBookmarkHandler(true);
              }}
              className="far fa-bookmark fa-lg"
            ></i>
          )} */}

          {likes?.likeCount}
          <i className="far fa-comment fa-lg"></i>
          <i className="fas fa-share fa-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
