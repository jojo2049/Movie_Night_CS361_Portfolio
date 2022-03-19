const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const { spawn } = require('child_process');
const Logger = require('nodemon/lib/utils/log');
const { contentType } = require('express/lib/response');
const { response } = require('express');


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//Home page
app.get('/', (req,res) => {
  res.send('Pending API call')
})

//GET request to obtain top popular movies
app.get('/getpopular', (req,res) => {
  //spawn process to call python script and sent parameters
  let process = spawn('python', ['microservice.py','getpopular']);
  let finalData = '';
  process.stdout.on('data', (data) => {
    //convert to string, even with through response is a JSON string. This was causing issues before.
    finalData += data.toString()
  })
  process.stdout.on('end', () => {
    //convert to JSON
    const results = JSON.parse(finalData);
    res.json(results);
  })
})

//GET request to obtain top trending movies
app.get('/gettrending', (req,res) => {
  let process = spawn('python', ['microservice.py','gettrending']);
  let finalData = '';
  process.stdout.on('data', (data) => {
    finalData += data.toString()
  })
  process.stdout.on('end', () => {
    const results = JSON.parse(finalData);
    res.send(results);
  })
})

//GET request to obtain movies based on services and genre
app.get('/genre/:genreName/services/:servicesName', (req,res) => {
  const genre = req.params.genreName
  const services = req.params.servicesName
  let process = spawn('python', ['microservice.py','getgenre', genre, services]);
  let finalData = '';
  process.stdout.on('data', (data) => {
    finalData += data.toString()
  })
  process.stdout.on('end', () => {
    const results = JSON.parse(finalData);
    res.send(results);
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})