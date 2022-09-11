const db = require("./models");

async function createDriver() {
    const newGame = await db.driver.create({
        name: 'Daniel Ricciardo',
        teams: 'McLaren',
        age: 33,
        titles: 8,
    })
    console.log(newGame)
}

createDriver()