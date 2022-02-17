import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Search.css"
import { Link } from 'react-router-dom';

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
    <Link to="/popular">
      <Button variant="outlined" >Most Popular</Button>
    </Link>
    <Link to="/results">
      <Button variant="outlined" >Search by Genre/Service</Button>
    </Link>
    <Link to="/trending">
      <Button variant="outlined" >Top Trending</Button>
    </Link>
    </Stack>
  );
}
