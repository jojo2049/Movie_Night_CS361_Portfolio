import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Search.css"
import { Link } from 'react-router-dom';


export default function OutlinedButtons() {
  return (
    <>
      <div>
        <h1>Or:</h1>
      </div>
      <Stack direction="row" spacing={10}>
      <Link to="/popular">
        <Button variant="contained" >Most Popular</Button>
      </Link>
      {/* <Link to="/results">
        <Button variant="contained" >Search by Genre/Service</Button>
      </Link> */}
      <Link to="/trending">
        <Button variant="contained" >Top Trending</Button>
      </Link>
      </Stack>
    </>
  );
}
