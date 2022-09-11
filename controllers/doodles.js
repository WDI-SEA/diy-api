const express= require("express")
const router =express.Router()
const fs = require('fs')

// gets doodles from db
const readDoodleFile= ()=>{
    // uses fs to read json file
    const doodles = fs.readFileSync('./doodles.json')
    // parses the file into json data
    const doodleData = JSON.parse(doodles)
    return doodleData
}

// GET index /doodles - show all doodles   ***** GTG ************
router.get ("/", (req, res)=>{
    const doodleData = readDoodleFile()
    console.log(doodleData +"testing")
    res.render('index.ejs',{
        doodles:doodleData,
    })
})


// POST create /doodles/new - display a form to create a new doodle *** SHOWS FORM****
router.get ("/new", (req, res)=>{
    // res.send ("Add a doodle here")
    res.render("new.ejs")
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