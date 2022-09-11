const db = require('./models')

db.cartoons.create({
  title: 'testOne',
  year: 2010,
  episodes: 15
})
.then(cartoon => {
  console.log(cartoon.get())
})


const createCartoon = async () => {
  try {
    const newCartoon = await db.cartoons.create({
      title: 'testTwo',
      year: 2015,
      episodes: 10
    })
    console.log(newCartoon)
  } catch (err) {
    console.log(err)
  }
}

createCartoon()