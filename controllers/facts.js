let express = require('express')
let db = require('../models')
let router = express.Router()

router.post('/', async (req, res) => {
 try{
  await db.world_cups.create({
    fact:  db.body.fact,
    country:  db.body.country,
    year:  db.body.year
  })
  res.redirect('/')
}catch(err){
  console.warn(err)
}
}),

router.get('/new', (req, res) => {
  res.render('main/new')
})
router.get('/:id', async (req, res) => {
  await db.world_cups.findOne({
    where: { id: req.params.id }
  })
  .then((world_cups) => {
    if (!world_cups) throw Error()
    res.render('/show', { world_cups: world_cups })
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
})

module.exports = router