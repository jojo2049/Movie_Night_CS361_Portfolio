import * as React from 'react';
import Button from '@mui/material/Button';
import "./GoPopular.css"
import { Link } from 'react-router-dom';

export default function OutlinedButtons() {
  return (
    <Link to="/popular">
      <Button variant="contained">Most Popular</Button>
    </Link>
  );
}
 