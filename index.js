const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const fs = require("fs")
const PORT = 8000

app.set('view engine', 'ejs');
app.use(ejsLayouts);
// app.listen(8000)

const db = require('./models')

// will need a const to insert into the routes that reads json file
const readDoodleFile =()=>{
    // uses fs to read the json files
    const doodles = fs.readFileSync("./doodles.json")
    // parses the file into json data
    const doodleData= JSON.parse(doodles)
    return doodleData
}

// HOME PAGE
app.get('/', (req, res) => {
    res.render('home');
  });

// GET index /doodles - show all doodles
app.get ("/doodles", (req, res)=>{
    res.send( "See all doodles here")
})


// POST create /doodles/new - display a form to create a new doodle
app.post ("/doodles/new", (req, res)=>{
    res.send ("Add a doodle here")
})

// GET  detail/show /doodles - show one doodle by id
app.get ("/doodles/:id", (req, res)=>{
    res.send("Choose your doodle")
})

// PUT update /doodles - updates a doodle
app.get ("doodles/edit/:id", (req, res)=>{
    res.send("update your doodle")
})


// DELETE /doodles - delete a doodle ----- why?!?!?!?!
app.delete("/doodles/edit", (req,res)=>{
    res.send ("Why would you do this???")
})

  app.listen(PORT, ()=>{
    console.log(`Doggos on ${PORT} 🐾`)
  })

