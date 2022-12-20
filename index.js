const express = require('express');
const db = require('./models');
require('dotenv').config();
const port = process.env.PORT

app = express();

app.set('view engine', 'ejs')
app.use('/motorcycle', require('./routes/motorcycle'));

app.listen(port, () => {
    console.log(`I'll be right by your side 'Til ${port}, hold up`)
})