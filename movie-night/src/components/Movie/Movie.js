import React from 'react';
import "./Movie.css"
import Details from "../Details/Details"

function Movie({key,id,poster,title, vote_average,vote_count,release,overview,poster_large}) {
  const poster_size = "https://image.tmdb.org/t/p/w300"

  return(
    <Details id={id} title={title} overview={overview} release={release} poster_large={poster_large}>
      <img className="poster" src={`${poster_size}/${poster}`} alt={title}/>
      <b className="title">{title}</b>
      <span className="vote">Rating: {vote_average}
      <span className="vote">Votes: {vote_count}</span>
      </span>
    </Details>
  );
}

export default Movie;