const express = require('express');
const db = require('./models');
let bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

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

  db.drink.findAll().then( drinks => {
    res.send(drinks);
    //console.log(`get me all the ${drinks}`);
  }).catch( error => errorHandler(error));

});

// /drinks POST - make a drink
app.post('/drinks', (req, res) => {
  //console.log(req.body);
  //res.send(req.body);
  let newData = req.body;
  db.drink.findOrCreate({
    where: {
      type: newData.type
    }, 
    defaults: {
      description: newData.description,
      servedWarm: newData.servedWarm,
      deliciousScale: newData.deliciousScale
    }  
  }).then( ([drink, created]) => {
    let result = `${drink.type} was was ${created ? 'created' : 'found'}`;
    console.log(result);
    res.send(result);
  }).catch( error => errorHandler(error));
});

// /drinks/:index - GET one drink (detail show)
app.get('/drinks/:index', (req, res) => {
  // console.log(`show me a drink at ${req.params.index}`);
  // res.send(`show me a drink at ${req.params.index}`);
  db.drink.findByPk(req.params.index).then(drink => {
    res.send(drink);
  }).catch( error => errorHandler(error));
});

// /drinks/:index - PUT one drink (modify)
app.put('/drinks/:index', (req, res) => {
  // console.log(`update me a drink at ${req.params.index}`);
  // res.send(`update me a drink at ${req.params.index}`);
  let index = req.params.index;
  console.log(typeof index)
  let newData = req.body;
  db.drink.update({
    type: newData.type,
    description: newData.description,
    servedWarm: newData.servedWarm,
    deliciousScale: newData.deliciousScale
  }, {
    where: {
      id: index
    }
  }).then (updated => {
    console.log(updated);
    res.send(updated)
  }).catch( error => errorHandler(error));
});

// /drinks/:index - DELETE one drink
app.delete('/drinks/:index', (req, res) => {
  // console.log(`delete me a drink at ${req.params.index}`);
  // res.send(`delete me a drink at ${req.params.index}`);
  let index = req.params.index;
  db.drink.destroy({
    where: {
      id: req.params.index
    }
  }).then( del => {
    console.log(del);
    //res.send(del);
  }).catch( error => errorHandler(error));

});

const port = 3000;

app.listen(port, () => console.log(`listening on port: ${port}`))