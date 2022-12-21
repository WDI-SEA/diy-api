
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const db = require('./models')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use('/things', require('./controllers/things'))

app.get('/', (req, res) => {
    res.json({
        message: 'welcome to things and stuff'
    })
})
app.listen(port, () => {
    console.log(`hear me port ${port}`)
})

app.get('/', (req, res) => {
    res.render('main/index')
})