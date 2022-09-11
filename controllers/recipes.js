const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    const allRecipes = await db.recipe.findAll()
    res.render('recipes/show', { showRecipes: allRecipes })
})

router.get('/new', async (req, res) => {
    res.render('recipes/new')
})

router.post('/new', async (req, res) => {
    try {
        await db.recipe.create({
            name: req.body.name,
            brewingdevice: req.body.brewingdevice,
            watertemp: req.body.watertemp,
            grinder: req.body.grinder,
            grindsetting: req.body.grindsetting,
            groundcoffee: req.body.groundcoffee,
            description: req.body.description
        })
        res.redirect('/recipes')
    } catch(err) {
        console.warn(err)
    }
})

router.get('/:id', async (req, res) => {
    try {

    } catch(err) {
        console.warn(err)
    }
})



module.exports = router