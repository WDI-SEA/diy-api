let express = require('express')
let db = require('./models')
let app = express()

const errorHandler = error => {
    console.log('error')
    console.log(error)
}
// 
// home('./')

app.get('/', (req, res) => {
    res.send('home is where you can REST')
})

//animalfrauds - GETs list of db animalfrauds


app.get('/animalfrauds', (req,res) => {
    db.animalfraud.findAll().then(animals => {
            res.send(animals)
      })
})

app.get('/animalfrauds/view/:idx', (req,res) => {
    db.animalfraud.findOne({
        where: {
            id: req.params.idx
        }
    }).then(animal => {
        // console.log(animal)
        res.send(animal)
    })
})


//adds an animalfraud to table

app.post('/animalfrauds/create', (req, res) => {
    db.animalfraud.create({
        firstName: req.query.firstName
    }).then(animalCreated => {
        console.log('animal added')
        res.send(`${animalCreated} was added to animalfrauds`)
    })
})

//REMOVES AN ANIMALFRAUD FROM TABLE BY ID //WORKS

app.delete('/animalfrauds/destroy', (req,res) => {
    db.animalfraud.destroy({
        where: {
            id: req.query.id
        }
    }).then(deletedAnimal => {
        console.log(`${deletedAnimal} removed from animalfrauds`)
        res.send(`${deletedAnimal} removed from animalfrauds`)
    })
})

//UPDATES AN ANIMALFRAUD ATTRIBUTES //CRASHES


app.put('/animalfrauds/update', (req,res) => {
    db.animalfraud.update({firstName: 'beavis'}, {
        where: {
            id: 4
        }
    }).then(updatedAnimal => {
        console.log(`updated ${updatedAnimal} attributes to ${updatedAnimal}`)
    })
})

    //  = fs.readFileSync('./dogs.json')
    // dogs = JSON.parse(dogs)
    // dogs.push(req.body)
    // fs.writeFileSync('dogs.json', JSON.stringify(dogs))
    // res.redirect('/dogs')
//   })



    // db.animalfraud.findall().then(animalfrauds => {
    //     res.send(animalfrauds)
    // }).catch(err => {
    //     console.log('🍥')
    //     console.log(err)
    // })
    // })

    // app.get('/users', (req, res) => {
    //     db.user.findAll().then(users => {
    //         res.send(users)
    //     }).catch(err => {
    //         console.log('🍪')
    //         console.log(err)
    //     })
    // })

    // /animalfrauds/:id - GETs item of animalfrauds/:id



    // /animalfrauds













    app.listen(3000, () => console.log('app.js loaded'))