const express = require('express');
const db = require('./models');
const movie = require('./models/movie');
const app = express();
app.use(express.urlencoded({ extended: false }));

const errorHandler = err => {
    console.log(`🤬🤬🤬🤬🤬🤬🤬🤬`)
    console.log(err);
}
/* ---------------- LETS SET SOME ROUTES ----------------- */

// Home Route
app.get('/', (req, res) => {
    res.send('HOME, Homie')
});

// GET ROUTE /movies
app.get('/movies', (req, res) => {
    //res.send('test')
    db.movie.findAll().then(movies => {
        res.send(JSON.stringify(movies))
    }).catch(errorHandler);
})

// POST ROUTE /movies add a movie
app.post('/movies', (req, res) => {
    db.movie.create({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    }).then(movieData => {
        console.log(`movie inputted`)
        console.log(movieData);
        res.send(movieData);
    }).catch(errorHandler);
})
  
// GET ROUTE /movies/:id show one movie
app.get('/movies/:id', (req, res) => {
    db.movie.findByPk(req.params.id).then(movie => {
        res.send(movie)
    }).catch(errorHandler);
})

// PUT ROUTE /movies/:id update one movie
app.put('/movies/:id', (req, res) => {
    db.movie.update({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
        }, {
        where: {
        id: req.params.id
        }
    }).then(updated => {
        console.log(`🎆`)
        console.log(updated)
        //res.send(movie);
    }).catch(errorHandler);
})

// DELETE ROUTE /movies/:id delete one movie
app.delete('/movies/:id', (req, res) => {
db.movie.destroy({
    where: {
        id: req.params.id
    }
    }).then(deleted => {
        console.log(`💀`)
        console.log(deleted)
        res.send(deleted)
    
    }).catch(errorHandler)
})
// LISTEN
app.listen(3000, () => console.log("Fightin crimes and spittin out rhymes on port 3000 🤺"))