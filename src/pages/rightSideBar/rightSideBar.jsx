import React, { useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { useAuthContext } from "../../context/authContext";

function RightSideBar() {
  const { sortBy, setSortBy, dataState } = useDataContext();
  const { authState } = useAuthContext();

  const suggestedUsers = dataState?.posts?.filter(
    (post) => post.username !== authState?.user?.username
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
        {suggestedUsers?.map((post) => {
          return (
            <div key={post?._id}>
              <li>{post?.username}</li>
              <button>Follow</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightSideBar;
