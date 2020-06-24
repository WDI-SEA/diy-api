const express = require('express');
const db = require('./models');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Homepage');
});

// GET ALL TRAINERS
app.get('/trainers', (req, res) => {
  db.trainer.findAll().then(trainers => {
    res.send(trainers);
  }).catch(err => {
    console.log(err)
  })
})

// GET 1 TRAINER
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

// ADD NEW TRAINER
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

// UPDATE TRAINER BY ID
app.put('/trainers/:id', (req, res) => {
  db.trainer.update({
    id: 4
  },
  {
    where: {
      id: req.params.id,
    },
  }).then((updated) => {
    res.send(updated)
  }).catch(err => {
    console.log(err)
  });
})

// DELETE TRAINER BY ID
app.delete('/trainers/:id', (req, res) => {
  db.trainer.destroy({
    where: {
      id: req.params.id
    }
  }).then((deleted) => {
    res.send("Successfully deleted trainer");
  }).catch(err => {
    console.log(err)
  })
})

// GET POKEMON
app.get('/pokemon', (req, res) => {
  db.pokemon.findAll().then(pokemons => {
    res.send(pokemons)
  }).catch(err => {
    console.log(err)
  })
})

// GET 1 POKEMON
app.get('/pokemon/:id', (req, res) => {
  db.pokemon.findByPk(req.params.id).then(pokemon => {
    if (!pokemon) {
      res.sendStatus(404)
    }
    res.send(pokemon);
  }).catch(err => {
    console.log(err)
  })
})

// ADD A POKEMON
app.post('/trainers/:id', (req, res) => {
  db.trainer.findOne({
      where: {
        id: req.params.id
      }
    }).then((trainer) => {
      trainer.createPokemon({
        name: "Lugia",
        type: "Water, Psychic, Flying",
        weakAgainst: "Nothing",
        trainerId: req.params.id
      }).then((pokemon) => {
          res.send(`🐱🐱 Hello ${pokemon.name}! 🐱🐱`);
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err)
    });
})

// UPDATE POKEMON BY ID
app.put('/pokemon/:id', (req, res) => {
  db.pokemon.update({
    weakAgainst: "Hoho"
  },
  {
    where: {
      id: req.params.id,
    },
  }).then((updated) => {
    res.send(updated)
  }).catch(err => {
    console.log(err)
  });
})

// DELETE POKEMON BY ID
app.delete('/pokemon/:id', (req, res) => {
  db.pokemon.destroy({
    where: {
      id: req.params.id
    }
  }).then((deleted) => {
    res.send("Successfully deleted pokemon");
  }).catch(err => {
    console.log(err)
  })
})

// Listen
app.listen(8000, () => {
  console.log(`Listening on localhost:8000`)
})