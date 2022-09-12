const db = require("./models");

async function createGame() {
    const newGame = await db.game.create({
        title: 'Elden Ring',
        year: 2022,
        rating: 'M'
    })
    console.log(newGame)
}

// createGame()

async function createPlatform() {
    const [newPlatform] = await db.platform.findOrCreate({
        where: {name: 'PS5'},
        include: [db.game] })
    const game = await db.game.findByPk(2)
    newPlatform.addGame(game)
    console.log(newPlatform)
}

// createPlatform()