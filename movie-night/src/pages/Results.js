import React, { useState, useEffect} from 'react'
// import { testData } from "../data";
import GoBack from "../components/GoBack/GoBack";
import GoPopular  from "../components/GoPopular/GoPopular";
import GoTrending from "../components/GoTrending/GoTrending";
import Stack from '@mui/material/Stack';
import { useLocation } from 'react-router-dom'
import Movie from "../components/Movie/Movie"

function Results() {

  // destructure data and prepare data for REST fetch
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

  //REST fetch for data
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
          return(
          <Movie 
            key={key}
            id={results.id}
            poster={results.poster_path}
            title = {results.title}
            vote_average = {results.vote_average}
            vote_count = {results.vote_count}
            release = {results.release_date}
            overview = {results.overview}
            poster_large = {results.backdrop_path}
           />)
        })}
      </div>
      <Stack direction="row" spacing={2} className="nav">
        <GoPopular/>
        <GoBack />
        <GoTrending />
      </Stack>
    </>
  )
}

export default Results
