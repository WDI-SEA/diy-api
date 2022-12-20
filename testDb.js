const db = require('./models')

const testDb = async () => {
    try {
        // create a planet
        const [planet, created] = await db.planet.findOrCreate({
            where: {
                name: 'Earth'
            },
            defaults: {
                mass: 1,
                type: 'Terrestrial, life sustaining planet'
            }
        })
        // add a moon the the planet
        const newMoon = await planet.createMoon({
            name: 'Luna',
            mass: 0.012300037
        })

        console.log(`${planet.name} has a moon: ${newMoon.name}`)
    } catch(err) {

    }
}

testDb() // dont forget to invoke!