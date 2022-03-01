import React from 'react';
import Movie from '../Movie/Movie'

function Recommendations({ data }) {
  return (
    <table id="Movies">
      <thead>
        <th>Title</th>
        <th>Vote Average</th>
        <th>Vote Count</th>
      </thead>
      <tbody>
        {data?.map((movie, i) => <Movie movie={movie} key={i} />)}
      </tbody>
    </table>
  );
}

export default Recommendations;