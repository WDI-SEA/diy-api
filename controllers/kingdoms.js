const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req,res) => {
    db.kingdom.findAll()
    .then(kingdoms => {
        res.render('./kingdoms/index', { kingdoms: kingdoms})

    })
})

router.get('/:id', (req,res) => {
    res.render('./kingdoms/show', {
        title: req.params.id
    })
})






module.exports = router