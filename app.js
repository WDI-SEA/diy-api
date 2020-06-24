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
      origin: 'France'
    },
    defaults: {
      species: 'Crevecour',
      purpose: 'Meat, eggs',
    }
  }).then(function([chicken, created]) {
    console.log(chicken); // returns info about the chicken
  });
   
})

// PUT	update
app.put('/chickens/:id', (req, res) => {
  db.chicken.update({
    description: 'Very large birb. 10/10'
  }, {
    where: {
      species: 'Jersey Giant'
    }
  }).then(function(user) {
    console.log("👍🏼")
  });
})


// DELETE	delete	
app.delete('/chickens/:id', (req, res) => {
  db.chicken.destroy({
    where: { species: 'Java' }
  }).then(function() {
    console.log("👍🏼")
  });
})



// Hey LISTEN
app.listen(3000, () => console.log("👋🏼 Listening to ✨port 3000 🦋 "));