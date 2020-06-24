let express = require('express');
const db = require('./models');
let app = express();

app.use(express.urlencoded({extended: false}));


const errorHandler = error => {
  console.log(`YOU FAIL`)
  console.log(error)
};

// FIND USER INDEX
app.get('/users', (req, res) => {
  db.user.findAll().then(users => {
    res.send(JSON.stringify(users));
  }).catch(errorHandler);
})

app.get('/candies', (req, res) => {
  db.candies.findAll().then(candies => {
    res.send(JSON.stringify(candies));
  }).catch(errorHandler);
})

//Create New User OR CANDY RATING
app.post('/users', (req, res) => {
  db.user.create({
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
  }).then(newUser => {
    res.send(`${newUser.name} was created!`)
  }).catch(errorHandler);
})

app.post('/users/:idx', (req, res) => {
  console.log(req.params.idx)
  db.user.findByPk(req.params.idx).then(user => {
    console.log("FOUND THE USER")
    user.createCandy({
      name: req.body.name,
      description: req.body.description, 
      rating: req.body.ratings
    }).then(candy => {
      console.log("YOU WONT SEE ME")
      res.send(`${user.name} gave ${candy.name}, a ${candy.description}, a rating of ${candy.rating}`)
    }).catch(errorHandler);
  }).catch(errorHandler)
})

// Show Details about User
app.get('/users/:idx', (req, res) => {
  db.user.findOne({
    where: {
      id: req.params.idx
    }
  }).then(foundUser => {
    res.send(foundUser.name + ' is ' + foundUser.age + ' and their email is ' + foundUser.email + '!');
  }).catch(errorHandler);
});

//update user//
app.put('/users/:idx', (req, res) => {
  db.user.update({
    name: req.body.name
  }, {
    where: {
      id: req.params.idx
    }
  }).then(updated  => {
    res.send(updated + ` file was updated successfully.`);
  }).catch(errorHandler);
});

//delete user//
app.delete('/users/:idx', (req, res) => {
  db.user.destroy({
    where: {
      id: req.params.idx
    }
  }).then(deleted => {
    console.log(deleted + `file is gone, baby, gone`)
  }).finally(() => {
    res.redirect('/users')
  })
})

app.listen(5000, () => console.log(`You've successfully entered port 5000`));