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
        <FormControlLabel type={genre} value="Action" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Action" />
        <FormControlLabel type={genre}  value="Adventure" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Adventure" />
        <FormControlLabel type={genre}  value="Animation" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Animation" />
        <FormControlLabel type={genre}  value="Comedy" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Comedy" />
        <FormControlLabel type={genre}  value="Crime" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Crime" />
        <FormControlLabel type={genre}  value="Documentary" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Documentary" />
        <FormControlLabel type={genre}  value="Drama" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Drama" />
        <FormControlLabel type={genre}  value="Family" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Family" />
        <FormControlLabel type={genre}  value="Fantasy" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Fantasy" />
        <FormControlLabel type={genre}  value="History" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="History" />
        <FormControlLabel type={genre}  value="Horror" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Horror" />
        <FormControlLabel type={genre}  value="Music" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Music" />
        <FormControlLabel type={genre}  value="Mystery" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Mystery" />
        <FormControlLabel type={genre}  value="Romance" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Romance" />
        <FormControlLabel type={genre}  value="Science Fiction" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Science Fiction" />
        <FormControlLabel type={genre}  value="Thriller" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Thriller" />
        <FormControlLabel type={genre}  value="War" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="War" />
        <FormControlLabel type={genre}  value="Western" onChange={(e)=>{setGenre(e.target.value)}} control={<Radio sx={{color: 'white'}}/>} label="Western" />
      </RadioGroup>

      <FormLabel className="services" id="checkboxes" sx={{fontSize: 'h4.fontSize'}}>Streaming Services</FormLabel>
      <FormGroup row className="services_boxes">
        <FormControlLabel checked={disneyChecked} onChange={(e)=>{setDisney(e.target.checked)}} control={<Checkbox />} value="disney +" label="Disney +" />
        <FormControlLabel checked={netflixChecked} onChange={(e)=>{setNetflix(e.target.checked)}} control={<Checkbox />} value="netflix" label="Netflix" />
        <FormControlLabel checked={huluChecked} onChange={(e)=>{setHulu(e.target.checked)}} control={<Checkbox />} value="hulu" label="Hulu" />
        <FormControlLabel checked={amazonChecked} onChange={(e)=>{setAmazon(e.target.checked)}} control={<Checkbox />} value="amazon prime" label="Amazon Prime" />
      </FormGroup>

      <Link to="/results" state={[genre, disneyChecked, amazonChecked, netflixChecked, huluChecked]}>
        
        <Button variant="contained" onClick={e => {
            alert(`${genre}, ${disneyChecked}, ${amazonChecked}, ${netflixChecked}, ${huluChecked}`);
            }}
        
        // onClick={(genre, setDisney, setAmazon, setNetflix, setHulu) => {
        //   let services = []
        //   if (setDisney === 'true') {
        //     services.append('Disney Plus')
        //   } 
        //   if (setAmazon === 'true') {
        //     services.append('Amazon Prime Video')
        //   }
        //   if (setNetflix === 'true') {
        //     services.append('Netflix')
        //   }
        //   if (setHulu === 'true') {
        //     services.append('Hulu')
        //   }
        //   let data = [genre,services]
        //   return data
        // } } 
        
        >Search by Genre/Service</Button>
      
      </Link>

    </FormControl>
  );
}

