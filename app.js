const express = require('express');
const db = require('./models');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Homepage');
});

app.get('/trainers', (req, res) => {
  db.trainer.findAll().then(trainers => {
    res.send(trainers);
  }).catch(err => {
    console.log(err)
  })
})

app.get('/trainers/:id', (req, res) => {
  db.trainer.findByPk(req.params.id).then(trainer => {
    if (!trainer) {
      res.sendStatus(404)
    }
    res.send(trainer);
  }).catch(err => {
    console.log(err)
  })
})

app.post('/trainers', (req, res) => {
  db.trainer.create({
    name: "Jamo",
    gender: "Male",
    favoritePokemon: 'Mudkip'
  }).then((trainerData) => {
    res.send(trainerData)
  }).catch(err => {
    console.log(err);
  })
})

// Listen
app.listen(8000, () => {
  console.log(`Listening on localhost:8000`)
})