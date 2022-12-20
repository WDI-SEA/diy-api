const express = require('express')
const app = express();
const port = 3000;

// GET / - main index of site
app.get('/', (req, res) => {
    res.send('swim')
})
app.get('/1', (req, res) => {
    res.send('freestyle')
})
app.post('/2', (req, res) => {
    res.send('backstroke')
})
app.post('/3', (req, res) => {
    res.send('breaststroke')
})
app.delete('/4', (req, res) => {
    res.send('butterfly')
})



app.listen(port, () => {
    console.log('...listening on', port );
  });