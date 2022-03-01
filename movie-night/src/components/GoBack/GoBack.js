import * as React from 'react';
import Button from '@mui/material/Button';
import "./GoBack.css"
import { Link } from 'react-router-dom';


export default function OutlinedButtons() {
  
  return (
    <Link to="/">
      <Button variant="outlined" >Go Back</Button>
    </Link>
  );
}
 