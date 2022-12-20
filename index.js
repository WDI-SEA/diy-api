const express = require('express')
const methodOverride = require('method-override')
const app = express()
const db = require('./models')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async function(req,res){
    try{
    const car = await db.car.findAll()
    res.render('index.ejs',{cars:car})
    }catch(error){
        console.log('wrongoo')
    }
})
app.use('/cars', require('./controllers/cars.js'))

app.listen(8000,function(){
    console.log('we have a running server')
})