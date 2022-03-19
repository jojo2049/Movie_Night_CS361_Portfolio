import React from 'react'
import Genres from './../components/Genres/Genres';
import Services from "./../components/Services/Services";
import Search from "./../components/Search/Search";

function Home() {
  return (
    <>
      <div className='titles'>
        <h1>Search by Genre and Streaming Services</h1>
      </div>
      <Genres />
      <div className="search_section">
        <Search />
      </div>
      <div>
        <p className="instructions">Most Popular: Will provide the current most popular movies.</p>
        <p className="instructions">Search by Genre/Service: Will use your selections for Genres and Streaming services to provide recommendations.</p>
        <p className="instructions">Top Trending: Will provide the current top trending movies.</p>
        <p className="instructions">Go Back: Will return to homepage for genre/service selection.</p>
      </div>

    </>
  )
}

export default Home;
