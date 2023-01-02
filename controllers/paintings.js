const express = require('express');

// express router
const router = express.Router();

//require models/database
const db = require('../models')

const methodOverride = require('method-override')
//send method override to all downstream express routes
router.use(methodOverride('_method'))

// GET /paintings/new - shows a form for updating data
router.get('/new', (req, res) =>{
    res.render('new-painting')
})

//GET /paintings/:id - shows painting in database
router.get('/:id', async (req, res) => {
    try {
        const painting = await req.params.id
        const findPainting = await db.painting.findOne(
            {where: {id: painting},
        include: [db.artist]}
        )
        res.render('paintings', {painting: findPainting})

    }catch (err) {
        console.log(err)
    }
})
//POST /paintings/:id - makes a new painting for database
router.post('/:id', async (req, res) => {
    //first, find the artist to associate with paintings
    const [artist, created] = await db.artist.findOrCreate({
        where: {name: 'req.body.artist'}
    })
    //now add a painting to that artist by selecting the artist newly created/found, then using createPainting
    const newPainting = await artist.createPainting({
            name: req.body.name,
            style: req.body.style,
            img_url: req.body.img_url
    })
    res.render("new-painting", {painting: newPainting})
})

//GET /paintings/:id/edit - renders the update form
router.get('/:id/edit', async (req, res) =>{
    const painting = await db.painting.findOne({
        where: {id: req.params.id}
    })
    res.render('edit', {paintings: painting})
})

//PUT /paintings/:id - updates a painting

router.put('/:id/edit', async (req, res) => {
    const updatePainting = await db.painting.update(req.body, {
        where: {id: db.painting.id}
    })
    res.redirect(`/paintings/${req.params.id}`)
})

//DELETE /paintings/:id - deletes a painting
router.delete('/:id', async (req, res) => {
    const deletePainting = await db.painting.delete(req.body, {
        where: {id: db.painting.id}
    })
    res.redirect(`/paintings/${req.params.id}`)

})

//export the modules
module.exports = router;