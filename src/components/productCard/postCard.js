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
import { deletePostHandler } from "../../utils/deletePostHandler";
import PostModal from "../postModal.js/postModal";
import EditPostModal from "../editPostModal/editPostModal";
import userFollowed from "../../utils/userFollowed";
import unFollowUserHandler from "../../utils/unFollowUserHandler";
import followUserHandler from "../../utils/followUserHandler";
import { useNavigate } from "react-router-dom";
import Comments from "../comments/comments";

function PostCard({ post,showComments }) {
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
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate()
  const isliked = () =>
    likes?.likedBy?.filter(({ _id }) => _id === authState?.user?._id)
      ?.length !== 0;
  const delteablePosts = authState?.user?.username === username;

  const editClickHandler = () => {
    setShowOptions(false);
    setShowEditModal(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState(content);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSavePost = (editedContent) => {
    setPostContent(editedContent);
  };
    const userData = dataState?.users?.find(
      (user) => user?.username === username
    );

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
          {delteablePosts ? (
            <h4 onClick={() => setShowOptions(!showOptions)}>
              {showOptions && (
                <div className="options-container">
                  <p onClick={handleOpenModal}>Edit</p>
                  <p
                    onClick={() =>
                      deletePostHandler(_id, authState?.token, dataDispatch)
                    }
                  >
                    Delete
                  </p>
                </div>
              )}
            </h4>
          ) : (
            <button
              onClick={(e) => {
                if (userFollowed(dataState?.users, userData?._id)) {
                  unFollowUserHandler(
                    userData?._id,
                    authState?.token,
                    dataDispatch
                  );
                } else {

                  followUserHandler(
                    userData?._id,
                    authState?.token,
                    dataDispatch
                  );
                }
              }}
            >
              {userFollowed(dataState?.users, userData?._id)
                ? "Following"
                : "UnFollow"}
            </button>
          )}
          {!showOptions && (
            <i
              className="fa-solid fa-ellipsis"
              onClick={(e) => {
                // e.stopPropagation();
                setShowOptions(!showOptions);
              }}
            ></i>
          )}
        </div>
        <p className="post-card-content" onClick={()=>navigate(`/post/${_id}`)}>{content}</p>
        <div className="img-container">
          <img className="media-img" src={mediaURL} alt="img" />
        </div>
        <div className="card-icons-container">
          <div>
            <i
              className={`${isliked() ? "fa-solid" : "fa-regular"} fa-heart`}
              onClick={() => {
                if (!authState?.token) {
                  // toast.error("Please login to proceed!");
                } else {
                  isliked()
                    ? postUnlikeHandler(_id, authState?.token, dataDispatch)
                    : postLikeHandler(_id, authState?.token, dataDispatch);
                }
              }}
            ></i>{" "}
            <span>{likes?.likeCount}</span>
          </div>
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
          <i
            onClick={() => navigate(`/post/${_id}`)}
            className="far fa-comment fa-lg"
          ></i>
          {comments?.length}
          <i className="fas fa-share fa-lg"></i>
        </div>

       
      </div>

      {showEditModal && (
        <PostModal post={post} setShowEditModal={setShowEditModal} />
        )}
      <EditPostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        postContent={postContent}
        onSave={handleSavePost}
        id={_id}
        token={authState?.token}
        dataDispatch={dataDispatch}
        content={content}
        />
        {showComments&&<Comments comments={comments}/>} 
    </div>
  );
}

export default PostCard;
