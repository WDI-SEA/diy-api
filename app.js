// Require necessary dependencies
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const db = require('./models')
require('dotenv').config()

// Setup webserver variables
const app = express()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

// Setup middleware options
app.set('view engine', 'ejs')
app.use(require('morgan')('dev'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.use(ejsLayouts)

app.get('/', (req, res) => {
  res.render('index', { webpage: 'Home' })
})

app.use('/customers', require('./routes/customers'))

app.listen(PORT, HOST, () => {
  console.log(`${HOST} is crafting on port ${PORT}`)
})