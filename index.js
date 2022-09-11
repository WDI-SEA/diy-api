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

//for PUT and DELETE
const methodOverride = require("method-override")
app.use(methodOverride("_method"))


app.get('/', async (req, res) => {
    try{
    const categories = await db.category.findAll()
    const expenses = await db.expense.findAll()
    res.render("home.ejs", {categories: categories, expenses: expenses})
    }catch(err) {
        console.log(err)
        res.send("server error")
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })