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

  const userLoggedIn = dataState?.users?.find(user=>user.username === authState?.user?.username)

  const followedUserPosts = dataState?.posts?.filter(
    (post) =>
      userLoggedIn?.following?.some(
        (user) => user?.username === post?.username
      ) || authState?.user?.username === post?.username
  );
  console.clear()
  console.log(followedUserPosts);

  const filteredPosts = sortedPosts(followedUserPosts, sortBy);
  // console.log(dataState?.posts);
  return (
    <div className="item-home">
      <div>
        <PostModal/>
        {filteredPosts?.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default MainPage;
