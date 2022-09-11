const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const fs = require("fs")
const methodOverride = require("method-override");
const db = require('./models')

const app = express();
const PORT = 8000

app.set('view engine', 'ejs')
app.use(ejsLayouts);
app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))


// HOME  PAGE --- gtg
app.get('/', (req, res) => {
    res.render('home');
  });
// req controllers
app.use('/doodles', require ("./controllers/doodles"))


// listen on port
  app.listen(PORT, ()=>{
    console.log(`Doggos on ${PORT} 🐾`)
  })

