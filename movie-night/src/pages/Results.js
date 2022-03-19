import React, { useState, useEffect} from 'react'
// import { testData } from "../data";
import GoBack from "../components/GoBack/GoBack";
import GoPopular  from "../components/GoPopular/GoPopular";
import GoTrending from "../components/GoTrending/GoTrending";
import Stack from '@mui/material/Stack';
import { useLocation } from 'react-router-dom'

function Results() {

  const location = useLocation();
  const {genre, disneyChecked, amazonChecked, netflixChecked, huluChecked} = location.state;
  
  let services = [];

  if (disneyChecked === true){
    services.push("Disney Plus");
  }
  if (amazonChecked === true){
    services.push("Amazon Prime Video");
  }
  if (netflixChecked === true){
    services.push("Netflix");
  }
  if (huluChecked === true){
    services.push("Hulu");
  }


  let servicesParam = services.toString()
  
  const [data,setData] = useState([]);

  const loadData = async () => {
    const response = await fetch(`/genre/${genre}/services/${services}`);
    const movies = await response.json();
    setData(movies.results);
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
      <Stack direction="row" spacing={2}>
        <GoPopular/>
        <GoBack />
        <GoTrending />
      </Stack>
    </>
  )
}

export default Results
