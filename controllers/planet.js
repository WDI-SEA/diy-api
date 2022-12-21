// create a router
const express = require('express')
const db = require('../models')

const router = express.Router()
// mount routes on the router

// GET /planets -- READ all planets
router.get('/', async (req, res) => {
    try {
        // find all planets in the db
        const planets = await db.planet.findAll({
            include: [db.moon]
        })
        res.json({ planets })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error 💀'
        })
    }
})

// POST /planets -- CREATE a planet
router.post('/', async (req, res) => {
    try {
        // assume the req.body, has a name, mass and type
        await db.planet.create(req.body)
        
        // could also redirect to /planet/:newPlanetId
        res.redirect('/planets')
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error 💀'
        })
    }
})

// GET /planets/:id -- READ one planet
router.get('/:id', async (req, res) => {
    try {
        res.json({
            message: 'show planet with id of ' + req.params.id
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error 💀'
        })
    }
})


// PUT /planets/:id -- UPDATE a planet
router.put('/:id', async (req, res) => {
    try {
        res.json({
            message: 'update planet with id of ' + req.params.id
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error 💀'
        })
    }
})

// DELETE /planets/:id -- DESTROY a planet
router.delete('/:id', async (req, res) => {
    try {
        res.json({
            message: 'destroy planet with id of ' + req.params.id
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error 💀'
        })
    }
})

// POST /planets/:id/moons -- CREATE a moon
router.post('/:id/mood', async (req, res) => {
    try {
        res.json({
            message: 'add moon to planet with id of ' + req.params.id
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error 💀'
        })
    }
})

// export the router
module.exports = router