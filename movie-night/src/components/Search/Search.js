import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Search.css"
import { Link } from 'react-router-dom';

export default function OutlinedButtons() {
  return (
    <Link to="/results">
      <Button variant="outlined" >Get the popcorn ready!</Button>
    </Link>
  );
}
