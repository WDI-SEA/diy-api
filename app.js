const express = require('express');
const db = require('./models');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// Routes
app.get('/', (req, res) => {
  res.render('home');
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

app.get('/chickens', (req, res) => {
  res.render('chickens')
})

app.get('/newChicken', (req, res) => {
  res.render('newChicken')
})


// POST	create	
app.post('/chickens', (req, res) => {
  db.chicken.findOrCreate({
    where: {
      origin: req.body.species
    },
    defaults: {
      species: req.body.origin,
      purpose: req.body.purpose.value
    }
  }).then(function([chicken, created]) {
    console.log(`${chicken.species} was ${created ? 'created' : 'found'} in the database`)
    req.redirect('chickens')
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