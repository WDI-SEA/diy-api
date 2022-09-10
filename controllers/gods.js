let express = require("express");
let db = require("../models");
let router = express.Router();

router.get('/', (req, res) => {
    db.god.findAll()
    .then((gods) => {
      res.render('main/index', { gods: gods })
    })
    .catch((error) => {
      console.log('Error in GET /', error)
    })
  })

router.get('/new', (req, res) => {
    res.render('projects/new')
  })

  router.get('/:id', (req, res) => {
    db.god.findOne({
      where: { id: req.params.id }
    })
    .then((god) => {
      if (!god) throw Error()
      res.render('gods/show', { god: god })
    })
    .catch((error) => {
      res.status(400).render('main/404')
    })
  })

module.exports = router;