//configs
const express = require('express');
const app = express();
const PORT = 8000;

//Config for db & models
const db = require('./models');
const cocktail = require('./models/cocktail');

//middleware
app.use(express.urlencoded({ extended: false }))

//ROUTES for CRUD action
//GET / Home route for main page 
app.get('/', (req,res) => {
    res.send("This is the homepage")
})

//Get /cocktails --  page list all cocktails 
app.get('/cocktails', async (req,res) => {
    try{
        //const data = req.body
        const allCocktails = await db.cocktail.findAll()
        res.json(allCocktails)//json to send back in the format

    } catch(err) {
        console.log(err)
    }
})

//POST /-- add a cocktail & spirit to the list
app.post('/cocktails',async (req,res) =>{
    try{
    const cocktail = await db.cocktail.create(
        req.body
    )
    res.json(cocktail)
    } catch(err) {
        console.log(err)
    }
})

app.post('/spirit',async (req,res) =>{
    try{
    const spirit = await db.spirit.create(
        req.body
    )
    console.log(req.body, "heyyy Im here")
    res.json(spirit)
    } catch(err) {
        console.log(err)
    }
})

//GET /:id -- this will list the details and show info pertaining to one cocktail
app.get('/cocktails/:id', async (req,res) => {
    try {
        const id = req.params.id
        const cocktailInfo = await db.cocktail.findOne({where: {id}})
        
        res.json(cocktailInfo)

    }catch (err) {
        console.log(err)
    }

})

//PUT /:id --This is where user can update a cocktail/ add addition
app.put('/cocktails/:id', async (req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const updateCocktail = await db.cocktail.update(data, {
            where: { id }
            
        })
        
        res.json(data)

    }catch (err) {
        console.log(err)
    }

})


//DELETE /:id -- Delete the cocktails 
app.delete('/cocktails/:id', async (req,res) =>{
    try{
        const id = req.params.id
        const cocktail = await db.cocktail.destroy({where: {id}})
        res.json(cocktail)
        

    }catch(err){
        console.log(err)
    }
})








//App listening to link up to nodemon and page?
console.log(`I'm listening on ${PORT} lets GOOO`)
app.listen(PORT)

