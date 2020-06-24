const express = require('express');
const db = require('./models');
const methodOverride = require('method-override');

const app = express();
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send("Hi home page");
})

app.get('/characters', (req,res) => {
    res.send("characters index");
})

app.post('/characters', (req,res) => {
    res.send("character created");
})

app.get('/characters/:id', (req,res) => {
    res.send(`view of character ${req.params.id}`);
})

app.delete('/characters/:id', (req, res) => {
    res.send(`character ${req.params.id} deleted`);
})

app.put('/characters/:id', (req, res) => {
    res.send(`character ${req.params.id} updated`);
})

app.listen(3000, () => console.log("Listening at 3000 🔈"));