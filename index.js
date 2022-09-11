// NPM Packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const { defaults } = require('pg')
const db = require('./models')
const pokemoncard = require('./models/pokemoncard')
const methodOverride = require('method-override')

const app = express()
const PORT = process.env.PORT || 3000

// SET views
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"));
//Get

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.get('/pokemoncards', async (req,res) => {
    try {
        const pokemoncards = await db.pokemoncard.findAll()
        // res.send('pokemon pokemon')
        res.render('show.ejs', { pokemoncards })
    }catch(err) {
        console.log(err)
    }
})

app.get('/pokemoncards/new', (req,res) => {
    res.render('new.ejs')
})

app.delete('/pokemoncards/:id', async (req,res) => {
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

app.put('/pokemoncard/:id', async (req,res) => {
    console.log(req.body)
    try {
        const editPokemonCard = await db.pokemoncard.update({
            name: req.body.name,
            img_url: req.body.img_url,
            rarity: req.body.rarity
        }, {
            where: { id: req.params.id }
        })
        res.redirect('/pokemoncards')
    }catch(err) {
        console.log(err)
    }
})

app.get('/pokemoncards/:id', async (req,res) => {
    try {
        const onePokemonCard = await db.pokemoncard.findOne({
            where: { id: req.params.id }
        })
        res.render('edit.ejs', { pokemoncard: onePokemonCard})
    }catch(err) {
        console.log(err)
    }
})

app.post('/pokemoncards', async (req,res) => {
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


// Listen
app.listen(PORT, function() {
    console.log(`listening to the screams of pokemon on port: ${PORT}`)
})