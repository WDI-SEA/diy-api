const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /platforms -- index
router.get('/', async (req, res) => {
    try{
        const allPlatforms = await db.platform.findAll()
        res.json(allPlatforms)
    } catch (error) {
        console.warn(error)
    }
})

// GET /platforms/:id -- platform details
router.get('/:id', async (req, res) => {
    try {
        const thisPlatform = await db.platform.findByPk(req.params.id, { include: [db.game] })
        res.json(thisPlatform)
    } catch(error) {
        console.warn(error)
    }
})

// POST /platforms -- create platform
router.post('/', async (req, res) => {
    try {
        const [newPlatform] = await db.platform.findOrCreate({
            where: { name: req.body.name }
        })
        res.json(newPlatform)
    } catch(error) {
        console.warn(error)
    }
})

// PUT /platforms/:id -- update platform
router.put('/:id', async (req, res) => {
    try {
        await db.platform.update({
            name: req.body.name
        }, {
            where: { id: req.params.id }
        })
        const updatedPlatform = await db.platform.findByPk(req.params.id)
        res.json(updatedPlatform)
    } catch(error) {
        console.warn(error)
    }
})

// DELETE /platforms/:id -- delete platform
router.delete('/:id', async (req, res) => {
    try{
        await db.platform.destroy({ where: { id: req.params.id } })
        res.redirect('/platforms')
    } catch(error) {
        console.warn(error)
    }
})

module.exports = router