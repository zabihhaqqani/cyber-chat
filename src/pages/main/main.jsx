import React from "react";
import { useDataContext } from "../../context/dataContext";
import PostCard from "../../components/productCard/postCard";
import { useAuthContext } from "../../context/authContext";
import { sortedPosts } from "../../utils/sortedPosts";
import PostModal from "../../components/postModal.js/postModal";
import "./main.css"
import { Loader } from "../../utils/loader";

function MainPage() {
  const { dataState, sortBy, setSortBy, showLoader } = useDataContext();
  const {authState} = useAuthContext()

  const userLoggedIn = dataState?.users?.find(user=>user.username === authState?.user?.username)

  const followedUserPosts = dataState?.posts?.filter(
    (post) =>
      userLoggedIn?.following?.some(
        (user) => user?.username === post?.username
      ) || authState?.user?.username === post?.username
  );


  const filteredPosts = sortedPosts(followedUserPosts, sortBy);
  
  return (
    <div className="item-home">
      <div>
        <PostModal />
        {showLoader && <Loader/>}
        <div className="sort-container">
        <h3>{sortBy} Posts</h3>
        <select
          className="sort-selector"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          name=""
          id=""
        >
          <option value="Trending">Trending</option>
          <option value="Latest">▲ Latest</option>
          <option value="Oldest">▼ Oldest</option>
        </select>
        </div>
        {filteredPosts?.map((post) => {
          return <PostCard key={post._id} post={post} showComments={false} />;
        })}
      </div>
    </div>
  );
}

export default MainPage;
