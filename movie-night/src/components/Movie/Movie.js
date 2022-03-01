import React from 'react';

function Movie({ movie }) {
  return(
    <tr>
      <td>{movie.title}</td>
      <td>{movie.vote_average}</td>
      <td>{movie.vote_count}</td>
    </tr>
  );
}

export default Movie;