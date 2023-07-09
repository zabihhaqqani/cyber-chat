import React, { useState } from "react";
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
        </div>
        <div className="results-output">
          {searchTerm
            ? filteredSearch?.map(({ _id, username }) => (
                <p onClick={()=>navigate(`/user/${username}`)} key={_id}>
                  {username} 
                </p>
              ))
            : ""}
        </div>
        <h3>Suggested Users</h3>

        {suggestedUsers?.map((user) => {
          const { _id, username } = user;
          return (
            <div key={_id}>
              <li>{username}</li>
              {/* {   console.log(userFollowed(dataState?.users, _id))} */}
              <button className="btn"
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
                }}
              >
                {userFollowed(dataState?.users, _id) ? "UnFollow" : "Follow"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightSideBar;
