const express = require('express')
let app = express ()

const PORT = 8000
app.set('view engine', 'ejs')
//middlewares
//send method override to all downstream express routes
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
//requests bodies from html forms
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))


//homepage
app.get('/', (req,res) => {
    res.render('index.ejs')
})

//directing to controllers pages
app.use("/artists", require('./controllers/artists'))
app.use("/paintings", require('./controllers/paintings'))


app.listen(PORT,() =>{
    console.log('listening')
})