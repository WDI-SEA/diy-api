
let express = require('express')
let db = require('./models')
const plate = require('./models/plate')
let app = express()

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/plates', (req, res)=> {
    db.plate.findAll().then(plate => {
        res.send(plate)
    }).catch(err => {
        console.log(err)
    })
})



app.get('/plates/:id', (req, res) => {
    db.plate.findByPk(req.params.id).then(plate => {
        res.send(plate);
    }).catch(err => {
        console.log(err)
    })
})

app.post('/plates', (req, res) => {
    db.plate.create({
        distributor: req.query.distributor,
        weight: req.query.weight,
        material: req.query.material
    }).then(plateData => {
        console.log('ooooof');
        res.send(plateData);
    }).catch(err => {
        console.log(err)
    })
})

app.delete('/plates/:id', (req, res) => {
    db.plate.destroy({
    where: {
        id: req.params.id
    }
}).then(status => {
    console.log(`You deleted ${status}`)
    res.send(`${status}`)
}).catch(err => {
    console.log(err)
})
})

app.put('/plates/:id', (req, res) => {
    db.plate.update({
        distributor: req.query.distributor,
        weight: req.query.weight,
        material: req.query.material
    }, { where : {id: req.params.id}}).then(updated => {
    console.log('updated')
    res.send(updated)
}).catch(err => {
    console.log(err)
})
})

let port = 3000
app.listen(port), () => console.log(`You're listening on the smooth sounds of port ${port}`)
