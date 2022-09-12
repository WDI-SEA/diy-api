const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /teams -- index
router.get('/', async (req, res) => {
    try{
        const allTeams = await db.team.findAll()
        res.json(allTeams)
    } catch (error) {
        console.warn(error)
    }
})

// GET /teams/:id -- team details
router.get('/:id', async (req, res) => {
    try {
        const thisTeam = await db.team.findByPk(req.params.id, { include: [db.driver] })
        res.json(thisTeam)
    } catch(error) {
        console.warn(error)
    }
})

// POST /team -- create team
router.post('/', async (req, res) => {
    try {
        const [newTeam] = await db.team.findOrCreate({
            where: { name: req.body.name }
        })
        res.json(newTeam)
    } catch(error) {
        console.warn(error)
    }
})

// PUT /platforms/:id -- update platform
router.put('/:id', async (req, res) => {
    try {
        await db.team.update({
            name: req.body.name
        }, {
            where: { id: req.params.id }
        })
        const updatedTeam = await db.team.findByPk(req.params.id)
        res.json(updatedTeam)
    } catch(error) {
        console.warn(error)
    }
})

// DELETE /team/:id -- delete platform
router.delete('/:id', async (req, res) => {
    try{
        await db.platform.destroy({ where: { id: req.params.id } })
        res.redirect('/teams')
    } catch(error) {
        console.warn(error)
    }
})

module.exports = router