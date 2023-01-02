const express = require('express');

// express router
const router = express.Router();

//require models/database
const db = require('../models')

//GET /artists - lists all artists in database
router.get('/', async (req, res) => {
    const artists = await db.artist.findAll({
        include: [db.painting]
    })
    res.render('artists', {artists: artists})
    // res.render('artists', {artists})
})

//POST /artists - posts new artist to database
router.post('/', async (req, res) => {
    await db.artist.findOrCreate({
        where: req.body
    })
    res.redirect('artists')
    // res.render('artists', {artists})
})

//GET /artists/new - form for new artists
router.get('/new', async (req, res) => {
    res.render('new')
})

//export the modules
module.exports = router;