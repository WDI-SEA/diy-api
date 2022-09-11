const db = require("./models");

async function createGame() {
    const newGame = await db.game.create({
        title: 'Elden Ring',
        year: 2022,
        rating: 'M'
    })
    console.log(newGame)
}

createGame()