import React, { useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { useAuthContext } from "../../context/authContext";
import followUserHandler from "../../utils/followUserHandler";
import userFollowed from "../../utils/userFollowed";
import unFollowUserHandler from "../../utils/unFollowUserHandler";

function RightSideBar() {
  const { sortBy, setSortBy, dataState, dataDispatch } = useDataContext();
  const { authState } = useAuthContext();

  const user = dataState?.users?.find(
    (user) => user?.username === authState?.user?.username
  );

  const suggestedUsers = dataState?.users
    ?.filter((users) => users.username !== user?.username)
    ?.filter((prevUser) =>
      user?.following?.filter((user) => user.username === prevUser.username)
    );

  return (
    <div className="item-right">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        name=""
        id=""
      >
        <option value="Trending">Trending</option>
        <option value="Latest">▲ Latest</option>
        <option value="Oldest">▼ Oldest</option>
      </select>
      <h3>Suggestions for you</h3>
      <div>
        {suggestedUsers?.map((user) => {
          const { _id, username } = user;
          return (
            <div key={_id}>
              <li>{username}</li>
              {userFollowed(dataState?.users, _id) ? (
                <button
                  onClick={() => {
                    unFollowUserHandler(_id, authState?.token, dataDispatch);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    followUserHandler(_id, authState?.token, dataDispatch);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightSideBar;
