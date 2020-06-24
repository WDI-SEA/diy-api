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


//FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
app.get('/animalfrauds', (req,res) => {
    db.animalfraud.findAll().then(animals => {
        animals.forEach(animal => 
            res.send(animal))
      })
})

app.get('/animalfrauds/:idx', (req,res) => {
    db.animalfraud.findOne({
        where: {
            id: req.params.idx
        }
    }).then(animal => {
        console.log(animal)
        res.send(animal)
    })
})


//adds an animalfraud to table
// app.get('/animalfrauds', (req, res) => {
//     // res.send('what the fuck')
//     db.animalfraud.create({
//         firstName: 'ShitHead',
//         lastName: 'McGee',
//         species: 'cat',
//         factoid: 'eats cat litter'
//     }).then(animalfraudData => {
//         console.log('woop woop')
//         console.log(animalfraudData)
//     })
// })
// console.log(db.animalfrauds)
// db.animalfraud.create({
//     firstName: 'ShitHead',
//     lastName: 'McGee',
//     species: 'cat',
//     factoid: 'eats cat litter'
// }).then(animalfraudData => {
//     console.log('woop woop')
//     console.log(animalfraudData)
// })



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