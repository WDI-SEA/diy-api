const express = require('express')
const app = express()
const db = require('./models')
const port = 3000


//--MIDDLEWARE---
app.use(express.json())

//GET / - main index of website
app.get('/cocktails', async (req,res) => {
    //lists all the cocktails
    try{
        const cocktails = await db.cocktail.findAll()
        res.json(cocktails)
    }catch(error){
        console.log(error)
    }
    // res.send('We are alcoholics')
})

app.get('/cocktails/:id', async (req,res) => {
    //lists all the cocktails
    try{
        const cocktails = await db.cocktail.findOne({
            where:{
                id: req.params.id
            }
        })
        // res.json(cocktails)
    }catch(error){
        console.log(error)
    }
    // res.send('We are alcoholics')
})


//GET /post ---CREATE---
app.post('/cocktails', async(req,res) => {
    //add a cocktail
    // console.log(req.body)
    const createCocktails = await db.cocktail.findOrCreate({
            where: {
                name: req.body.name
            }, 
            defaults: {
                alcoholType: req.body.alcoholType, 
                mixer: req.body.mixer,
                alcohol: req.body.alcohol
            }
    })
    res.json(cocktail)
    // res.send('We are alcoholics')
})

 
//GET //put ---UPDATE---
app.put('/cocktails/:id', async(req,res) => {
    //update a cocktail
    try{
        const updateCocktail = await db.cocktail.updateCocktail({
            name: req.body.name,
            alcoholType: req.body.alcoholType,
            mixer: req.body.mixer,
            alcohol: req.body.alcohol
        })
        res.json(updateCocktail)
    } catch(error){
        console.log(error)
    }
    // res.send('We are alcoholics')
})

//GET ---DELETE---
app.delete('/cocktails/:name', async (req,res) => {
    // res.send('We are alcoholics')
    try {
        const deleteCocktail = await db.cocktail.destroy({
            name: req.params.name
        })
        res.json(deleteCocktail)
    } catch(error) {
        console.log(error)
    }
})


//---CONTROLLER----


//---LISTENING PORT---
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });