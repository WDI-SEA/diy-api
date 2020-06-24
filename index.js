const express = require('express');

let app = express();

// Routes
app.get('/', (req, res) => {
    res.send('I hope this works!')
});

// PORT
app.listen(8000, () => console.log('😓server is working!'))