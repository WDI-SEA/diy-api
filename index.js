const express = require('express');
const app = express();
const db = require('./models')




app.get('/artists', async (req, res) => {
    const allArtists = await db.artist.findAll()
    res.send(allArtists)
    //realistically res.render with forEach
})

app.get('/artists/:id', async (req, res) => {
    const oneArtist = await db.artist.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send(oneArtist)
    //realistically res.render with details on artist
})

app.post('/artists', async (req,res) => {
    const newArtist = await db.artist.create({
        stageName: 'Keshi',
        fullName: 'Casey Luong',
        age: 28,
        nationality: 'American'
    })
    res.send(newArtist)
    //realistically make a res.render with a form in the ejs
})

app.put('/artists/:id', async (req, res) => {
    await db.artist.update({age:27}, {
        where: {
            id: req.params.id
        }
    })
    // res.render('artist.ejs')
})

app.delete('/artists/:id', async (req, res) => {
    await db.artist.destroy({
        where: {
            stageName: 'Keshi'
        }
    })
    // res.redirect('/artists')
})

app.get('/artists/:id/songs', async (req, res) => {
    const foundArtist = await db.artist.findOne({
        where: {
            id: req.params.id
        }
    })

    const artistSongs = await foundArtist.getSongs()
    res.send(artistSongs)
    //realistically res.render with forEach for songs and details for each song
})

app.post('/artists/:id/songs', async (req, res) => {
    const newSong = await db.song.create({
        songName: 'Skeletons',
        releaseDate: 'July 15, 2019',
        artistId: 1

    })
    res.send(newArtist)
    //realistically make a res.render with a form in the ejs
})




app.listen(3000, ()=> {
    console.log('listening on 3000')
})