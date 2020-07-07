const express = require('express');
const db = require('./models');
const app = express();

const methodOverride = require('method-override');

const errorHandler = error => {
  console.log(error);
}

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('home');
})

// GET route that indexes all cannabis data
app.get('/cannabis', (req, res) => {
  db.cannabis.findAll().then(cannabis => {
    res.send(JSON.stringify(cannabis));
  }).catch(errorHandler)
})

// POST route for creating new data
app.post('/cannabis', (req, res) => {
  db.cannabis.findOrCreate({
    where: {
    strain: req.body.strain
  },
  defaults: {
    type: req.body.type,
    flavors: req.body.flavors
    }
  }).then(([cannabis, created]) => {
    res.send(`You added ${canabis.strain}!!`)
  }).catch(errorHandler);
})

// GET route for selecting data for one cannabis plant
app.get('/cannabis/:id', (req, res) => {
  db.cannabis.findByPK(req.params.id).then(cannabisData => {
    res.send(cannabisData);
  }).catch(errorHandler);
})

// PUT route for updating cannabis data
app.put('/cannabis/:id', (req,res) => {
  db.cannabis.update({
    strain: req.body.title,
    type: req.body.type,
    flavors: req.body.flavors
  }, {
    where: {
      id: req.params.id
    }
  }).then(updated => {
    res.send(updated)
  }).catch(errorHandler)
})

// DELETE route for deleting data
app.delete('/anime/:id', (req, res) => {
  db.cannabis.destroy({
    where: {
      id: req.params.id
    }
  }).then(deleted => {
    res.send("Data has been deleted!!")
  }).catch(errorHandler)
})


app.listen(3000, () => {
  console.log('Your listening to the smooth sounds of port 3000')
});


