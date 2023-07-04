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
      user?.following?.filter((user) => user.username !== prevUser.username)
    );

  return (
    <div className="item-right">
      <div>
        <h3>Suggestions for you</h3>

        {suggestedUsers?.map((user) => {
          const { _id, username } = user;
          return (
            <div key={_id}>
              <li>{username}</li>
              {/* {   console.log(userFollowed(dataState?.users, _id))} */}
              <button
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
                {userFollowed(dataState?.users, _id) ? "Following" : "Follow"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightSideBar;
