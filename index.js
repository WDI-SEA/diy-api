const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const db = require('./models')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(require('morgan')('dev'))
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))




app.get('/', async (req, res)=>{
    try{
        const cartoons = await db.cartoons.findAll()
        res.render('home.ejs', {cartoons: cartoons})
    } catch(err){
        console.warn(err)
    }
})




app.use('/cartoons', require('./controllers/cartoons'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })