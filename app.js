const express = require('express')
const db = require('./models')

let app = express()


//setting up routes
app.get('/', (req, res) =>{
    res.send('IKEA is life')
})

// GET product list
app.get('/product', (req,res) => {
    db.product.findAll().then(product => {
        res.send(JSON.stringify(product))
    }).catch(error => {
        console.log(`🤬🤬`)
        console.log(error)
    })
})

// GET a product
app.get('/product/:index', (req, res) => {
    db.product.findByPk(req.params.index).then(product => {
      res.send(product)
    })
})

// DELETE a product
app.delete('/product/:index', (req, res) => {
    let index = req.params.index
    db.product.destroy({
      where: {
        id: req.params.index
      }
    }).then(deleted => {
        console.log(deleted)
    })
})

// PUT (updates a product)
app.put('/product/:index', (req, res) => {
    let index = req.params.index
    console.log(typeof index)
    let productData = req.body
    db.product.update({
        name: productData.name,
        color: productData.color,
        purpose: productData.purpose
    }, {
      where: {
        id: index
      }
    }).then(update => {
        res.send(update)
    })
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
app.put('/room/:index', (req, res) => {
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

app.listen(8800, () => {
    console.log(`🦩 8800 fam`)
})