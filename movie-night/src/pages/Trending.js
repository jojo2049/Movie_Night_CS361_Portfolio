import React, { useState, useEffect } from 'react'
import GoBack from "../components/GoBack/GoBack";
import Stack from '@mui/material/Stack';
import GoPopular from "../components/GoPopular/GoPopular"
import Movie from "../components/Movie/Movie"

function Results() {

  const [data,setData] = useState([]);

  const loadData = async () => {
    const response = await fetch('/gettrending');
    const movies = await response.json();
    setData(movies.trending_movies);
  }

  useEffect(() => {
    loadData();
    console.log(data)
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
        <GoPopular />
      </Stack>
    </>
  )
}

export default Results
