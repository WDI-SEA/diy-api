const { Router } = require('express')
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
const character = require('./models/character')
const methodOverride = require('method-override');



const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(methodOverride('_method'));
// routs

app.get('/', (req, res) => {
    res.render('home.ejs')
})
// CREATE - add new character to galery
app.post('/characters', async (req,res) => {
    try {
       const create = await db.character.create({
        name: req.body.name,
        season: req.body.season,
        description: req.body.description,
        type: req.body.type,
        img_icon: req.body.img_icon
     })
     res.redirect('/characters')
    }catch (err) {
        console.log(err)
    }
 })
// READ - dsplay all
app.get('/characters', async (req,res) => {
    try {
        const characters = await db.character.findAll()
    
        res.render('index.ejs', { characters })
    } catch(err) {
        console.log(err)
    }
})
// add new character form
app.get('/characters/new', (req,res) => {
    res.render('new.ejs')
})
// UPDATE - edit
app.put('/characters/:id', async (req,res) => {
    try {
        const editCharacter = await db.character.update({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            season: req.body.season,
            img_icon: req.body.img_icon,
        }, {
            where: { id: req.params.id }
        })
        res.redirect('/characters')
    } catch(err) {
        console.log(err)
    }
})

app.get('/characters/:id', async (req, res) => {
    try {
        const details = await db.character.findOne({
            where: { id: req.params.id }
        })
        res.render('details.ejs', { character: details})
    } catch(err) {
        console.log(err)
    }
}) 
// DESTROY
app.delete('/characters/:id', async (req,res) => {
    try {
       const deleteCharacter = await db.character.destroy({
            where: { id: req.params.id }
        })
        res.redirect('/characters')
    }catch(err){
        console.log(err)
    }
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })