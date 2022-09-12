const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    const allBrewingDevices = await db.brewingdevice.findAll()
    res.render('brewingdevices/show', { showBrewingDevices: allBrewingDevices })
})

// Create
router.get('/new', async (req, res) => {
    res.render('brewingdevices/new')
})

router.post('/new', async (req, res) => {
    try {
        const aRecipe = await db.recipe.findOne({
            where: {
                name: req.body.recipeName
            }
        })
        await aRecipe.createBrewingdevice({
            name: req.body.name,
            material: req.body.material
        })
        res.redirect('/brewingdevices')
    } catch(err) {
        console.warn(err)
    }
})

// Read
router.get('/:id', async (req, res) => {
    try {
        const aBrewingDevice = await db.brewingdevice.findOne({
            where: {
                id: req.params.id
            }   
        })
        res.render('brewingdevices/showOne', {aBrewingDevice: aBrewingDevice})
    } catch(err) {
        console.warn(err)
    }
})

// Update
router.get('/:id/edit', async (req, res) => {
    try {
        const aBrewingDevice = await db.brewingdevice.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('brewingdevices/edit', {aBrewingDevice: aBrewingDevice})
    } catch(err) {
        console.log(err)
        res.render('error')
    }
})

router.put('/:id', async (req, res) => {
    try {
        await db.brewingdevice.update({
            name: req.body.name,
            material: req.body.material
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/brewingdevices')
    } catch(err) {
        console.log(err)
        res.render('error')
    }
})

// Destroy
router.delete('/:id', async (req, res) => {
    try {
        await db.brewingdevice.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/brewingdevices')
    } catch(err) {
        console.warn(err)
    }
})

module.exports = router