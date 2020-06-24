const express = require('express');
const db = require('./models');
const app = express();

app.get('/', (req, res) => {
  res.send('home');
})

