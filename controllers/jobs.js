const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    const allJobs = await db.job.findAll()
    res.render('jobs/show', { showJobs: allJobs })
})

module.exports = router