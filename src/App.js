import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/Home";
import Explore from "./pages/explore/explore";
import BookMarks from "./pages/bookmark/bookmark";
import LikedPosts from "./pages/likedPosts/likedPost";
import Login from "./pages/login/login";
import RequiresAuth from "./Auth/requireAuth";
import { SignUp } from "./pages/signup/signup";
import { IndividualPostPage } from "./components/individualPost/indivialPost";

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
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/post/:id"
          element={
            <RequiresAuth>
              <IndividualPostPage />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
