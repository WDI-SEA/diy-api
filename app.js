const express = require('express');
const db = require('./models');
const app = express()
let port = 8000;


// Routes
app.get('/', (req, res) => {
    res.send('LORD OF THE RINGS')
})

// /bearers - GET indexes all ring bearers
app.get('/bearers', (req, res) => {
    db.bearer.findAll().then(bearers => {
        res.send(JSON.stringify(bearers));
    }).catch(err => {
        console.log('🔥🔥🔥🔥🔥');
        console.log(err);
    })
})

// /bearers/:id - GET shows details of one ring bearer
app.get('/bearers/:id', (req, res) => {
    db.bearer.findByPk(req.params.id).then(user => {
        res.send(user);
    }).catch(err => {
        console.log(`💩💩💩💩💩💩💩💩`);
        console.log(err);
    })
})


// Hey LISTEN
app.listen(port, () => console.log(`☕️☕️☕️☕️ I need more coffee ☕️☕️☕️☕️`))

