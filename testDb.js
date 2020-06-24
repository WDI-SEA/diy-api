const db = require('./models')

const errorHandler = error => {
    console.log(`💩`)
    console.log(error)
}

// CREATE 
db.artist.create({ 
    firstName: 'Tom',
    lastName: 'Petty',
    bestAlbum: 'Full Moon Fever'
}).then(artistData => {
    console.log(`✨`)
    console.log(artistData)
}).catch(errorHandler)

// READ
// to find one of the artists
db.artist.findOne({
    where: {
        id: 1
    }
}).then(foundArtist => {
    console.log(`🌼Listen to ${foundArtist.firstName} ${foundArtist.lastName}`)
}).catch(errorHandler)

// to find all 
db.artist.findAll().then(artists => {
    artists.forEach(artist => console.log(`🔮Check out ${artist.firstName}`))
})

// UPDATE
db.artist.update({
    firstName: 'Elton',
    lastName: 'John',
    bestAlbum: 'Goodbye Yellow Brick Road'}, 
    { where: {id: 11}
    }
).catch(errorHandler)

// DESTROY
db.artist.destroy({
    where: {
        firstName: 'Prince',
        bestAlbum: '1999'
    }
}).then(deleted => {
    console.log(`💫`)
    console.log(deleted)
}).catch(errorHandler)

/*---------PART 2--------*/

// CREATE pt. 2
db.song.create({ 
        name: 'Tiny Dancer',
        age: 47
    }).then(songData => {
        console.log(`✨`)
        console.log(songData)
    }).catch(errorHandler)

// READ pt. 2
to find one of the songs
db.song.findOne({
    where: {
        id: 1
    }
}).then(foundSong => {
    console.log(`🌼 Listen to ${foundSong.name}`)
}).catch(errorHandler)

// to find all 
db.song.findAll().then(songs => {
    songs.forEach(song => console.log(`🔮Check out ${song.name}`))
})