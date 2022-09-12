const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    const allRecipes = await db.recipe.findAll()
    res.render('recipes/show', { showRecipes: allRecipes })
})

// Create
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

// Read
router.get('/:id', async (req, res) => {
    try {
        const aRecipe = await db.recipe.findOne({
            where: {
                id: req.params.id
            }   
        })
        res.render('recipes/showOne', {aRecipe: aRecipe})
    } catch(err) {
        console.warn(err)
    }
})

// Update
router.get('/:id/edit', async (req, res) => {
    try {
        const aRecipe = await db.recipe.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('recipes/edit', {aRecipe: aRecipe})
    } catch(err) {
        console.log(err)
        res.render('error')
    }
})

router.put('/:id', async (req, res) => {
    try {
        await db.recipe.update({
            name: req.body.name,
            brewingdevice: req.body.brewingdevice,
            watertemp: req.body.watertemp,
            grinder: req.body.grinder,
            grindsetting: req.body.grindsetting,
            groundcoffee: req.body.groundcoffee,
            description: req.body.description
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/recipes')
    } catch(err) {
        console.log(err)
        res.render('error')
    }
})

// Destroy
router.delete('/:id', async (req, res) => {
    try {
        await db.recipe.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/recipes')
    } catch(err) {
        console.warn(err)
    }
})

module.exports = router