// requier packages 
const express = require('express')


// app setup
const app = express()
const Port = 8000
// request body parsing 
app.use(express.urlencoded({extended: false}))
// DO NOT NEED METHOD OVERRIDE
// thunder client wont need method override, but if u made views with ejs/html, you would need method override

// routes and controllers
app.get('/', (req, res) => {
    res.json({
        message: 'welcome to the firmament API'
    })
})

app.use('/planets', require('/controllers/planet.js'))

// listen on a port
app.listen(Port, () => {
    console.log(`listening to the port ${Port}`)
})