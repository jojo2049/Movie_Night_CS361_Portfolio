import React, { useState, useEffect } from 'react'
import GoBack from "../components/GoBack/GoBack";
import Stack from '@mui/material/Stack';
import GoPopular from "../components/GoPopular/GoPopular"

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
        {data?.map((trending,key) => {
          return (
            <div key={key} className= "single">
              {trending.original_title + " - Vote Average: " + trending.vote_average + " , Vote Count: " + trending.vote_count}
            </div>
          )
        })}
      </div>
      {console.log(data)}
      <Stack direction="row" spacing={2}>
        <GoBack />
        <GoPopular />
      </Stack>
    </>
  )
}

export default Results
