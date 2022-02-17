import './App.css';
import Header from "./components/Header/Header";
import Genres from './components/Genres/Genres';
import Services from "./components/Services/Services";
import Search from "./components/Search/Search";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Results from "./pages/Results"


function App() {
  return (
    <>
      <Header />
      <div className="header_section"></div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
