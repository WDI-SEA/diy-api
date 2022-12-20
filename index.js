const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3001

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.send('hello, starting page!')
})




app.listen(PORT, () => {
    console.log('hello!')
})