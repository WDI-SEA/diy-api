const express = require('express');
const db = require('./models');
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('hOmIeSlIcE');
});

// Get all owners
app.get('/owners', (req, res) => {
    db.owner.findAll().then(owners => {
        res.send(owners);
    }).catch(err => {
        res.send(err);
    })
})

// Solo owner by id
app.get('/owners/:id', (req, res) => {
    db.owner.findByPk(req.params.id).then(owner => {
        res.send(owner);
    }).catch(err => {
        res.send(err);
    })
})

// Create owner
app.post('/owners', (req, res) => {
    db.owner.create({
        firstName: "Spongebob",
        lastName: 'Squarepants',
        dlNum: 'XYZ789',
        insurance: false
    }).then((ownerData) => {
        res.send(ownerData)
    }).catch(err => {
        res.send(err)
    })
})

// Update owner by id
app.put('/owners/:id', (req, res) => {
    db.owner.update({
        dlNum: 'testdlNum'
    },
        {
            where: {
                id: req.params.id
            },
        }).then((updated) => {
            res.send(updated)
        }).catch(err => {
            res.send(err);
        })
})

// Destroy owner
app.delete('/owner/:id', (req, res) => {
    db.owner.destroy({
        where: {
            id: req.params.id
        }
    }).then((deleted) => {
        res.send("Deleted owner")
    }).catch(err => {
        res.send(err);
    })
})

// Get vehicles
app.get('/vehicles', (req, res) => {
    db.vehicle.findAll().then(vehicles => {
        res.send(vehicles)
    }).catch(err => {
        res.send(err);
    })
})

// Single vehicle by id
app.get('/vehicles/:id', (req, res) => {
    db.vehicle.findByPk(req.params.id).then(vehicle => {
        res.send(vehicle);
    }).catch(err => {
        res.send(err)
    })
})

// Create vehicle
app.post('/vehicles/:id', (req, res) => {
    db.owner.findOne({
        where: {
            id: req.params.id
        }
    }).then((owner) => {
        owner.createVehicle({
            vin: 1,
            make: 'Tesla',
            model: 'Model X',
            year: 2019
        }).then((vehicle) => {
            res.send(`${vehicle.make} ${vehicle.model} has been created`)
        }).catch(err => {
            res.send(err);
        })
    }).catch(err => {
        res.send(err);
    });
})

// Update Vehicle by id
app.put('/vehicles/:id', (req, res) => {
    db.vehicle.update({
        year: 2020
    },
        {
            where: {
                id: req.params.id,
            },
        }).then((updated) => {
            res.send(updated)
        }).catch(err => {
            res.send(err);
        });
})

// Delete Vehicle By id
app.delete('/vehicles/:id', (req,res) => {
    db.vehicle.destory({
        where: {
            id:req.params.id
        }
    }).then((deleted) => {
        res.send("Deleted vehicle")
    }).catch(err => {
        res.send(err);
    })
})


app.listen(3000);