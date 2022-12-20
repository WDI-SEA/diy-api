// required packages
const express = require('express')

// app setup
const app = express()
const PORT = 8000
// request body parsing
app.use(express.urlencoded({ extended: false }))
// DO NOT NEED method override
// thudner client won't need method override, but if you made 
/// views with ejs/html, you would need method override

// routes and controllers
app.get('/', (req, res) => {
    res.json({
        message: 'welcome to the firmament API 🪐'
    })
})

app.use('/planets', require('./controllers/planets.js'))

// listen on a port
app.listen(PORT, () => {
    console.log(`listening to the sounds of the heavans on PORT ${PORT} 🌎`)
})