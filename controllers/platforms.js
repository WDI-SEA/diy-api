const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /platforms -- index
router.get('/', async (req, res) => {
    const allPlatforms = await db.platform.findAll()
    res.json(allPlatforms)
})

// GET /platforms/:id -- platform details
router.get('/:id', async (req, res) => {
    const thisPlatform = await db.platform.findByPk(req.params.id, { include: [db.game] })
    res.json(thisPlatform)
})

// POST /platforms -- create platform
router.post('/', async (req, res) => {
    const [newPlatform] = await db.platform.findOrCreate({
        where: { name: req.body.name }
    })
    res.json(newPlatform)
})

// PUT /platforms/:id -- update platform
router.put('/:id', async (req, res) => {
    await db.platform.update({
        name: req.body.name
    }, {
        where: { id: req.params.id }
    })
    const updatedPlatform = await db.platform.findByPk(req.params.id)
    res.json(updatedPlatform)
})

// DELETE /platforms/:id -- delete platform
router.delete('/:id', async (req, res) => {
    await db.platform.destroy({ where: { id: req.params.id } })
    res.redirect('/platforms')
})


module.exports = router