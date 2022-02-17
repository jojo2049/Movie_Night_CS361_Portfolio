import React from 'react'
import { testTrendingData } from "../trendingdata";
import GoBack from "../components/GoBack/GoBack";
import Stack from '@mui/material/Stack';
import GoPopular from "../components/GoPopular/GoPopular"

function Results() {
  return (
    <>
      <div className="movies">
        {testTrendingData.map((data,key) => {
          return (
            <div key={key} className= "single">
              {data.original_title + " - Vote Average: " + data.vote_average + " , Vote Count: " + data.vote_count}
            </div>
          )
        })}
      </div>
      <Stack direction="row" spacing={2}>
        <GoBack />
        <GoPopular />
      </Stack>
    </>
  )
}

export default Results
