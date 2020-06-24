const express = require('express')
const db = require('./models')
const app = express()

app.get('/', (req, res) =>{
    res.send('IKEA is life')
})

app.get('/room', (req,res) => {
    db.room.findAll().then(room => {
        res.send(JSON.stringify(room))
    }).catch(error => {
        console.log(`🤬🤬`)
        console.log(error)
    })
})

app.get('/room/:id', (req, res) => {
    db.room.findByPk(req.params.id).then(room => {
        res.send(room)
    }).catch(error => {
        console.log(`🤬🤬🤬`)
        console.log(error)
    })
})

app.listen(8000, () => {
    console.log(`🦩 8000 fam`)
})