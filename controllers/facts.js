let express = require('express')
let db = require('../models')
let router = express.Router()

// POST /projects - create a new project
router.post('/', (req, res) => {
  db.world_cups.create({
    fact: db.body.fact,
    country: db.body.country,
    year: db.body.year
  })
}),


module.exports = router