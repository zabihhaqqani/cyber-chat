import MainPage from "../../pages/main/main";
import Navbar from "../../pages/navbar/navbar";
import RightSideBar from "../../pages/rightSideBar/rightSideBar";
import SideBar from "../../pages/sidebar/sidebar";

export function IndividualPostPage() {
  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar />
        {filteredPosts?.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
        <RightSideBar />
      </div>
    </div>
  );
}
