const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)

app.get('/', async (req, res) => {
  await db.world_cups.findAll()
  .then((world_cups) => {
    res.render('main/index', { world_cups: world_cups })
  })
  .catch((error) => {
    console.log('Error in GET /', error)
    res.status(400).send('oof')
  })
})

app.get('/new', (req, res) => {
  res.render('main/new.ejs')
})
app.get('/:id', (req,res) => {
  res.render('main/show.ejs')
})
app.use('/world_cups', require('./controllers/facts'))

app.get('*', (req, res) => {
  res.send('oof')
})

app.listen(PORT, function() {
  console.log(`listening on port: ${PORT}`)
})
