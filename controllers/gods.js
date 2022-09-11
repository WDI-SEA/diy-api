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
    res.render('gods/new')
  })

router.post('/', (req, res) => {
    db.god.create({
        name: req.body.name,
        godOf: req.body.godOf,
        img_url: req.body.img_url
    })
    .then((god) => {
        res.redirect('/')
    })
    .catch((err) => {
        console.warn(err)
    })
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

  router.get('/edit/:id', (req,res) => {
    db.god.findOne({
        where: { id: req.params.id }
    })
    .then((god) => {
        res.render('gods/edit', {
            god: god,
            id: req.params.id
        })
    })
})

router.put('/:id', async (req, res) => {
    try {
        const [god, godCreated] = await db.god.findOrCreate({
        where: { id: req.params.id }
      })
    const updateGod = await scrollBy.god.update({
        name: req.body.name,
        godOf: reqbody.godOf,
        img_url: req.body.img_url
    })
    res.redirect(`/gods/${req.params.id}`)
    } catch (err) {
        console.log(err)
        res.send('server error, the gods are at it again')
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const numRowsDeleted = await db.god.destroy({
            where: {
                id: req.params.id
            }
        })       
        res.redirect("/gods")

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})

module.exports = router;