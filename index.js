//configs
const express = require('express');
const app = express();
const PORT = 8000;

//Config for db & models
const db = require('./models')

//middleware
app.use(express.urlencoded({ extended: false }))

//ROUTES for CRUD action
//GET / Home route for main page 
app.get('/', (req,res) => {
    res.send("This is the homepage")
})
//Get / -- home route for the page & list all cocktails 
app.get('/cocktails', (req,res) => {

    res.json("Cocktails Home Page")//json to send back in the format
})

//POST /-- add a cocktail to the list
app.post('/cocktails',async (req,res) =>{
    try{
    console.log(req.body,"request body")
    const cocktail = await db.cocktail.create(
        req.body
    //     {
    //     name: req.body.name,
    //     recipe: req.body.recipe,
    //     glassware: req.body.glassware,
    //     garnish: req.body.garnish
    // }
    )
    res.json(cocktail)
    } catch(err) {
        console.log(err)
    }

//     }).then((cocktail) => {

//         console.log(cocktail)

//     }).catch((error) => {

//         console.log(error)
//     })
  // res.json(cocktails)
})

//GET /:id -- this will list the details and show info pertaining to one cocktail
app.get('/cocktails/:id', (req,res) => {
    res.send(" This is where X cocktail will show")
})

//PUT /:id --This is where user can update a cocktail/ add addition
app.put('/cocktails/:id', (req,res) => {
    res.send("Update the cocktails Here")
})


//DELETE /:id -- Delete the cocktails 
app.delete('/cocktails/:id', (req,res) =>{
    res.send("Functionality to delete cocktails here")
})








//App listening to link up to nodemon and page?
console.log(`I'm listening on ${PORT} lets GOOO`)
app.listen(PORT)

