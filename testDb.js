const db = require('./models');
const errorHandler = error => {
    console.log('🔥🔥🔥🔥🔥🔥')
    console.log(error)
}

db.game.create({
    name: 'Dota',
    description: 'Multiplayer online battle arena',
    quantity: 1,
}).then(gameData => {
    //Now access new user via userData variable
    console.log('🌴 Welcome to the jungle');
    console.log(gameData);
}).catch(errorHandler)
