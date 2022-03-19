import React, { useState,useEffect } from 'react'
import GoBack from "../components/GoBack/GoBack";
import Stack from '@mui/material/Stack';
import GoTrending from "../components/GoTrending/GoTrending"
import { responsiveFontSizes } from '@mui/material';
import Recommendations from "../components/Recommendations/Recommendations"
import Movie from "../components/Movie/Movie"

function Popular() {

  const [data,setData] = useState([]);

  const loadData = async () => {
    const response = await fetch('/getpopular');
    const movies = await response.json();
    setData(movies.popular_movies);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="movies">
        {data?.map((results,key) => {
          return(
          <Movie 
            key={key}
            poster={results.poster_path}
            title = {results.title}
            vote_average = {results.vote_average}
            vote_count = {results.vote_count}
            release = {results.release_date}
            overview = {results.overview}
           />)
        })}
      </div>
      {console.log(data)}
      <Stack direction="row" spacing={2} className="nav">
        <GoBack />
        <GoTrending />
      </Stack>
    </>
  )
}

export default Popular
