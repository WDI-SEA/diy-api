//  Import required packages
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const db = require('./models')

// create an instance of an express app
const app = express()
const PORT = 3000

app.set ('view engine', 'ejs')
app.use(expressLayouts)
// app.use()
// define express routes
app.get('/', (req, res) => {
     res.render('views/layout')
})
app.get('/color', (req, res) =>{
    res.send('This is where you will see the different color options')
})
app.get('/pattern', (req, res) => {
    res.send('This is where you will see the different pattern options')
})
app.get('/size', (req, res) => {
    res.send('This is where you will see the different size options')
})
app.get('/coatType', (req, res) => {
    res.send('This is where you will see the different coat type options')
})
// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    console.log(`Welcome to port ${PORT}`)
})