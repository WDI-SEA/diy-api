const express = require('express')
const db = require('./models')
const app = express()



//setting up routes
app.get('/', (req, res) =>{
    res.send('IKEA is life')
})

// GET room list
app.get('/room', (req,res) => {
    db.room.findAll().then(room => {
        res.send(JSON.stringify(room))
    }).catch(error => {
        console.log(`🤬🤬`)
        console.log(error)
    })
})

// GET a room
app.get('/room/:index', (req, res) => {
    db.room.findByPk(req.params.index).then(room => {
      res.send(room)
    })
})

// DELETE a room
app.delete('/room/:index', (req, res) => {
    let index = req.params.index
    db.room.destroy({
      where: {
        id: req.params.index
      }
    }).then(deleted => {
        console.log(deleted)
    })
})

// PUT (updates a room)
app.put('/drinks/:index', (req, res) => {
    let index = req.params.index
    console.log(typeof index)
    let roomData = req.body
    db.room.update({
        name: roomData.name,
        color: roomData.color,
        purpose: roomData.purpose
    }, {
      where: {
        id: index
      }
    }).then(update => {
        res.send(update)
    })
})

app.listen(8000, () => {
    console.log(`🦩 8000 fam`)
})