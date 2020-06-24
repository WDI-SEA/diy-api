const express = require('express');
const db = require('./models');
const app = express();

// Routes
app.get('/', (req,res) => {
    res.send('hOmIeSlIcE');
});

// Get all owners
app.get('/owners', (req,res) => {
    db.owner.findAll().then(owners => {
        res.send(owners);
    }).catch(err => {
        res.send(err);
    })
})

// Solo owner by id
app.get('/owners/:id', (req,res) => {
    db.owner.findByPk(req.params.id).then(owner => {
        res.send(owner);
    }).catch(err => {
        res.send(err);
    })
})

// Create owner
app.post('/owners',(req,res) => {
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
app.put('/owners/:id', (req,res) => {
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
app.delete('/owner/:id', (req,res) =>{
    db.owner.destroy({
        where: {
            id:req.params.id
        }
    }).then((deleted) => {
        res.send("Deleted owner")
    }).catch(err => {
        res.send(err);
    })
})

// Get vehicles
app.get('/vehicles', (req,res) => {
    db.vehicle.findAll().then(vehicles => {
        res.send(vehicles)
    }).catch(err => {
        res.send(err);
    })
})

// Single vehicle by id
app.get('/vehicles/:id', (req,res) => {
    db.vehicle.findByPk(req.params.id).then(vehicle => {
        res.send(vehicle);
    }).catch(err => {
        res.send(err)
    })
})


app.listen(3000);