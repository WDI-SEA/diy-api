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
})

router.post('/new', async (req, res) => {
    try {
        await db.job.create({
            position: req.body.name,
            link: req.body.link,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date
        })
        res.redirect('/jobs')
    } catch(err) {
        console.warn(err)
    }
}) 

//SHOW ONE JOB LISTING -- SOMETHING NOT WORKING HERE
router.get('/:id', async (req, res) => {
    try {
        const oneJob = await db.job.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('jobs/show', {oneJob: oneJob})
    } catch(err) {
        console.warn(err)
    }
})

//EDIT JOB LISTING
router.get


module.exports = router