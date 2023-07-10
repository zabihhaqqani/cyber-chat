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
import { toast } from "react-toastify";


function PostCard({ post, showComments }) {
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

  const navigate = useNavigate();

  const likedPosts = () =>
    likes?.likedBy?.filter(({ _id }) => _id === authState?.user?._id)
      ?.length !== 0;

  const delteablePosts = authState?.user?.username === username;
  const bookmarkedPost = dataState?.bookmarks?.find((item) => item._id === _id)

  // const editClickHandler = () => {
  //   setShowOptions(false);
  //   setShowEditModal(true);
  // };

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
          <img
            onClick={() => {
              navigate(`/user/${username}`);
            }}
            src={
              userData?.avatar ??
              "https://fastly.picsum.photos/id/100/150/150.jpg?hmac=uGUauJoHAFEamhXY6HLrXsmhPdapec4KAi8TqFasrQo"
            }
            alt="Avatar"
            className="avatar"
          />{" "}
          <div className="name-container">
            <p
              onClick={() => {
                navigate(`/user/${username}`);
              }}
            >
              <strong>{userData?.firstName}</strong>
              <strong>{userData?.lastName}</strong>
              {/* {dataState?.users?.find(user=>user.username===username)} */}
              {/* <strong>{username} </strong> */}
            </p>
            <p
              onClick={() => {
                navigate(`/user/${username}`);
              }}
              className="user-name"
            >
              @{username}
            </p>
          </div>
          <p className="date">{moment(createdAt).format("LL")}</p>
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
            <div>
              {showOptions && (
                <button
                  className="follow-btn"
                  onClick={(e) => {
                    if (userFollowed(dataState?.users, userData?._id)) {
                      unFollowUserHandler(
                        userData?._id,
                        authState?.token,
                        dataDispatch
                      );
                      toast.success(`Unfollowed ${username}`);
                      setShowOptions(!showOptions);
                    } else {
                      followUserHandler(
                        userData?._id,
                        authState?.token,
                        dataDispatch
                      );
                      toast.success(`following ${username}`);

                      setShowOptions(!showOptions);
                    }
                  }}
                >
                  {userFollowed(dataState?.users, userData?._id)
                    ? "UnFollow"
                    : "Follow"}
                </button>
              )}
            </div>
          )}
          <div className="dot-icon">
            {!showOptions && (
              <i
                className="fa-solid fa-ellipsis"
                onClick={(e) => {
                  setShowOptions(!showOptions);
                }}
              ></i>
            )}
          </div>
        </div>

        <p
          className="post-card-content"
          onClick={() => navigate(`/post/${_id}`)}
        >
          {content}
        </p>
        <div onClick={() => navigate(`/post/${_id}`)} className="img-container">
          {mediaURL ? (
            <img className="media-img" src={mediaURL} alt="img" />
          ) : (
            ""
          )}
        </div>
        <hr />
        <div className="card-icons-container">
          <div>
            <i
              className={`${
                likedPosts() ? "fa-solid" : "fa-regular"
              } fa-heart fa-lg`}
              onClick={() => {
                if (!authState?.token) {
                  // toast.error("Please login to proceed!");
                } else {
                  likedPosts()
                    ? postUnlikeHandler(_id, authState?.token, dataDispatch)
                    : postLikeHandler(_id, authState?.token, dataDispatch);
                }
              }}
            ></i>{" "}
            <span>{likes?.likeCount}</span>
          </div>
          <div>
            <i
              onClick={() => navigate(`/post/${_id}`)}
              className="far fa-comment fa-lg"
            ></i>
            {comments?.length}
          </div>
          {bookmarkedPost ? (
            <i
              onClick={() => {
                removeBookmarkHandler(_id, authState?.token, dataDispatch);
                toast.success("Removed From Bookmark");
              }}
              className="fas fa-bookmark fa-lg"
            ></i>
          ) : (
            <i
              onClick={() => {
                addBookmarkHandler(_id, authState?.token, dataDispatch);
                toast.success("Added To Bookmark");
              }}
              className="far fa-bookmark fa-lg"
            ></i>
          )}

          <i
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast.success("URL copied!");
            }}
            className="fas fa-share fa-lg"
          ></i>
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
      {showComments && <Comments comments={comments} />}
    </div>
  );
}

export default PostCard;
