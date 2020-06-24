let express = require('express');
let db = require('./models')

const app = express();

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Homeeee')
});

// /users - GET indexes all users
app.set('/heros', (req, res) => {
    db.hero.findAll().then(heros => {
        res.send(JSON.stringify(heros))
    }).catch(err => {
        console.log('💩💩💩💩💩💩');
        console.log(err)
    });
})

// /users/:id - GET shows details one user
app.get('/heros/:id', (req, res) => {
    db.hero.findByPk(req.params.id).then(hero => {
        res.send(hero)
    }).catch(err => {
        console.log('💩💩💩💩💩💩');
        console.log(err)
    });
})

app.post('/heros', (req, res) => {
    db.hero.findOrCreate({
        where: {
            name: req.body.name
        },
        defaults: {
            name: req.body.name,
            superpower: req.body.superpower,
            description: req.body.description
        }
    }).then(([hero, created]) => {
        console.log(`🌎${hero.name} was ${created ? 'created' : 'found'}!`)
    }).catch(errorHandler);  
})


//put
app.put('/heros/:idx', (req, res) => {
    db.hero.update({
        name: req.body.name,
        superpower: req.body.superpower,
        description: req.body.description
    }, {
        where: { name: req.body.name}
    }).then(updated => {
        console.log('🔍');
    
        console.log(updated);
    }).catch(errorHandler);
})

//app delete
app.delete('/heros/:idx', (req, res) => {
    db.hero.destroy({
        where: {
            name: req.body.name
        }
    }).then(deleted => {
        console.log('🎲');
    
        console.log(deleted)
    }).catch(errorHandler).finally(() => {
            //any kind of cleanup or other things.. can be used after any catch
            console.log('Doneskies')
    })
})


//Hey LISTEN
app.listen(3000, () => console.log(`🤠 Howdy pardner, you're listening to the country tunes in port 3000`))