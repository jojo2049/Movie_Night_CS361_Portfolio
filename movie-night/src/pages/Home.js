import React from 'react'
import Genres from './../components/Genres/Genres';
import Services from "./../components/Services/Services";
import Search from "./../components/Search/Search";

function Home() {
  return (
    <>
      
      <Genres />
      <div className="services_section">
      <Services />
      </div>
      <div className="search_section">
      <Search />
      </div>
    </>
  )
}

export default Home;
