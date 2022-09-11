const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /games -- index of all games
router.get('/', async (req, res) => {
    try {
        const allGames = await db.game.findAll()
        res.json(allGames)
    } catch(error) {
        console.warn(error)
    }
})

// GET /games/:id -- details on one game
router.get('/:id', async (req, res) => {
    try {
        const thisGame = await db.game.findByPk(req.params.id)
        res.json(thisGame)
    } catch(error) {
        console.warn(error)
    }
})

// POST /games -- create new game
router.post('/', async (req, res) => {
    try {
        const [newGame] = await db.game.findOrCreate({
            where: {
                title: req.body.title,
                year: req.body.year,
                rating: req.body.rating
            }
        })
        res.json(newGame)
    } catch(error) {
        console.warn(error)
    }
})

// PUT /games/:id -- update game
router.put('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        res.send(req.body)
    } catch(error) {
        console.warn(error)
    }
})

// DELETE /games/:id -- delete game
router.delete('/:id', async (req, res) => {
    try {
        res.send(`delete ${req.params.id}`)
    } catch(error) {
        console.warn(error)
    }
})

module.exports = router