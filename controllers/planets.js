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
        // res.json({ planets: planets })
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
        await db.planet.findOrCreate({
            where: req.body // match entire request body
        })

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
        const planet = await db.planet.findByPk(req.params.id, {
            include: [db.moon]
        }) // second arg on findByPk is the config object
        res.json({ planet })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error 💀'
        })
    }
})

// GET /planets/name/:name -- READ one planet (based on name)
router.get('/name/:planetName', async (req, res) => {
    try {
        const planet = await db.planet.findOne({
            where: {
                name: req.params.planetName
            },
            include: [db.moon]
        })
        res.json({ planet })
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
        // assume that the req.body has name, mass and type
        // update(what to update, { where: { what to search for }})
        await db.planet.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        //redirect to show this specifc planet
        res.redirect(`/planets/${req.params.id}`)
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
        await db.planet.destroy({
            where: {
                id: req.params.id
            }
        })
        console.log('hello')
        res.redirect('/planets')
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server Error 💀'
        })
    }
})

// POST /planets/:id/moons -- CREATE a moon
router.post('/:id/moon', async (req, res) => {
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

