// require packages
const express = require('express')
const db = require('./models')
const methodOverride = require('method-override')

// express set up
const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// controllers
app.use('/games', require('./controllers/games'))

// routes
app.get('/', (req, res) => {
    res.send('here is the home page')
})

// listen on port
app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})