const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    const allJobs = await db.job.findAll()
    res.render('jobs/show', { showJobs: allJobs })
})

//CREATING A NEW JOB LISTING TO TRACK
router.get('/new', async (req, res) => {
    res.render('jobs/new')
    console.log('show new jobs here')
})

module.exports = router