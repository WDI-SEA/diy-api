const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.listen(port, () =>{
    console.log(`Listening to port ${port}🎧`)
})