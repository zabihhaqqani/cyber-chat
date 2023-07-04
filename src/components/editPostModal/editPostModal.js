import React, { useState } from "react";
import "./editPostModal.css"; // You can create the CSS file to style the modal
import { editPostHandler } from "../../utils/editPostHandler";

const EditPostModal = ({
  isOpen,
  onClose,
  postContent,
  onSave,
  id,
  token,
  dataDispatch,
  content,
}) => {
  const [editedContent, setEditedContent] = useState(postContent);

  const handleInputChange = (event) => {
    setEditedContent(event.target.value);
  };
  const handleSave = () => {
    onSave(editedContent);
    onClose();
  };
  const updateBtnHandler = async () => {
    try {
      editPostHandler(id, token, dataDispatch, {
        content: editedContent,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Post</h2>
        <textarea
          className="post-content"
          value={editedContent}
          onChange={handleInputChange}
          placeholder="Write your post here..."
        />
        <button
          className="save-button"
          onClick={() => {
            updateBtnHandler();
            handleSave();
          }}
        >
          Update Post
        </button>
      </div>
    </div>
  );
};

export default EditPostModal;
