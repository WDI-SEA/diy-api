let express = require('express');
const db = require('./models');

let app = express();

const errorHandler = error => {
  console.log(`YOU FAIL`)
};

// FIND USER INDEX
app.get('/users', (req, res) => {
  db.user.findAll().then(users => {
    res.send(JSON.stringify(users));
  }).catch(errorHandler);
})

//Create New User
app.post('/users', (req, res) => {
  db.user.findOrCreate({
    where: {
      email: 'peanutbuttermiddle@reeses.com'
    }, 
    defaults: {
      name: 'ReesesPieces', 
      age: 44
    }
  }).then(([user, created]) => {
    res.send(`${user.name} was ${created? 'created' : 'found'}!`)
  }).catch(errorHandler);
})

// Show Details about User
app.get('/users/:idx', (req, res) => {
  db.user.findOne({
    where: {
      id: 3
    }
  }).then(foundUser => {
    res.send(foundUser.name + ' is ' + foundUser.age + ' and their email is ' + foundUser.email + '!');
  }).catch(errorHandler);
});

//update user//
app.put('/users/:idx', (req, res) => {
  db.user.update({
    name: 'MandM'
  }, {
    where: {
      id: 3
    }
  }).then(updated  => {
    res.send(updated + ` file was updated successfully.`);
  }).catch(errorHandler);
});

//delete user//
app.delete('/users/:idx', (req, res) => {
  db.user.destroy({
    where: {
      id: 3
    }
  }).then(deleted => {
    console.log(deleted + `file is gone, baby, gone`)
  }).finally(() => {
    res.redirect('/users')
  })
})

app.listen(5000, () => console.log(`You've successfully entered port 5000`));