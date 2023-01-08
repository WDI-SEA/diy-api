const express = require('express')
const app = express()
const db = require('./models')

const PORT = 8000
app.use(express.urlencoded({ extended: false }))

// routes and controllers

// GET /animals
app.get('/animals', async (req, res) => {
    try {
        const animals = await db.animal.findAll()
        res.json({ animals })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

// POST /animals 
app.post('/animals', async (req, res) => {
    try {
        await db.animal.findOrCreate({
            where: req.body 
        })
        res.redirect('/animals')
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

// GET /animals/:id 
app.get('/animals/:id', async (req, res) => {
    try {
        const animal = await db.animal.findByPk(req.params.id)
        res.json({ animal })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

// GET /animals/cat/:breed
app.get('/animals/cat/:breed', async (req, res) => {
    try {
        const animal = await db.animal.findOne({
            where: {
                breed: req.params.breed,
                species: 'Domestic cat'
            }
        })
        res.json({ animal })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

// PUT /animal/:id
app.put('/animals/:id', async (req, res) => {

    try {
        await db.animal.update({breed: req.body.breed, origin: req.body.origin}, {
            where: {
                id: req.params.id
            }
        })
        res.redirect(`/animals/${req.params.id}`)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

// DELETE /animals/:id 
app.delete('/animals/:id', async (req, res) => {
    try {
        await db.animal.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/animals')
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})


// listen on a port
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
