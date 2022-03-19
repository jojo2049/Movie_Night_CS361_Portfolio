import * as React from 'react';
import Button from '@mui/material/Button';
import "./GoTrending.css"
import { Link } from 'react-router-dom';

export default function OutlinedButtons() {
  return (
    <Link to="/trending">
      <Button variant="contained" >Top Trending</Button>
    </Link>
  );
}
 