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
        const thisGame = await db.game.findByPk(req.params.id,
            { include: [db.platform] })
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
            },
            include: [db.platform]
        })
        const [gamePlatform] = await db.platform.findOrCreate({
            where: { name: req.body.platform }
        })
        await newGame.addPlatform(gamePlatform)
        res.json(newGame)
    } catch(error) {
        console.warn(error)
    }
})

// PUT /games/:id -- update game
router.put('/:id', async (req, res) => {
    try {
        await db.game.update({
            title: req.body.title,
            year: req.body.year,
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        })
        const updatedGame = await db.game.findByPk(req.params.id, {include: [db.platform]})
        const [gamePlatform] = await db.platform.findOrCreate({ where: { name: req.body.platform } })
        await updatedGame.addPlatform(gamePlatform)
        res.json(updatedGame)
    } catch(error) {
        console.warn(error)
    }
})

// DELETE /games/:id -- delete game
router.delete('/:id', async (req, res) => {
    try {
        await db.game.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/games')
    } catch(error) {
        console.warn(error)
    }
})

module.exports = router