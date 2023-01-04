const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3001

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res)=> {
    res.json({
        message: 'Welcom to theee api'
    })
})



app.use('/planets', require('./controllers/planets.js'))


app.listen(PORT, () => {
    console.log('hello hello from', PORT)
})