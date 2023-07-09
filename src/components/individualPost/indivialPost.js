import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";
import MainPage from "../../pages/main/main";
import Navbar from "../../pages/navbar/navbar";
import RightSideBar from "../../pages/rightSideBar/rightSideBar";
import SideBar from "../../pages/sidebar/sidebar";
import PostCard from "../productCard/postCard";
import Comments from "../comments/comments";

export function IndividualPostPage() {
  const { dataState } = useDataContext();

  let { id } = useParams();
  const filteredPosts = dataState?.posts?.filter((post) => post._id === id);

  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar />
        <div className="individual">
          {filteredPosts?.map((post) => {
            return <PostCard key={post._id} post={post} showComments={true} />;
          })}

          {/* <Comments comments={comments}/> */}
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}
