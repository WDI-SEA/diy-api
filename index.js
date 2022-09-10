const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)

//controllers
app.use('/categories', require('./controllers/categories'))
app.use('/expenses', require('./controllers/expenses'))


app.get('/', async (req, res) => {
    try{
    const categories = await db.category.findAll()
    res.render("home.ejs", {categories: categories})
    }catch(err) {
        console.log(err)
        res.send("server error")
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })