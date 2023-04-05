const express = require('express')
const app = express()
const PORT = 8000
app.use(express.urlencoded({ extended: false }))
let db = require('./models')



app.get('/horses', async (req, res) => {
    try {
    const horses = await db.horses.findAll()
    console.log(`horses: ${horses}`)
    res.json(horses)
    } catch(err){
        console.log(err)
    }
})

app.post('/horses', async (req, res) => {
    try {
    console.log(req.body, 'request body')
    // const breed = req.body.breed
    // const characteristics = req.body.characteristics
    // const img_url = req.body.img_url
    const horse = await db.horses.create(
        // breed: breed,
        // characteristics: characteristics,
        // img_url: img_url
        req.body
    )
    res.json(horse)
    } catch(err){
        console.log(err)
    }
})

app.get('/horses/:id', async (req, res) => {
    try {
        const horses = await db.horses.findAll({where:{id:req.params.id}})
        console.log(`horses: ${horses}`)
        res.json(horses)
        } catch(err){
            console.log(err)
        }
})

app.put('/horses/:id', async (req, res) => {
    try {
        console.log(req.body, 'request body')
        const horse = await db.horses.update(req.body, {
            where: {id: req.params.id}
        })
        res.json(horse)
        } catch(err){
            console.log(err)
        }
})

app.delete('/horses/:id', async (req, res) => {
    try {
        await db.horses.destroy({
            where: {id: req.params.id}
        })
        res.json({ message: 'Horse deleted successfully' })
        } catch(err){
            console.log(err)
        }
})

app.listen(PORT, function(){
    console.log(`Server ${PORT} linked and ready!`)
})