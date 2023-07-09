import React, { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { editUserHandler } from "../../utils/editUserHandler";
import girl from "../productCard/girl-2.png";

const EditProfileModal = ({ data, token, dataDispatch, closeModal }) => {
  const [editedProfile, setEditedProfile] = useState({
    bio: data?.bio,
    website: data?.website
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <div className="modal-content">
        <span onClick={()=>closeModal} className="close">&times;</span>
        <h2>Edit Profile</h2>
        <img
          src={data?.avatar}
          alt="Avatar"
          className="avatar"
        />{" "}
        
        <input
          required
          onChange={handleInputChange}
          value={editedProfile?.bio}
          name="bio"
        />
        <input
          onChange={handleInputChange}
          name="website"
          value={editedProfile?.website}
          type="text" />
        <button
          onClick={() => editUserHandler(token, dataDispatch, editedProfile)}
          className="save-button"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfileModal;
