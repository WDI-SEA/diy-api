// require components
const express = require('express')
const axios = require('axios')
const layouts = require('express-ejs-layouts')

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(layouts)
app.use('/kingdoms', require('./controllers/kingdoms'))
app.use('/organisms', require('./controllers/organisms'))

// const db = require('../models')

app.listen(PORT, () => {
    console.log(`Intruder at ${PORT}`)
})

app.get('/', (req,res) => {
    res.render('show')
})

app.post('/create', async (req,res) => {
    try {
        const newCreature = {
            common_name: req.body.cName,
            size: req.body.size,
            scientific_name: req.body.sName,
            id: req.body.id
        }
        res.redirect('/')
    } catch (error) {
        console.warn(error)
    }
})

// we want to create the oragnism, inside the kingdom of which is comes from to deal with the id,
// inside kingdoms show, Create organism, add organism. and then the kindom will supply the id link. 




