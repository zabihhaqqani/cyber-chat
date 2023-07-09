import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { useAuthContext } from "../../context/authContext";
import followUserHandler from "../../utils/followUserHandler";
import userFollowed from "../../utils/userFollowed";
import unFollowUserHandler from "../../utils/unFollowUserHandler";
import "./rightSideBar.css";
import { useNavigate } from "react-router-dom";

function RightSideBar() {
  const { sortBy, setSortBy, dataState, dataDispatch } = useDataContext();
  const { authState } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");

  const user = dataState?.users?.find(
    (user) => user?.username === authState?.user?.username
  );
    const navigate = useNavigate()
  const suggestedUsers = dataState?.users
    ?.filter((users) => users.username !== user?.username)
    ?.filter((prevUser) =>
      user?.following?.filter((user) => user.username !== prevUser.username)
    );

  const filteredSearch = dataState?.users?.filter(({ username }) =>
    username?.includes(searchTerm?.toLowerCase())
  );
 
  const handleClearClick = () => {
    setSearchTerm('')
  }

  return (
    <div className="item-right">
      <div>
        <div>
          <input
            placeholder="Search User"
            className="search-user"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && <span className="clear-icon" onClick={handleClearClick}>
            &#10006;
          </span>}
         
        </div>
        <div className="results">
          {searchTerm
            ? filteredSearch?.map(({ _id, username,firstName,lastName,avatar }) => (
              <div key={_id} className="individual-user">
                <img onClick={() => navigate(`/user/${username}`)} className="avatar" src={avatar} alt="avatar" />
                <div>
                  <li onClick={() => navigate(`/user/${username}`)}>{firstName ?? "no users found"} {lastName}</li>
                  <li onClick={() => navigate(`/user/${username}`)}>@{username}</li>
                </div>
               </div>
              ))
            : ""}
        </div>
        <ul className="suggested-users">
        <h3>Suggested Users</h3>
        {suggestedUsers?.map((user) => {
          const { _id, username, firstName, lastName, avatar } = user;
          return (
            <div className="individual-user" key={_id}>
              <img onClick={() => navigate(`/user/${username}`)} className="avatar" src={avatar ?? "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png"} alt="avatar" />
              <div>
                <li onClick={() => navigate(`/user/${username}`)}>{firstName} {lastName}</li>
                <li onClick={() => navigate(`/user/${username}`)}>@{username}</li>
              </div>
              <button className="follow-btn"
                onClick={() => {
                  if (authState?.token) {
                    if (userFollowed(dataState?.users, _id)) {
                      unFollowUserHandler(_id, authState?.token, dataDispatch);
                    } else {
                      followUserHandler(_id, authState?.token, dataDispatch);
                    }
                  } else {
                    // toast.error("Please login to follow");
                    // navigate("/login");
                  }
                }
                }
              >
                {userFollowed(dataState?.users, _id) ? "UnFollow" : "Follow"}
              </button>
            </div>
          );
        })}
        </ul>
      </div>
    </div>
  );
}

export default RightSideBar;
