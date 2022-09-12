let express = require('express')
let db = require('../models')
let router = express.Router()

// POST /cars - create a new cars
router.post('/', (req, res) => {
  db.cars.create({
    name: req.body.name,
    color: req.body.color,
    year: req.body.year,
  })
  .then((cars) => {
    res.redirect('/')
}).catch(console.log)
})