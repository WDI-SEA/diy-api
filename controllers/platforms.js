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

// PUT /platforms/:id -- update platform

// DELETE /platforms/:id -- delete platform


module.exports = router