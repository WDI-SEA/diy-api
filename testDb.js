const db = require('./models')
// const express = require('express')
// const hero = require('./models/super');

const errorHandler = error => {
    console.log('💩💩💩💩💩💩💩💩💩');
    console.log(error);
}

// db.hero.create({
//     name: "Wolverine",
//     superpower: "Claws, Regeneration",
//     description: "Badass superhero who kicsk ass and lives forever"
// }).then(heroData => {
//     console.log(`🌎 the world is pretty cool`);
//     console.log(heroData)
// }).catch(errorHandler);


// db.hero.findOne({
//     where: {
//         id:3
//     }
// }).then(foundHero => {
//     console.log(`🤠 This is ${foundHero.name}! Their powers are ${foundHero.superpower}. Description: ${foundHero.description}`)
// }).catch(errorHandler);

// db.hero.findOrCreate({
//     where: {
//         name: 'Mystique'
//     },
//     defaults: {
//         superpower: 'Shapeshifting',
//         description: 'She can turn herself into any form and she can kick ass'
//     }
// }).then(([hero, created]) => {
//     console.log(`🌎${hero.name} was ${created ? 'created' : 'found'}!`)
// }).catch(errorHandler);

// db.hero.findAll().then(heros => {
//     heros.forEach(hero => console.log(`🌎 ${hero.name} will save the day!`))
// }).catch(errorHandler);



// db.hero.update({
//     description: "Badass superhero who kicks ass and lives forever"
// }, {
//     where: { name: 'Wolverine'}
// }).then(updated => {
//     console.log('🔍');

//     console.log(updated);
// }).catch(errorHandler);


// db.hero.destroy({
//     where: {
//         name: 'Wolverine'
//     }
// }).then(deleted => {
//     console.log('🎲');

//     console.log(deleted)
// }).catch(errorHandler).finally(() => {
//         //any kind of cleanup or other things.. can be used after any catch
//         console.log('Doneskies')
// })