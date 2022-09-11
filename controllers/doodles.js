const express= require("express")
const router =express.Router()
const fs = require('fs')
let db =require('../models')



// GET index /doodles - show all doodles   ***** GTG ************
router.get ("/", (req, res)=>{
    // const doodleData = readDoodleFile()
    // console.log(doodleData +"testing")
    // res.render('index.ejs',{
    //     doodles:doodleData,
    })
// })


// POST create - adds a new doodle
router.post ("/new", (req, res)=>{
   db.doodles.create({
    breed: req.body.breed,
    content: req.body.content,
    image: req.body.image
   })
   .then((post)=>{
    res.redirect('/')
   })
   .catch ((error) => {
    res.send("server error")
   })
})
// POST /doodles/new - display form to add doodle
router.get('/new', (req, res) => {
    db.doodles.findAll()
    .then((doodle) => {
      res.render('doodles/new', { doodles: bread })
    })
    .catch((error) => {
      res.status('server error')
    })
  })

 
  // GET /doodles/:id - display a specific doodle
  router.get('/:id', (req, res) => {
    db.doodles.findOne({
      where: { id: req.params.id },
      include: [db.breed, db.personality, db.image]
    })
    .then((doodles) => {
      if (!doodles) throw Error()
      db.comment.findAll({
        where: {articleId: req.params.id},
      })
    .then ((doodles)=>{
      console.log(doodles)
      res.render('doodles/show', { doodle:breed }
      )
    })
      console.log(doodle.breed)
    })
    .catch((error) => {
      console.log("server error")
    })
})


// PUT update /doodles - updates a doodle
router.get ("/edit/:id", (req, res)=>{
    res.send("update your doodle")
})


// DELETE /doodles - delete a doodle ----- why?!?!?!?!
router.delete("/:id", (req,res)=>{
    res.send ("Why would you do this???")
})

module.exports=router