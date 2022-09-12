const express = require('express')
const router = express.Router()
const db = require('../models')

// SHOWALL CARDS
router.get('/', async (req,res) => {
    try {
        const pokemoncards = await db.pokemoncard.findAll()
        // res.send('pokemon pokemon')
        res.render('show.ejs', { pokemoncards })
    }catch(err) {
        console.log(err)
    }
})

// SHOW FORM TO MAKE NEW CARD
router.get('/new', (req,res) => {
    res.render('new.ejs')
})

// DELETE/DESTROY
router.delete('/:id', async (req,res) => {
    console.log(req.params.id)
    try {
        const Destroy = await db.pokemoncard.destroy({
            where: { id: req.params.id }
        })
        res.redirect('/pokemoncards')
    }catch(err) {
        console.log(err)
    }
})

// PUT/UPDATE
router.put('/:id', async (req,res) => {
    console.log(req.body)
    try {
        const editPokemonCard = await db.pokemoncard.update({
            name: req.body.name,
            img_url: req.body.img_url,
            rarity: req.body.rarity
        }, {
            where: { id: req.params.id }
        })
        res.redirect('/')
    }catch(err) {
        console.log(err)
    }
})

// SHOW SPECIFIC CARD
router.get('/:id', async (req,res) => {
    try {
        const onePokemonCard = await db.pokemoncard.findOne({
            where: { id: req.params.id }
        })
        res.render('edit.ejs', { pokemoncard: onePokemonCard})
    }catch(err) {
        console.log(err)
    }
})

// CREATE A NEW CARD
router.post('/', async (req,res) => {
    console.log(req.body)
    try {
        const pokemoncards = await db.pokemoncard.create({
            name: req.body.name,
            img_url: req.body.img_url,
            rarity: req.body.rarity
        })
        res.redirect('/')
    }catch(err) {
        console.log(err)
    }
})

module.exports = router