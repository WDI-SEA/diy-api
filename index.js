const express = require('express')
const layout = require('express-ejs-layouts')
const PORT = 3001
const app = express()
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(layout)

app.use('/recipes', require('./controllers/recipes'))
app.use('/brewingdevices', require('./controllers/brewingdevices'))
app.use('/beans', require('./controllers/beans'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})