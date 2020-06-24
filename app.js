const express = require('express');
const db = require('./models');
const app = express();
app.use(express.urlencoded({ extended: false }));

// const errorHandler = error => {
//     console.log('🔥🔥🔥🔥🔥🔥')
// //     console.log(error)
// };

app.get('/', (req, res) => {
    res.send("Home");
})

app.get('/games', (req, res) => {
    db.game.findAll().then(games => {
    res.send(games);
    }).catch(err => {
        console.log("hey");
        console.log(err);
    })
})

app.get('/games/:id', (req, res) => {
    db.game.findByPk(req.params.id).then(game => {
      res.send(game);
    }).catch(err => {
      console.log('💩');
      console.log(err);
      res.send('error');
    })
  })

app.post('/games', (req, res) => {
    db.game.findOrCreate({
        where: {
           name: req.body.name
        },
        defaults: {
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity
        }
    }).then(([game, created]) => {
       console.log(`hey ${game.name}`)
    })
})

app.put('/games/:id', (req, res) => {
    db.game.update({ 
        name: req.body.name,
        quantity: req.body.quantity,
        quantity: req.body.quantity

    }, { 
        where: {
            name: req.body.name } 
        }).then(updated => {
            console.log('💩');
            //updated is an array of 1 value ehich is the number of items updated
            console.log(updated);
        })
})

app.delete('/games/:id', (req, res) => {
        db.game.destroy({
        where: {
            name: req.body.name
        }
    }).then(deleted => {
        console.log('👽');
        console.log(deleted);
    })
    .finally(() => {
        console.log('Donkies')
    });
})

app.listen(8000, () => console.log("hey"));