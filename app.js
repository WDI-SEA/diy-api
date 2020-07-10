var express = require('express')
const db = require('./models')
const user = require('./models/user')
var app = express()


//routes

app.get('/', (req, res) => {
    res.send('home')
})

// /users - GET all users
app.get('/users', (req, res) => {
    db.user.findAll().then(users => {
        res.send(users)
    }).catch(err => {
        console.log("😀")
        console.log(err)
    })
})

// /users/:id
app.get('/users/:id', (req, res) => {
    db.user.findByPK(req.params.id).then(user => {
        res.send(user)
    }).catch(err => {
        console.log("😀😀")
        console.log(err)
        res.send('error')
    });
})

    app.listen(8000, () => console.log('hey listen 😍😍'))