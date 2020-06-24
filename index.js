const express = require('express');
let app = express();
const db = require('./models');
app.use(express.urlencoded({ extended: false })); 
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
app.post('/movies', (req,res) => {
    db.movie.findOrCreate({
        where: {
            title: req.body.title
        },
        defaults: {
            year: req.body.year,
            rating: req.body.rating
        }
    }).then(([movie, created]) => {
        console.log(`😆${movie.title} was ${created ? 'created' : 'found'} in the database`)
    }).catch(errorHandler)
})

// PUT updates movies
app.put('/movies/:id', (req, res) => {
    db.movie.update({ 
        title: req.body.title,
        year: req.body.year,
        rating: req.body.rating
    }, {
        where: {
            title: req.body.title
        } 
    }).then(updated => {
        console.log('🚀');
        // updated is an array of one value which is the number of items updated
        console.log(updated);
    }).catch(errorHandler);
})

// DESTROY deletes one movie
app.delete('/movies/:id', (req, res) => {
    db.movie.destroy({
        where: {
            title: req.body.title
        }
    }).then(deleted => {
        console.log('🔎');
        console.log(deleted);
    }).catch(errorHandler)
})

// PORT
app.listen(8000, () => console.log('😓server is working!'))