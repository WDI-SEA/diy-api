const db = require('./models')


const createThing = async() => {
try {
    const newThing = await db.thing.create({
     name: 'Steve',
     age: 100,
     backstory: 'a miner, sometimes kills dragons or hellspawn',
     reference: 't',
     isyes: 'minecraft',
     image: 'https://m.media-amazon.com/images/M/MV5BMjA5NTczNTMxNl5BMl5BanBnXkFtZTgwNDU5OTExNzM@._V1_.jpg',
     estimatedheight: 50
    })
     console.log(newThing)
     // res.redirect('/')

 } catch(err) {
     console.log(err)
     res.status(500).send('ooof')
 }
}
createThing()