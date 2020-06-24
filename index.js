const express = require('express')
const db = require('./models')
const app = express()

// Routes 
app.get('/', (req, res) => {
    res.send('Dreams')
})

// 
app.get('/artists', (req, res) => {
    db.artist.findAll().then(artists => {
        res.send(JSON.stringify(artists))
    }).catch(err => {
        console.log(`🌻`)
        console.log(err)
    })
})

// 
app.get('/artists/:id', (req, res) => {
    db.user.findByPk(req.params.id).then(artists => {
        res.send(artists)
    })
})

// Server initiation 
app.listen(3000, () => {
    console.log('Go your own way, go 3000')
})