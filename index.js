const express = require('express')
const db = require('./models')
const PORT = 3000
const app = express()

app.use(methodOverride('_method'))
app.set('view engine', 'ejs')


app.get('/', (req,res)=>{
    res.send('home page')
})

app.post('/hitboxes', (req,res)=>{
    res.send('make a new hitbox')
})

app.get('/hitboxes/:id',(req,res)=>{
    res.send('show one hitbox')
})

app.put('/hitboxes/:id', (req,res)=>{
    res.send('edit a hitbox')
})

app.delete('/hitboxes/:id', (req,res)=>{
    res.send('delete a hitbox')
})

app.listen(PORT, () =>{
    console.log(`The engine roar of port ${PORT}`)
})