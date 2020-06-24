const express = require('express');
const db = require('./models');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('HOOOOME');
});

// /chickens — GET indexes all chickens
app.get('/chickens', (req, res) => {
  db.chicken.findAll().then(chickens => {
    res.send(chickens);
  }).catch(err => {
    console.log('🔥');
    console.log(err);
  })
})

// /chickens/:id — GET shows details of one chicken
app.get('/chickens/:id', (req, res) => {
  db.chicken.findByPk(req.params.id).then(chicken => {
    res.send(chicken);
  }).catch(err => {
    console.log('💩');
    console.log(err);
    res.send('error');
  })
})


// POST	create	
app.post('/chickens', (req, res) => {
  db.chicken.findOrCreate({
    where: {
      origin: req.body.origin
    },
    defaults: {
      species: req.body.species,
      purpose: req.body.purpose
    }
  }).then(function([chicken, created]) {
    req.send(`${chicken.species} was ${created ? 'created' : 'found'} in the database`)
  }).catch(err) 
})

// PUT	update
app.put('/chickens/:id', (req, res) => {
  db.chicken.update({
    description: req.body.description
  }, {
    where: {
      species: req.body.species
    }
  }).then(function(user) {
    console.log("👍🏼")
  });
})


// DELETE	delete	
app.delete('/chickens/:id', (req, res) => {
  db.chicken.destroy({
    where: { species: req.body.species }
  }).then(function() {
    console.log("👍🏼")
  });
})



// Hey LISTEN
app.listen(3000, () => console.log("👋🏼 Listening to ✨port 3000 🦋 "));