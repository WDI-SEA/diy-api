let express = require('express')
const db = require('./models')
const app = express()
const PORT =  3000
app.use(express.json())

// GET
app.get('/cocktails', async (req,res) => {
    // list all cocktails
    try {
        const cocktails = await db.cocktail.findAll()
        res.json(cocktails)

    } catch (error) {
        console.log(error)
    }
})

app.get('/cocktails/:name', async (req,res) => {
    // list one drink
    try {
        const cocktail = await db.cocktail.findOne({
            where: {
                name:req.params.name
            }
        })
        res.json(cocktail)
    } catch (error) {
        console.log('error')        
    }
})

// POST
app.post('/cocktails', async (req,res) => {
    // add a cocktail
    try {
        const cocktail = await db.cocktail.findOrCreate({
            where: {
                name: req.body.name
            },
            defaults:{
                alcoholType: req.body.alcoholType,
                mixer: req.body.mixer,
                alcohol: req.body.alcohol
            }
        })
        res.json(cocktail)        
    } catch (error) {
        console.log(error)
    }
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
app.delete('/cocktails/:name', async (req,res) => {
    // delete a cocktail
    try {
        const deleteDrink = await db.cocktail.destroy({
            where: {
                name:req.params.name
            }
        })        
        res.json(deleteDrink)
    } catch (error) {
        console.log(error)
    }
})

//app listener
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})