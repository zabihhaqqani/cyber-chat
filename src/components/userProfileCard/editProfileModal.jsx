import React, { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { editUserHandler } from "../../utils/editUserHandler";
import girl from "../productCard/girl-2.png";
import "./editProfileModal.css"

const EditProfileModal = ({ data, token, dataDispatch, closeModal, isOpen }) => {

  const [editedProfile, setEditedProfile] = useState({
    bio: data?.bio,
    website: data?.website
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevData) => ({ ...prevData, [name]: value }));
  };



  return (
    <div className={`modal ${closeModal ? "open" : ""}`}>
      <div style={{width:"100%"}} className="modal-content">
        <span onClick={() => closeModal()} className="close">&times;</span>
        <h2>Edit Profile</h2>
        <img
          src={data?.avatar ?? "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png"}
          alt="Avatar"
          className="user-avatar"
        />{" "}
        <div className="edit-details-container">
          <label htmlFor="bio">Bio: </label>
        <input
          required
          onChange={handleInputChange}
          value={editedProfile?.bio}
          name="bio"
            id="bio"
        />
          <label htmlFor="bio">Website: </label>

        <input
          onChange={handleInputChange}
          name="website"
          value={editedProfile?.website}
            type="text"
            id="website"
          />
        </div>
        <button
          onClick={() => {
            editUserHandler(token, dataDispatch, editedProfile)
            closeModal()
          }}
          className="save-button"

        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfileModal;
