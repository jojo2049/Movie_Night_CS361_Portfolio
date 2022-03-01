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
import Results from '../../pages/Results';



export default function RadioButtonsGroup() {
  const [genre, setGenre] = useState('')
  const [disneyChecked, setDisney] = useState(false)
  const [netflixChecked, setNetflix] = useState(false)
  const [huluChecked, setHulu] = useState(false)
  const [amazonChecked, setAmazon] = useState(false)

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
        <FormControlLabel value="action" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Action" />
        <FormControlLabel  value="adventure" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Adventure" />
        <FormControlLabel  value="animation" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Animation" />
        <FormControlLabel  value="comedy" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Comedy" />
        <FormControlLabel  value="crime" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Crime" />
        <FormControlLabel  value="documentary" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Documentary" />
        <FormControlLabel  value="drama" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Drama" />
        <FormControlLabel  value="family" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Family" />
        <FormControlLabel  value="fantasy" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Fantasy" />
        <FormControlLabel  value="history" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="History" />
        <FormControlLabel  value="horror" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Horror" />
        <FormControlLabel  value="music" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Music" />
        <FormControlLabel  value="mystery" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Mystery" />
        <FormControlLabel  value="romance" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Romance" />
        <FormControlLabel  value="science fiction" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Science Fiction" />
        <FormControlLabel  value="thriller"   onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Thriller" />
        <FormControlLabel  value="war" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="War" />
        <FormControlLabel  value="western" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Western" />
      </RadioGroup>

      <FormLabel className="services" id="checkboxes" sx={{fontSize: 'h4.fontSize'}}>Streaming Services</FormLabel>
      <FormGroup row className="services_boxes">
        <FormControlLabel checked={disneyChecked} onChange={(e)=>{setDisney(e.target.checked)}} control={<Checkbox />} value="disney +" label="Disney +" />
        <FormControlLabel checked={netflixChecked} onChange={(e)=>{setNetflix(e.target.checked)}} control={<Checkbox />} value="netflix" label="Netflix" />
        <FormControlLabel checked={huluChecked} onChange={(e)=>{setHulu(e.target.checked)}} control={<Checkbox />} value="hulu" label="Hulu" />
        <FormControlLabel checked={amazonChecked} onChange={(e)=>{setAmazon(e.target.checked)}} control={<Checkbox />} value="amazon prime" label="Amazon Prime" />
      </FormGroup>

      <Link to="/results">
        
        <Button variant="contained" onClick={(genre,setDisney, setAmazon, setNetflix, setHulu) => {
          let services = []
          if (setDisney === 'true') {
            services.append('Disney Plus')
          } 
          if (setAmazon === 'true') {
            services.append('Amazon Prime Video')
          }
          if (setNetflix === 'true') {
            services.append('Netflix')
          }
          if (setHulu === 'true') {
            services.append('Hulu')
          }
          console.log(genre)
          console.log(services)
          return services
        } 
        } >Search by Genre/Service</Button>
      
      </Link>

    </FormControl>
  );
}

