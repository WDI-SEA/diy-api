const express= require("express")
const router =express.Router()
const fs = require('fs')


// GET index /doodles - show all doodles -gtg
router.get ("/", (req, res)=>{
    //  res.send( "See all doodles here")
    res.render('doodles/index.ejs')
})


// POST create /doodles/new - display a form to create a new doodle 
router.get ("/new", (req, res)=>{
    res.send ("Add a doodle here")
    res.render("doodles/new.ejs")
})

// GET  detail/show /doodles - show one doodle by id
router.get ("/:id", (req, res)=>{
    res.send("Choose your doodle")
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