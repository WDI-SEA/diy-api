const db = require('./models')

db.god.create({
    name: 'Zues'
  })
  .then(god => {
    console.log(god.name)
  })
  .catch(console.log)

async function createGod() {
  try {
    const newGod = await db.god.create({ name: 'python' })
    console.log(newGod)
  } catch (err) {
    console.log(err)
  }
}

createGod()