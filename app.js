const express = require('express');
const db = require('./models')
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

// PUT ROUTE /movies/:id update one movie

// DELETE ROUTE /movies/:id delete one movie

// LISTEN
app.listen(3000, () => console.log("Fightin crimes and spittin out rhymes on port 3000 🤺"))