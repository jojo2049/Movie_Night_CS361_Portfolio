// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

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


app.get('/', (req,res) => {
  res.send('Pending API call')
})

app.get('/getpopular', (req,res) => {
  let process = spawn('python', ['microservice.py','getpopular']);
  let finalData = '';
  process.stdout.on('data', (data) => {
    finalData += data.toString()
  })
  process.stdout.on('end', () => {
    const results = JSON.parse(finalData);
    res.json(results);
  })
})

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