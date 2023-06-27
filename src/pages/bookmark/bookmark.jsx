import React from 'react'
import { useDataContext } from '../../context/dataContext'
import { sortedPosts } from '../../utils/sortedPosts';
import PostCard from '../../components/productCard/postCard';
import Navbar from '../navbar/navbar';
import SideBar from '../sidebar/sidebar';
import RightSideBar from '../rightSideBar/rightSideBar';

const BookMarks = () => {
    const {dataState,sortBy} = useDataContext()
     const filteredPosts = sortedPosts(dataState?.bookmarks,sortBy);
  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <SideBar />
        <div className="item-home">
          <div>
            {filteredPosts?.map((post) => {
              return <PostCard key={post._id} post={post} />;
            })}
          </div>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default BookMarks
