const express = require('express')
const db = require('./models')
const rowdy = require('rowdy-logger')
const { where } = require('sequelize')

const app = express()
const PORT = 3000
const rowdyResults = rowdy.begin(app)


app.get('/', (req,res) => {
    res.render('index.ejs')
})

// GET /albums - display all albums
app.get('/albums', (req, res) => {
    db.album.findAll({
    }).then((albums) => {
        res.json(albums)
    })
})

// POST /albums - create a new album
app.post('/new', async (req,res) => {
    try {
        const newAlbum = await db.album.create({
            title: req.body.albumTitle,
            release_date: req.body.releaseDate,
            record_label: req.body.recordLabel,
            artwork_url: req.body.albumArtwork,
        })
        .then(res.json(albums))
    } catch(err) {
        console.log(err)
    }
})


// GET /albums/:id - show album details
app.get('/albums/:id', (req, res) => {
    db.album.findOne({
        where: {id: req.params.id}
    }).then((album) => {
        res.json(album)
    })
})

// PUT /albums/:id - update album details
app.put('/albums/:id', (req,res) => {
    db.album.update({
        title: req.body.albumTitle,
        release_date: req.body.releaseDate,
        record_label: req.body.recordLabel,
        artwork_url: req.body.albumArtwork,
    }, {
        where: {
            id: req.params.id,
        }
    }).then(res.redirect('/albums'))
})

// DELETE /albums/:id - delete an album
app.delete('/albums/:id', (req,res) => {
    db.album.destroy({
        where: {
            id: req.params.id
        }.then(res.redirect('/albums'))
    })
})

app.get('/new', (req,res) => {
    res.render('new.ejs')
})


app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Check us out on port ${PORT}`)
})