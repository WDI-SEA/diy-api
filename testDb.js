const db = require('./models')

const testDb = async () => {
    try {

        const[planet, created] = await db.planet.findOrCreate({
            where: {
                name: 'Earth'
            }, 
            defaults: {
                mass: 1,
                type: 'Rocky Terrain'
            }
        })

        const newMoon = await planet.createMoon({
            name: 'Luna',
            mass: 2
        })
        
        console.log(`${planet.name} has a moon: ${newMoon.name}`)

    } catch (err) {

    }

}


// remember to invoke
testDb()