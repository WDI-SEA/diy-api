const db = require("./models");

const errHandler = (err) => {
  console.log('⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️')
  console.log(err)
  console.l0g('⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️')
}

// CREATE TRAINER
// db.trainer.create({
//   name: "Brock",
//   gender: "Male",
//   favoritePokemon: 'Onyx'
// }).then((trainerData) => {
//   console.log('🌎 Welcome to the world of pokemon 🌎');
//   console.log(trainerData);
// }).catch(errHandler)

// READ
// db.trainer.findOne({
//   where: {
//     id: 3,
//   }
// }).then(userData => {
//   console.log("👀👀👀 Finding user 👀👀👀")
//   console.log(userData)
// }).catch(errHandler)

// FIND ALL
// db.trainer.findAll().then((trainers) => {
//   trainers.forEach((trainer) => console.log(`👀 Hey there ${trainer.name}!`));
// }).catch(errHandler);

// UPDATE
// db.trainer.update({
//   id: 3,
// },
// {
//   where: {
//     name: "Brock",
//   },
// }).then((updated) => {
//   console.log("👻");
//   console.log(updated);
// }).catch(errHandler);

// DELETE
// db.pokemon.destroy({
//   where: {
//     trainerId: 1,
//     name: 'Starmie'
//   },
// }).then((deleted) => {
//   console.log("👽👽");
//   // Number of items deleted
//   console.log(deleted);
// }).catch(errHandler);

// ADDING POKEMON
// db.trainer.findOne({
//   where: {
//     id: 2
//   }
// }).then((trainer) => {
//   trainer.createPokemon({
//     id: 6,
//     name: "Starmie",
//     type: "Water",
//     weakAgainst: "Electric",
//     trainerId: 2
//   }).then((pokemon) => {
//       console.log(`🐱🐱 Hello ${pokemon.name}! 🐱🐱`);
//   }).catch(errHandler);
// }).catch(errHandler);

// getModels
// find user
// db.trainer.findOne({
//   where: {
//     id: 1
//   }
// }).then((ash) => {
//   // Get all pets of the trainer
//   ash.getPokemons().then((pokemons) => {
//     // pokemons is an array
//     pokemons.forEach((pokemon) => console.log(`🐱🐱 ${pokemon.name} is a(n) ${pokemon.type} type`));
//   }).catch(errHandler);
// }).catch(errHandler);

// setModel
// db.pokemon.findOrCreate({
// //   where: {
// //       name: 'Starmie'
// //   }
// // }).then(([pokemon, created]) => {
// //   db.trainer.findOne().then(trainer => {
// //       trainer.addPokemon(pokemon);
// //       console.log(`🙎🏼‍♂️🙎🏼‍♂ Trainer ${trainer.name} is the owner of ${pokemon.name}`)
// //   }).catch(errHandler)
// // }).catch(errHandler)

// db.trainer.findAll({
//   include: [db.pokemon]
// }).then(trainers => {
//   // each trainer object will have a pokemons key with an array of pokemons
//   trainers.forEach(trainer => console.log(`🐱🐶 ${trainer.name} has ${trainer.pokemons.length} pokemon`))
//   // console.log(`🐱🐶 ${trainers[2].name} has ${trainers[2].pokemons.length} pokemon`)
// }).catch(errHandler)