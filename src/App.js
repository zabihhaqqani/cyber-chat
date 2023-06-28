import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/Home";
import Explore from "./pages/explore/explore";
import BookMarks from "./pages/bookmark/bookmark";
import LikedPosts from "./pages/likedPosts/likedPost";
import Login from "./pages/login/login";
import RequiresAuth from "./Auth/requireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <HomePage />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequiresAuth>
              <BookMarks />
            </RequiresAuth>
          }
        />
        <Route
          path="/likedposts"
          element={
            <RequiresAuth>
              <LikedPosts />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
