const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /games -- index of all drivers
router.get('/', async (req, res) => {
    try {
        const allDrivers = await db.driver.findAll()
        res.json(allDrivers)
    } catch(error) {
        console.warn(error)
    }
})

// GET /games/:id -- details on one driver
router.get('/:id', async (req, res) => {
    try {
        const thisDriver = await db.driver.findByPk(req.params.id)
        res.json(thisDriver)
    } catch(error) {
        console.warn(error)
    }
})

// POST /drivers -- create new driver
router.post('/', async (req, res) => {
    try {
        const [newDriver] = await db.driver.findOrCreate({
            where: {
                name: req.body.name,
                team: req.body.team,
                age: req.body.age,
                titles: req.body.titles
            },
            include: [db.teams]
        })
        const [driverTeam] = await db.team.findOrCreate({
            where: { name: req.body.team }
        })
        await newDriver.addTeam(driverTeam)
        res.json(newDriver)
    } catch(error) {
        console.warn(error)
    }
})

// PUT /drivers/:id -- update driver
router.put('/:id', async (req, res) => {
    try {
        await db.driver.update({
            name: req.body.name,
            team: req.body.team,
            age: req.body.age
            titles: req.body.titles
        }, {
            where: {
                id: req.params.id
            }
        })
        const updatedDriver = await db.driver.findByPk(req.params.id, {include: [db.team]})
        const [driverTeam] = await db.team.findOrCreate({ where: { name: req.body.team } })
        await updatedDriver.addTeam(driverTeam)
        res.json(updatedTeam)
    } catch(error) {
        console.warn(error)
    }
})

// DELETE /drivers/:id -- delete driver
router.delete('/:id', async (req, res) => {
    try {
        await db.driver.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/drivers')
    } catch(error) {
        console.warn(error)
    }
})

module.exports = router