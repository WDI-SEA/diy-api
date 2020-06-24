const express = require('express');
const db = require('./models');
const methodOverride = require('method-override');

const app = express();

const errorHandler = error => {
  console.log(`error detected`);
  console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`);
  console.log(error);
}

//routes
app.get('/', (req, res) => {
  res.send('home, home on the range: where the deer and the antelope play; Where seldom is heard a discouranging word and the skies are not cloudy all day')
});

// /drinks - GET all drinks
app.get('/drinks', (req, res) => {
  console.log('get me all the drinks');
  res.send('get me all the drinks');
});

// /drinks POST - make a drink
app.post('/drinks', (req, res) => {
  console.log(`make me ${JSON.stringify(req.params)}`);
  res.send(`make me ${req.body}`);
});

// /drinks/:index - GET one drink (detail show)
app.get('/drinks/:index', (req, res) => {
  console.log(`show me a drink at ${req.params.index}`);
  res.send(`show me a drink at ${req.params.index}`);
});

// /drinks/:index - PUT one drink
app.put('/drinks/:index', (req, res) => {
  console.log(`update me a drink at ${req.params.index}`);
  res.send(`update me a drink at ${req.params.index}`);
});

// /drinks/:index - DELETE one drink
app.delete('/drinks/:index', (req, res) => {
  console.log(`delete me a drink at ${req.params.index}`);
  res.send(`delete me a drink at ${req.params.index}`);
});




const port = 3000;

app.listen(port, () => console.log(`listening on port: ${port}`))