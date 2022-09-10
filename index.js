const express = require('express')
const ejsLayouts = require('express-ejs-layouts');
const PORT = 3001;
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.get('/', (req, res) => {
    res.render('')
});

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})