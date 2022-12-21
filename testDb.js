const db = require('./models')

const testDb = async () => {
    try {
        // create a planet
        const [planet, created] = await db.planet.findOrCreate({
            where: {
                name: 'Earth'
            },
            default: {
                mass: 1,
                type: 'terrestrial, life sustaining planet'
            }
        })
        // add a moon to the planet
        const newMoon = await planet.createMoon({
            name: 'Luna',
            mass: 0.0123000371
        })

        console.log(`${planet.name} has a moon ${newMoon.name}`)
    } catch (error) {
        
    }
}

testDb() // dont forget to invoke it