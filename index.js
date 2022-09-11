const express = require('express')
const db = require('./models')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(methodOverride('_method'))

app.get('/', (req,res)=>{
    db.hitbox.findAll()
        .then(hitboxes =>{
            res.render('index.ejs', {hitboxes})
        }).catch((err) =>{
            console.log(err)
            res.render('404.ejs')
        })
})

app.get('/new', (req,res)=>{
    res.render('new.ejs')
})

app.post('/hitboxes', async (req,res)=>{
    try{
        const newHitbox = await db.hitbox.create({
            name: req.body.name,
            length: req.body.length,
            width: req.body.width,
            height: req.body.height,
            angle: req.body.angle
        })
        console.log(newHitbox)
        res.redirect('/')
    }catch(err){
        console.log(err)
        res.render('404.ejs')
    }
})

app.get('/hitboxes/:id', (req,res)=>{
    db.hitbox.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(hitboxes=>{
            res.render('show.ejs', {hitboxes})
        }).catch(err => {
        console.log(err)
        res.render('404.ejs')
    })
})

app.put('/hitboxes/:id', async (req,res)=>{
    try {
        await db.hitbox.update({
            where:{
                id: req.params.id
            }
        })
        res.redirect('edit.ejs', {hitbox})
    } catch (error) {
        console.log(error)
        res.render('404.ejs')
    }
})

app.delete('/hitboxes/:id', async (req,res)=>{
    try {
        await db.hitbox.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }catch (err) {
        console.log(err)
        res.render('404.ejs')
    }
})

app.listen(PORT, () =>{
    console.log(`The engine roar of port ${PORT}`)
})