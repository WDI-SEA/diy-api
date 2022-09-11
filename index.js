//  Import required packages
const { Console } = require('console')
const express = require('express')

// create an instance of an express app
const app = express()
const PORT = 3000

app.set ('view engine', 'ejs')
// app.use()
// define express routes
app.get('/', (req, res) => {
     res.send('<h1>Build a Dachshund!</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>Hello, my name is Hydrangea Benn</h1>')
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
// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    console.log(`Welcome to port ${PORT}`)
})