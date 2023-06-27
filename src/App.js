
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/Home';
import Explore from './pages/explore/explore';
import BookMarks from './pages/bookmark/bookmark';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<BookMarks />} />
      </Routes>
    </div>
  );
}

export default App;
