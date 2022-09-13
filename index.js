const express = require('express')
const app = express()
const showsControllers = require('./controllers/shows')

const PORT = 3003

app.get('/', (req, res) => {
    res.send('HOME PAGE')
})

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.use('/shows', showsControllers)

app.listen(PORT, () => {
    console.log(`see what's on port ${PORT}`)
})
