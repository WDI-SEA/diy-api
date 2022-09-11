const db = require('./models')

async function createRecipe() {
    try {
        await db.recipe.create({
            name: 'Hello',
            brewingdevice: 'Fellow Stagg',
            watertemp: 99,
            grinder: 'DF64',
            grindsetting: 45,
            groundcoffee: 22,
            description: 'testing'
        })
    } catch(err) {
        console.warn(err)
    }
}
createRecipe()