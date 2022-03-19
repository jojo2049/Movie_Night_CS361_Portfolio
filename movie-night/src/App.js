import './App.css';
import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Results from "./pages/Results"
import Popular from "./pages/Popular";
import Trending from "./pages/Trending";
import { Container } from '@mui/material';


function App() {
  return (
    <>
      <div className='whole_page'>
      <div className="header_section"><Header/></div>
      <div className="main">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/results" element={<Results />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/trending" element={<Trending />} />
          </Routes>
        </Container>
      </div>
      </div>
    </>);
}

export default App;
