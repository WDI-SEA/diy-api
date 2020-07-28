const express = require('express')
const router = express.Router()
const db = require('./models')

router.get('/friends', (req, res) => {
    db.Friends.findAll().then(function(friends) {
        res.json(friends)
    })
})

router.post('/friends', (req, res) => {
    db.Friends.findOrCreate({
        where: {
            name: req.body.firstName
        },
        defaults: {
            
        }
    })
})

router.get('/friends/:id', (req, res) => {
    db.Friends.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(friend) {
        res.send(friend.firstName)
    }).catch(err => {
        console.log(err)
    })
})

router.put

router.delete('/friends/:id', (req, res) => {
    db.friend.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(deletedFriend) {
        res.send('deleted')
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router