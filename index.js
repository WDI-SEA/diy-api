const express = require('express');
const db = require('./models');

const app = express();

const errorHandler = error => {
    console.log('WARNING, this is an error');
    console.log(error);
}

//Routes

//home
app.get('/', (req, res) => {
    res.send('home');
});

//GET index 
app.get('/plants', (req, res) => {
    db.plant.findAll().then(plants => {
        res.send(plants);
    }).catch(errorHandler)
})
//POST create
app.post('/plants', (req, res) => {
    db.plant.create({
        commonName: req.body.commonName,
        scientificName: req.body.scientificName,
        description: req.body.description,
        quantity: req.body.quantity
    }).then(plantData => {
        console.log(plantData)
        res.send(plantData)
    }).catch(errorHandler);
})
// GET detail/show
app.get('/plant/:id', (req, res) => {
    db.plant.findByPk(req.params.id).then(plant => {
        res.send(plant)
    }).catch(errorHandler)
})

//PUT update
app.put('/plants/:id', (req, res) => {
    db.plant.update(
    req.body, {
        where: {
            id: req.params.id
        }
    }).then(updated =>{
        db.plant.findByPk(req.params.id)
        .then(plant => {
            res.send('Plant was updated', plant)
        })
    }).catch(errorHandler)
    res.redirect('/plants')
})
//DELETE 
app.delete('/plants/:id', (req,res) => {
    db.plant.destroy( {
        where: {
            commonName: req.body.name
        }
    }).then(deleted => {
        console.log('dead')
    }).catch(errorHandler);

    res.redirect('/plants')
})

//listen
app.listen(3000);