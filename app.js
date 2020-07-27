const express = require('express');
const db = require('./models');
const app = express();
const bodyParser = require('body-parser')
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

// /chickens — GET indexes all chickens
app.get('/chickens', (req, res) => {
  db.chicken.findAll().then(chickens => {
    res.render('chickens');
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


app.get('/newChicken', (req, res) => {
  res.render('newChicken')
})


// POST	create	
app.post('/chickens', urlencodedParser, (req, res) => {
  db.chicken.findOrCreate({
    where: {
      species: req.body.species
    },
    defaults: {
      origin: req.body.origin,
      purpose: req.body.purpose
    }
  }).then(function([chicken, created]) {
    res.redirect('chickens')
  }).catch("🔥") 
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