// NPM Packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const { defaults } = require('pg')
const db = require('./models')
const pokemoncard = require('./models/pokemoncard')
const methodOverride = require('method-override')
const pokemonController = require('./controllers/pokemoncard')
const app = express()
const PORT = process.env.PORT || 3000

// SET views
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"));
app.use('/pokemoncards', pokemonController)

//Get

// HOMEPAGE
app.get('/', (req,res) => {
    res.render('index.ejs')
})

// Listen
app.listen(PORT, function() {
    console.log(`listening to the screams of pokemon on port: ${PORT}`)
})