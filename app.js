const express = require('express');
const db = require('./models');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());
app.use(methodOverride('_method'));

function errorHandler(error) {
    console.log("🟥🟥🟥🟥 Error! 🟥🟥🟥🟥");
    console.log(error);
}

app.get('/', (req, res) => {
    res.send("Hi home page");
})

app.get('/characters', (req,res) => {
    db.character.findAll().then(characters => {
        res.send(JSON.stringify(characters));
    }).catch(errorHandler);
})

app.post('/characters', (req,res) => { // send data using 'x-www-form-urlencoded' section of postman
    db.character.create({
        name: req.body.name,
        level: req.body.level,
        class: req.body.class,
        race: req.body.race,
        realm: req.body.realm,
        preferredSpec: req.body.preferredSpec,
        dateMade: req.body.dateMade
    }).then(createdCharacter => {
        console.log(`🧮🧮 Character ${createdCharacter.name} created 🧮🧮`);
        res.send(JSON.stringify(createdCharacter));
    }).catch(errorHandler);
})

app.get('/characters/:id', (req,res) => { // needs to be a url, not a ?= query string
    console.log(`trying to find ${req.params.id} 🪓🪓🪓🪓🪓`);
    db.character.findOne({
        where: {
            id: req.params.id
        }
    }).then(foundCharacter => {
        console.log(`Character found! 🧲🧲🧲🧲`)
        res.send(JSON.stringify(foundCharacter));
    }).catch(errorHandler);
})

app.delete('/characters/:id', (req, res) => {
    db.character.destroy({
        where: {
            id: req.params.id
        }
    }).then(deleteResult => {
        console.log(`Character Deleted 🚘🚘🚘🚘🚘`);
        console.log(deleteResult);
        res.send(JSON.stringify(deleteResult));
    }).catch(errorHandler);
})

app.put('/characters/:id', (req, res) => {
    let updateInfo = req.body;
    db.character.update(updateInfo, {
        where: {
            id: req.params.id
        }
    }).then(updateResult => {
        console.log('🍟🍟🍟🍟🍟🍟 character updated');
        res.send(JSON.stringify(updateResult));
    }).catch(errorHandler);
})

app.listen(3000, () => console.log("Listening at 3000 🔈"));