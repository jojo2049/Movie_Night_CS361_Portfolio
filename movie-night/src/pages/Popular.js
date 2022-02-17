import React from 'react'
import { testPopularData } from "./../populardata";
import GoBack from "../components/GoBack/GoBack";
import Stack from '@mui/material/Stack';
import GoTrending from "../components/GoTrending/GoTrending"

function Popular() {
  return (
    <>
      <div className="movies">
        {testPopularData.map((data,key) => {
          return (
            <div key={key} className= "single">
              {data.original_title + " - Vote Average: " + data.vote_average + " , Vote Count: " + data.vote_count}
            </div>
          )
        })}
      </div>
      <Stack direction="row" spacing={2}>
        <GoBack />
        <GoTrending />
      </Stack>
    </>
  )
}

export default Popular
