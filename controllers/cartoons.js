const db = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res)=>{
    try{
        const cartoons = await db.cartoon.findAll()
        res.render('cartoon/home.ejs', {cartoons: cartoons})
    } catch(err){
        console.warn(err)
    }
})

router.get('/new', async(req, res)=>{
    try{
        res.render('cartoon/new.ejs')
    } catch(err){
        console.warn(err)
    }
})

router.post('/', async(req, res)=>{
    try{
        console.log(req.body)
        const newCartoon = await db.cartoon.create({
            title: req.body.title,
            year: req.body.year,
            episodes: req.body.episodes
        })
        res.redirect('/')
    } catch(err){
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




