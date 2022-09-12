const express = require('express')
const layout = require('express-ejs-layouts')
const PORT = 5000
const app = express()
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(layout)
app.use(methodOverride('_method'))

app.use('/jobs', require('./controllers/jobs'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`api is running on port ${PORT}`)
})