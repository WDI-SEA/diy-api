const Express = require('express')
const methodOverride = require('method-override')

let app = Express()

app.set('view engine', 'ejs')
app.use(Express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use('/friends', require('./controllers/friends'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('3000 connected')
})