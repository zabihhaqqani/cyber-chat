import React from "react";
import { useDataContext } from "../../context/dataContext";
import PostCard from "../../components/productCard/postCard";
import { createPostHandler } from "../../utils/createPostHandler";
import { useAuthContext } from "../../context/authContext";
import { sortedPosts } from "../../utils/sortedPosts";
import PostModal from "../../components/postModal.js/postModal";

function MainPage() {
  const { dataState, dataDispatch ,sortBy} = useDataContext();
  const {authState} = useAuthContext()

  const individualUserPosts = dataState?.posts?.filter((post)=>post.username === authState?.user?.username)

  return (
    <div className="item-home">
      <div>
        <PostModal />
        {individualUserPosts?.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default MainPage;
