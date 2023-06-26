import React from "react";
import "./postCard.css";
import girl from "../productCard/girl-2.png";
import moment from "moment";

function PostCard({ post }) {
  const { content, createdAt, likes, updatedAt, username, mediaURL } = post;

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
          <i className="far fa-heart fa-lg"></i>
          {/* <i className="fas fa-heart fa-lg"></i> */}
          <i className="far fa-bookmark fa-lg"></i>
          {/* <i className="fas fa-bookmark fa-lg"></i> */}
          <i className="far fa-comment fa-lg"></i>
          <i className="fas fa-share fa-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
