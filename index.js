const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
const workout = require('./models/workout')

const app = express()
const PORT = 3003

app.set('view enginge', 'ejs')


// GET / list all workouts
app.get('/', (req, res) => {
    res.send(`LEGGGOOOOOOO`)
})

// POST / add new workout
app.post('/', async (req, res) => {
    try {
        const[workout, created] = await db.workout.findOrCreate({
            where: {
                name: req.body.name,
                description: req.description.name,
                rating: req.body.rating
            }
        })
        await res.redirect('/')
    } catch(err) {
        console.log(err)
    }
    
})

// POST /:id add new workout
app.get('/:id', (req, res) => {
    res.send(`GET details LEGGGOOOOOO`)
})

// PUT /:id add new workout
app.put('/:id', (req, res) => {
    res.send(`PUT details LEGGGOOOOOO`)
})

// DELETE /:id add new workout
app.delete('/:id', (req, res) => {
    res.send(`DELETE details LEGGGOOOOOO`)
})

//

app.listen(PORT, function() {
    console.log(`listening on port: ${PORT}`)
})