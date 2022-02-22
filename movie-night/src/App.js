import './App.css';
import Header from "./components/Header/Header";
import Genres from './components/Genres/Genres';
import Services from "./components/Services/Services";
import Search from "./components/Search/Search";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Results from "./pages/Results"
import Popular from "./pages/Popular";
import Trending from "./pages/Trending"
import background from "./background.jpg"
import { style } from '@mui/system';

function App() {
  return (
    <>
      <div className='whole_page'>
      <Header />
      <div className="header_section"></div>
      <div className="main_section">
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/results" element={<Results />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
      {/* <p className="instructions">Most Popular: Will provide the current most popular movies.</p>
      <p className="instructions">Search by Genre/Service: Will use your selections for Genres and Streaming services to provide recommendations.</p>
      <p className="instructions">Top Trending: Will provide the current top trending movies.</p>
      <p className="instructions">Go Back: Will return to homepage for genre/service selection.</p> */}
      </div>
    </>);
}

export default App;
