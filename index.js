// require packages
const express = require('express')
const db = require('./models')
const methodOverride = require('method-override')

// express set up
const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method')) // was probably only necessary for html forms

// controllers
app.use('/games', require('./controllers/games'))
app.use('/platforms', require('./controllers/platforms'))

// routes
app.get('/', (req, res) => {
    res.send('here is the home page')
})

// listen on port
app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})