// NPM Packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')

const app = express()
const PORT = process.env.PORT || 3000

// SET views
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//Get

app.get('/', async (req,res) => {
    try {
        res.send('pokemon pokemon')
    }catch(err) {
        console.log(err)
    }
})

// Listen
app.listen(PORT, function() {
    console.log(`listening to the screams of pokemon on port: ${PORT}`)
})