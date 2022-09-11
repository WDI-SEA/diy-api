const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const db = require('./models')
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(methodOverride('_method'))

const PORT = 3000


// HOME 
app.get('/', async (req, res) => {
    try {
   const martialArtists = await db.mixedmartialartist.findAll({})
//    res.render('index', { martialArtists: martialArtists })
    res.json(martialArtists)
    } catch(err) {
        console.warn(err)
    }
})



// CONTROLLER
app.use('/mixedmartialartists', require('./controllers/mixedmartialartists'))



app.listen(PORT, () => {
    console.log(`Tuned into port ${PORT}`)
})