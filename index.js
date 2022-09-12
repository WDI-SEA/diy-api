const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)

app.get('/', (req, res) => {
    res.redirect('/movies')
  })

app.use('/movies', require('./controllers/movies'))
app.use('/images', require('./controllers/images'))
app.use('/genres', require('./controllers/genres'))

app.listen(PORT, function() {
  console.log(`listening on port: ${PORT}`)
})