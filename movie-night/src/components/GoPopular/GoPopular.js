import * as React from 'react';
import Button from '@mui/material/Button';
import "./GoPopular.css"
import { Link } from 'react-router-dom';

export default function OutlinedButtons() {
  return (
    <Link to="/popular">
      <Button variant="outlined" onClick={e => {
            alert(`Your name is test`);
            }}>Most Popular</Button>
    </Link>
  );
}
 