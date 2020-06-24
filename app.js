const express = require('express')
const app = express()
const db = require('./models')
app.use(express.urlencoded({ extended: false }));

const errorHandler = error => {
    console.log(`💩`)
    console.log(error)
}

app.get('/', (req, res) => {
    res.send(`Home Page`)
})

app.get('/anime', (req,res) => {
    db.anime.findAll().then(anime => {
        anime.forEach(anime => res.send(anime))
    })
})

app.post('/anime', (req, res) => {
    db.anime.findOrCreate({
        where: {
            title: req.body.title
        },
        defaults: {
            makeCry: req.body.makeCry,
            rating: req.body.rating
        }
    }).then(([anime, created]) => {
        res.send(`🤘🏼 ${anime.title} rules!`)
    }).catch(errorHandler)
})

app.get('/anime/:id', (req, res) => {
    db.anime.findByPk(req.params.id).then(anime => {
        res.send(anime)
    }).catch(errorHandler)
})

app.put('/anime/:id', (req, res) => {
    db.anime.update({
        title: req.body.title,
        makeCry: req.body.makeCry,
        rating: req.body.rating
    }, {
        where: {
            id: req.params.id
        }
    }).then(updated => {
        res.send(updated)
    }).catch(errorHandler)
})

app.delete('/anime/:id', (req, res) => {
    db.anime.destroy({
        where: {
            id: req.params.id
        }
    }).then(deleted => {
        res.send(`💔`)
    }).catch(errorHandler)
})

app.listen(4000, () => console.log(`🤘🏼4K🤘🏼`))