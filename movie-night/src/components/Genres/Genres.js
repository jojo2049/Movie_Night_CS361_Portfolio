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
      <FormLabel className="genres" id="demo-radio-buttons-group-label" sx={{fontSize: 'h4.fontSize', color: 'white'}}>Genres</FormLabel>
      <RadioGroup
        className="genres_buttons"
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{color: 'white'}}
      >
        <FormControlLabel value="action" control={<Radio sx={{color: 'white'}}/>} label="Action" />
        <FormControlLabel value="adventure" control={<Radio sx={{color: 'white'}}/>} label="Adventure" />
        <FormControlLabel value="animation" control={<Radio sx={{color: 'white'}}/>} label="Animation" />
        <FormControlLabel value="comedy" control={<Radio sx={{color: 'white'}}/>} label="Comedy" />
        <FormControlLabel value="crime" control={<Radio sx={{color: 'white'}}/>} label="Crime" />
        <FormControlLabel value="documentary" control={<Radio sx={{color: 'white'}}/>} label="Documentary" />
        <FormControlLabel value="drama" control={<Radio sx={{color: 'white'}}/>} label="Drama" />
        <FormControlLabel value="family" control={<Radio sx={{color: 'white'}}/>} label="Family" />
        <FormControlLabel value="fantasy" control={<Radio sx={{color: 'white'}}/>} label="Fantasy" />
        <FormControlLabel value="history" control={<Radio sx={{color: 'white'}}/>} label="History" />
        <FormControlLabel value="horror" control={<Radio sx={{color: 'white'}}/>} label="Horror" />
        <FormControlLabel value="music" control={<Radio sx={{color: 'white'}}/>} label="Music" />
        <FormControlLabel value="mystery" control={<Radio sx={{color: 'white'}}/>} label="Mystery" />
        <FormControlLabel value="romance" control={<Radio sx={{color: 'white'}}/>} label="Romance" />
        <FormControlLabel value="science fiction" control={<Radio sx={{color: 'white'}}/>} label="Science Fiction" />
        <FormControlLabel value="thriller" control={<Radio sx={{color: 'white'}}/>} label="Thriller" />
        <FormControlLabel value="war" control={<Radio sx={{color: 'white'}}/>} label="War" />
        <FormControlLabel value="western" control={<Radio sx={{color: 'white'}}/>} label="Western" />
      </RadioGroup>
    </FormControl>
  );
}

