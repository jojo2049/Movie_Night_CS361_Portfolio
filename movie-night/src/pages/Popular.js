import React, { useState,useEffect } from 'react'
import GoBack from "../components/GoBack/GoBack";
import Stack from '@mui/material/Stack';
import GoTrending from "../components/GoTrending/GoTrending"
import { responsiveFontSizes } from '@mui/material';
import Recommendations from "../components/Recommendations/Recommendations"

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
          return (
            <div key={key} className= "single">
              {results.original_title + " - Vote Average: " + results.vote_average + " , Vote Count: " + results.vote_count}
            </div>
          )
        })}
      </div>
      {console.log(data)}
      {/* <h1>Recommendations</h1>
      <Recommendations data={data}></Recommendations> */}
      <Stack direction="row" spacing={2}>
        <GoBack />
        <GoTrending />
      </Stack>
    </>
  )
}

export default Popular
