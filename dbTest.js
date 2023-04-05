const db = require('./models')

const createAlbum = async () => {
    try {
        await db.album.create({
            title: 'sadBoyAlbum',
            release_date: '2023-04-04',
            record_label: 'newIndieLabel',
            artwork_url: 'google.com',
        })
    } catch(err) {
    console.log(err)
    }
}

createAlbum()
