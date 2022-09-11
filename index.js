const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
const moment = require('moment')
const rowdy = require('rowdy-logger')

const app = express()
const port = process.env.PORT || 3000
rowdy.begin(app)

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(express.static(__dirname + '/public/'))

// middleware that allows us to access the 'moment' library in every EJS view
app.use((req, res, next) => {
  res.locals.moment = moment
  next()
})

// GET / - display all articles and their authors
app.get('/', (req, res) => {
  db.article.findAll({
    include: [db.author]
  }).then((articles) => {
    res.render('main/index', { articles: articles })
  }).catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
})

// bring in authors and articles controllers
app.use('/users', require('./controllers/users'))
app.use('/thread', require('./controllers/thread))
app.use('/comment', require('./controllers/comment))

app.listen(port, () => {
  rowdy.print()
  console.log(`listening on port ${port}`)
})