const db = require("./models")

const testDb = async () => {
    try {
        // create a planet
        const [planet, created] = await db.planet.findOrCreate({
            where: {
                name: "Earth"
            }
            defaults: {
                mass: 123,
                type: "type" 
            }
        })
        // add a moon to the planet
        const newMoon = await planet.createMoon({
            name: "Luna",
            mass: 12
        })

        //console.log(`${planet.name} has a moon: ${newMoon.name}`)
    } catch (err) {
        console.log(err) 
    }
}
testDb() 