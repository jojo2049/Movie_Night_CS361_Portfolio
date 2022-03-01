import React from 'react'
import { testData } from "../data";
import GoBack from "../components/GoBack/GoBack";
import GoPopular  from "../components/GoPopular/GoPopular";
import GoTrending from "../components/GoTrending/GoTrending";
import Stack from '@mui/material/Stack';

function Results( { genre,services }) {
  return (
    <>
      <div className="movies">
        {testData.map((data,key) => {
          return (
            <div key={key} className= "single">
              {data.original_title + " - Vote Average: " + data.vote_average + " , Vote Count: " + data.vote_count}
            </div>
          )
        })}
      </div>
      <Stack direction="row" spacing={2}>
        <GoPopular/>
        <GoBack />
        <GoTrending />
      </Stack>
    </>
  )
}

export default Results