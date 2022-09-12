const db = require('../models')
const express = require('express')
const router = express.Router()
//read /cartoons
router.get('/', async (req, res)=>{
    try{
        const cartoons = await db.cartoons.findAll()
        res.render('cartoon/main.ejs', {cartoons: cartoons})
    } catch(err){
        console.warn(err)
    }
})
//read /cartoons/new
router.get('/new', async(req, res)=>{
    try{
        res.render('cartoon/new.ejs')
    } catch(err){
        console.warn(err)
    }
})
//create /cartoons
router.post('/', async(req, res)=>{
    try{
        
        console.log(req.body)
        const newCartoon = await db.cartoons.create({
            title: req.body.title,
            year: req.body.year,
            episodes: req.body.episodes
        })
        res.redirect(`/cartoons/${newCartoon.id}`)
    } catch(err){
        console.warn(err)
    }
})
//read /cartoons/:id
router.get('/:id', async (req, res) => {
    try {
        const cartoons = await db.cartoons.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('cartoon/show.ejs', {cartoons: cartoons})
    } catch(err) {
        console.warn(err)
    }
  })
  //read /cartoons/edit/:id
  router.get('/edit/:id', async (req, res) => {
    try {
      const cartoon = await db.cartoons.findOne({
        where: {
          id: req.params.id
        }
      })
      res.render('cartoon/edit', {cartoon: cartoon})
    } catch(err) {
        console.warn(err)
    }
  })
  //update /cartoons/:id
  router.put('/:id', async (req, res) => {
    try {
      console.log(req.body)
      await db.cartoons.update({
        title: req.body.title,
        year: req.body.year,
        episodes: req.body.episodes,
      },
      {
        where: {
          id: req.params.id
        }
      })
      res.redirect(`/`)
    } catch(err) {
        console.warn(err)
    }
  })
//destroy /cartoons/:id
  router.delete('/:id', async (req, res) => {
    try {
      await db.cartoons.destroy({
        where: {
          id: req.params.id
        }
      })
      res.redirect('/cartoons')
    } catch(err) {
        console.warn(err)
    }
  })



// | Method | Action | URL | Functionality |
// |--------|:------:|:---:|:--------------|
// | GET    | index         | /cartoons      | list all cartoons |
// | POST   | create        | /cartoons      | add a cartoon |
// | GET    | detail/show   | /cartoons/:id  | show one cartoon |
// | PUT    | update        | /cartoons/:id  | update one cartoon |
// | DELETE | delete        | /cartoons/:id  | delete one cartoon |


module.exports = router




