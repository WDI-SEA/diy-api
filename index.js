const express = require('express')
const app = express()
const db = require('./models')
const port = 3000
app.use(express.json())
//GET / - main index of site
app.get('/cocktails', async (req,res) => {
    // List all cocktails
    try {
        const cocktails = await db.cocktail.findAll()
        res.json(cocktails)
    } catch (error) {
        console.log(error)
    }
    


})

app.get('/cocktails/:id', async (req,res) => {
    //Show One cocktail
    try {
        const cocktail = await db.cocktail.findOne({
            where: {
            id:req.params.id    
            }
        })
    } catch (error) {
        console.log(error)
    }
    res.send('req.body')
})

app.post('/cocktails', async (req,res) => {
    //Add a cocktail
    console.log(req.body)
    const cocktail = await db.cocktail.findOrCreate({
        where: {name: req.body.name},
        defaults: { alcoholType: req.body.alcoholType, 
        mixer: req.body.mixer, 
        alcohol: req.body.alcohol}
    })
    res.json(cocktail)
})

// PUT
app.put('/cocktails/:name', async (req,res) => {
    // update a cocktail
    try {
        const changeDrink = await db.cocktail.update({
            name:req.body.name,
            alcoholType: req.body.alcoholType,
            mixer:req.body.mixer,
            alcohol: req.body.alcohol
       },{
            where: {
                name:req.params.name
            }
       })
       res.json(changeDrink)
    } catch (error) {
        console.log(error)
    }
})
// DELETE
app.delete('/cocktails/:id', async (req,res) => {
    // delete a cocktail
    try {
        const deleteDrink = await db.cocktail.destroy({
            where: {
                id:req.params.id
            }
        })
        res.json(deleteDrink)
    } catch (error) {
        console.log(error)
    }
})


//CONTROLLERS












app.listen(port, () => {
    console.log('Listening on port 3000')
})