import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./Genres.css"
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function RadioButtonsGroup() {
  const [genre, setGenre] = useState('')
  const [disneyChecked, setDisney] = useState(false)
  const [netflixChecked, setNetflix] = useState(false)
  const [huluChecked, setHulu] = useState(false)
  const [amazonChecked, setAmazon] = useState(false)
  let searchCriteria = {genre, disneyChecked, amazonChecked, netflixChecked, huluChecked}

  return (
    <FormControl>
      <FormLabel className="genres" id="demo-radio-buttons-group-label" sx={{fontSize: 'h4.fontSize', color: '#EEF0EB'}}>Genres</FormLabel>
      <RadioGroup
        className="genres_buttons"
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{color: '#EEF0EB'}}
      >
        <FormControlLabel type={genre} value="Action" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Action" />
        <FormControlLabel type={genre}  value="Adventure" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Adventure" />
        <FormControlLabel type={genre}  value="Animation" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Animation" />
        <FormControlLabel type={genre}  value="Comedy" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Comedy" />
        <FormControlLabel type={genre}  value="Crime" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Crime" />
        <FormControlLabel type={genre}  value="Documentary" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Documentary" />
        <FormControlLabel type={genre}  value="Drama" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Drama" />
        <FormControlLabel type={genre}  value="Family" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Family" />
        <FormControlLabel type={genre}  value="Fantasy" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Fantasy" />
        <FormControlLabel type={genre}  value="History" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="History" />
        <FormControlLabel type={genre}  value="Horror" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Horror" />
        <FormControlLabel type={genre}  value="Music" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Music" />
        <FormControlLabel type={genre}  value="Mystery" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Mystery" />
        <FormControlLabel type={genre}  value="Romance" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Romance" />
        <FormControlLabel type={genre}  value="Science Fiction" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Science Fiction" />
        <FormControlLabel type={genre}  value="Thriller" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Thriller" />
        <FormControlLabel type={genre}  value="War" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="War" />
        <FormControlLabel type={genre}  value="Western" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: '#EEF0EB'}}/>} label="Western" />
      </RadioGroup>

      <FormLabel className="services" id="checkboxes" sx={{fontSize: 'h4.fontSize', color: '#EEF0EB'}}>Streaming Services</FormLabel>
      <FormGroup row className="services_boxes" sx={{color: '#EEF0EB'}}>
        <FormControlLabel checked={disneyChecked}  onChange={(e)=>{setDisney(e.target.checked)}} control={<Checkbox sx={{color: '#EEF0EB'}} />} value="disney +" label="Disney +" />
        <FormControlLabel checked={netflixChecked} onChange={(e)=>{setNetflix(e.target.checked)}} control={<Checkbox sx={{color: '#EEF0EB'}} />} value="netflix" label="Netflix" />
        <FormControlLabel checked={huluChecked} onChange={(e)=>{setHulu(e.target.checked)}} control={<Checkbox sx={{color: '#EEF0EB'}} />} value="hulu" label="Hulu" />
        <FormControlLabel checked={amazonChecked} onChange={(e)=>{setAmazon(e.target.checked)}} control={<Checkbox sx={{color: '#EEF0EB'}} />} value="amazon prime" label="Amazon Prime" />
      </FormGroup>

      <div className="button">
        <Link to="/results" state={searchCriteria}>
          <Button variant="contained">Search by Genre/Service</Button>
        </Link>
      </div>

    </FormControl>
  );
}

