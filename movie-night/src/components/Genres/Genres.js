import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./Genres.css"

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel className="genres" id="demo-radio-buttons-group-label">Genres</FormLabel>
      <RadioGroup
        className="genres_buttons"
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="action" control={<Radio />} label="Action" />
        <FormControlLabel value="adventure" control={<Radio />} label="Adventure" />
        <FormControlLabel value="animation" control={<Radio />} label="Animation" />
        <FormControlLabel value="comedy" control={<Radio />} label="Comedy" />
        <FormControlLabel value="crime" control={<Radio />} label="Crime" />
        <FormControlLabel value="documentary" control={<Radio />} label="Documentary" />
        <FormControlLabel value="drama" control={<Radio />} label="Drama" />
        <FormControlLabel value="family" control={<Radio />} label="Family" />
        <FormControlLabel value="fantasy" control={<Radio />} label="Fantasy" />
        <FormControlLabel value="history" control={<Radio />} label="History" />
        <FormControlLabel value="horror" control={<Radio />} label="Horror" />
        <FormControlLabel value="music" control={<Radio />} label="Music" />
        <FormControlLabel value="mystery" control={<Radio />} label="Mystery" />
        <FormControlLabel value="romance" control={<Radio />} label="Romance" />
        <FormControlLabel value="science fiction" control={<Radio />} label="Science Fiction" />
        <FormControlLabel value="thriller" control={<Radio />} label="Thriller" />
        <FormControlLabel value="war" control={<Radio />} label="War" />
        <FormControlLabel value="western" control={<Radio />} label="Western" />
      </RadioGroup>
    </FormControl>
  );
}