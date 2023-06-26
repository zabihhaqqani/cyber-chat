import React, { useState } from "react";
import { useDataContext } from "../../context/dataContext";

function RightSideBar() {

  const {sortBy,setSortBy} = useDataContext()

  
  return (
    <div className="item-right">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} name="" id="">
        <option value="Trending">Trending</option>
        <option value="Latest">▲ Latest</option>
        <option value="Oldest">▼ Oldest</option>
      </select>
    </div>
  );
}

export default RightSideBar;
