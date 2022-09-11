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
     res.send('Visitors on / route')
})
// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    console.log(`Welcome to port ${PORT}`)
})