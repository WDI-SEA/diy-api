const express = require('express')
const db = require('./models')
const ejsLayouts = require('express-ejs-layouts');
const app = express()
const PORT = (8000)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)

app.use('/posts', require('./controllers/posts'))
///////////////////////////////////////
//ROUTES 
///////////////////////////////////////

//homepage
app.get('/', (req, res) => {
    res.render('home')
})



//Delete feed(post)
app.delete('/feed/:id', (req, res) => {
res.send('delete post')
})

///////////////////////////////////////

app.listen(PORT, function(){
    console.log('I am smitten for them kittens 🐈')
})
