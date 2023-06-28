import React, { useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { useAuthContext } from "../../context/authContext";
import followUserHandler from "../../utils/followUserHandler";

function RightSideBar() {
  const { sortBy, setSortBy, dataState, dataDispatch } = useDataContext();
  const { authState } = useAuthContext();


   const userData = dataState?.users?.find(
     (user) => user.username === authState?.user?.username
   );

  // const suggestedUsers = dataState?.users
  //   ?.filter((user) => user.username !== userData?.username)
  //   ?.filter(
  //     (eachUser) =>
  //       !userData?.following?.find(
  //         (data) => data.username === eachUser.username
  //       )
  //   );
    const suggestedUsers = dataState?.users?.filter((user)=>user.username!== authState?.user?.username)
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
        {suggestedUsers?.map((post) => {
          return (
            <div key={post?._id}>
              <li>{post?.username}</li>
              <button onClick={() => followUserHandler(post?._id,authState?.token,dataDispatch)}>Follow</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightSideBar;
