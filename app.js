const express = require('express');
const db = require('./models');
const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/cars', (req, res) => {
    db.car.findAll().then(cars => {
        res.send(cars);
    }).catch(err => {
        console.log("🔥 This is fine");
        console.log(err);
    })
})

app.get('/cars/:id', (req, res) => {
    db.car.findByPk(req.params.id).then(car => {
        res.send(car);
    }).catch(err => {
        console.log("🔥 This is fine");
        console.log(err);
        res.send(err)
    })
})

app.post('/cars', (req, res) => {
    db.car.findOrCreate({
        where: {
            carName: req.body.carName
        },
        defaults: {
            model: req.body.model,
            make: req.body.make,
            year: req.body.year
        }
    }).then(([car, created]) => {
        console.log(`👽 ${car.carName} was ${created ? 'created' : 'found'}!`)
        res.send(cars);
    }).catch(err => {
        console.log("🔥 This is fine");
        console.log(err);
        res.send(err)
    })
})
app.put('/cars/:id', (req, res) => {
    let newData = req.body;
    db.car.update({
        carName: newData.carName,
        model: newData.model,
        make: newData.make,
        year: newData.year
    }, {
        where: {
            id: req.params.id
        }
    }).then(updated => {
        console.log(updated);
        res.send(updated);
    }).catch(err => {
        console.log("🔥 This is fine");
        console.log(err);
        res.send(err)
    })
});

app.delete('/cars/:id', (req, res) => {
    db.car.destroy({
        where: {
            id: req.params.id
        }
    }).then(deleted => {
        res.send('Sad to see her go.')
    }).catch(err => {
        console.log("🔥 This is fine");
        console.log(err);
        res.send(err)
    })
})
app.listen(8000, () => console.log("come along with me"))