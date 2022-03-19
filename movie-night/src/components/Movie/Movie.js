import React from 'react';
import "./Movie.css"

function Movie({key,poster,title, vote_average,vote_count,release,overview}) {
  const poster_size = "https://image.tmdb.org/t/p/w300"

  return(
    <div className="box">
      <img className="poster" src={`${poster_size}/${poster}`} alt={title}/>
      <b className="title">{title}</b>
      <span className="vote">Rating: {vote_average}
      <span className="vote">Votes: {vote_count}</span>
      </span>
    </div>
    // <tr>
    //   <td>{movie.title}</td>
    //   <td>{movie.vote_average}</td>
    //   <td>{movie.vote_count}</td>
    // </tr>
  );
}

export default Movie;