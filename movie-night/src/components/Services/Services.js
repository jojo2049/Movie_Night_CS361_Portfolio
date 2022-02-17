import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./Services.css"

export default function CheckboxLabels() {
  return (
    <FormControl>
      <FormLabel className="services" id="checkboxes">Streaming Services</FormLabel>
        <FormGroup row className="services_boxes">
          <FormControlLabel control={<Checkbox />} value="disney +" label="Disney +" />
          <FormControlLabel control={<Checkbox />} value="netflix" label="Netflix" />
          <FormControlLabel control={<Checkbox />} value="hulu" label="Hulu" />
          <FormControlLabel control={<Checkbox />} value="amazon prime" label="Amazon Prime" />
        </FormGroup>
    </FormControl>
  );
}