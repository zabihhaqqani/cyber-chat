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
  const { dataDispatch, dataState } = useDataContext();
  const {
    content,
    createdAt,
    likes,
    updatedAt,
    username,
    mediaURL,
    _id,
    comments,
  } = post;
  const { authState } = useAuthContext();
  const [ showComments, setShowComments ] = useState(false);
  const likedPosts = () =>
    likes?.likedBy?.filter(({ _id }) => _id === authState?.user?._id)
      ?.length === 0;

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
          <i
            className={`${
              likedPosts() ? "fa-regular" : "fa-solid"
            } fa-heart fa-lg`}
            onClick={() => {
              if (!authState?.token) {
                // toast.error("Please login to proceed!");
              } else {
                likedPosts()
                  ? postLikeHandler(_id, authState?.token, dataDispatch)
                  : postUnlikeHandler(_id, authState?.token, dataDispatch);
              }
            }}
          ></i>

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

          {likes?.likeCount}
          <i
            onClick={() => setShowComments(!showComments)}
            className="far fa-comment fa-lg"
          ></i>
          {comments?.length}
          <i className="fas fa-share fa-lg"></i>
        </div>
        {showComments ? (
          <div className="comments-container">
            {comments?.map((data) => {
              const { _id, username, text } = data;
              return (
                <div key={_id}>
                  <p>{username}</p>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PostCard;
