const express = require('express');
let app = express();
const db = require('./models');
const errorHandler = error => {
    console.log('🔥🔥🔥🔥🔥🔥')
    console.log(error);
}

// Routes
app.get('/', (req, res) => {
    res.send('I hope this works!')
});


// GET all movies
app.get('/movies', (req, res) => {
    db.movie.findAll().then(movies => {
        res.send(movies);
    }).catch(errorHandler)
})

// GET shows details of one movie
app.get('/movies/:id', (req, res) => {
    db.movie.findByPk(req.params.id).then(movie => {
        res.send(movie);
    }).catch(err => {
        console.log('💩');
        console.log(err);
        res.send('error')})
})

// POST creates new movies


// PORT
app.listen(8000, () => console.log('😓server is working!'))