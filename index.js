// NPM Packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')

const app = express()
const PORT = process.env.PORT || 3000

// SET views
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/public', express.static('public'));
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

// Listen
app.listen(PORT, function() {
    console.log(`listening to the screams of pokemon on port: ${PORT}`)
})