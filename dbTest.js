let express = require('express')
const db = require('./models')

async function makeDrink (nameInput,alcoholInput,mixerInput,alcoholPercent ) {
    try {
        await db.cocktail.create({
            name: nameInput,
            alcoholType: alcoholInput,
            mixer:mixerInput,
            alcohol: alcoholPercent
    })
    } catch (error) {
        console.log(error)
    }
}

makeDrink()

