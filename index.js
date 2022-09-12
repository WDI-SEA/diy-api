const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
const rowdy = require('rowdy-logger')

const app = express()
const PORT = process.env.PORT || 8000
rowdy.begin(app)

app.set('view engine', 'ejs')
app.use(require('morgan')('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
//Homepage
app.get('/', (req,res) => {
    res.render('homepage')
})
//List cars
app.get('/lists', (req, res) => {
    db.cars.findAll()
    .then((cars) => {
      res.render('list', { cars: cars })
    })
    .catch((error) => {
      console.log('Error in GET /', error)
    })
  });
// add new cars
app.get('/add', (req, res) => {
    res.render('add')
  })
app.post('/cars', async (req,res) => {
    console.log(req.body)
    try {
        const cars = await db.cars.create({
            name: req.body.name,
            year: req.body.year,
            color: req.body.color
        })
        res.redirect('/')
    }catch(err) {
        console.log(err)
    }
})
//edit current cars
app.get('/cars/:id', async (req,res) => {
    try {
        const oneCar = await db.cars.findOne({
            where: { id: req.params.id }
        })
        res.render('edit.ejs', { cars: oneCar})
    }catch(err) {
        console.log(err)
    }
})


app.listen(PORT, function() {
    // rowdy.print()
    console.log(`listening on port: ${PORT}`)
  })
  