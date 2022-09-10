const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const db = require('./models');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)

app.get('/', (req, res) => {
    db.god.findAll()
    .then((gods) => {
      res.render('main/index', { gods: gods })
    })
    .catch((error) => {
      console.log('Error in GET /', error)
    })
  })



app.use('/gods', require('./controllers/gods'))

app.listen(PORT, () => console.log(`my god we are up and running`))