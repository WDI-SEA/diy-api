const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const db = require('./models')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
appuse(methodOverride('_method'))

const PORT = 3000






app.listen(PORT, () => {
    console.log(`Tuned into port ${PORT}`)
})