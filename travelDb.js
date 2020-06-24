const db = require('./models');

const errorHandler = error => {
    console.log('🔥 🔥 error');
}



// // CREATE  - sequelize uses promises so we use a .then // ALSO this puts it into the DB

// db.user.create({
//     firstName: 'Steve',
//     lastName: 'Peters',
//     age: 44,
//     email: 'stpets@bigdaddybezos.com'
// }).then(userData => {
//  // Now accress new user via userData variable
//  console.log('🌴 Welcome to the Jungle');
//  console.log(userData);
// }).catch(errorHandler);
// console.log('🎢 Adding that user was exhausting')

// //READ

//db.user.findByPk(10).then   // can be used to FIND 1 Item


// db.user.findOne({
//     where: {
//         id:1
//     }
// }).then(foundUser => {
//     // We have a user ! lets console.lo about it. 
//     console.log(`🍋 Hey there ${foundUser.firstName}! You are ${foundUser.age} years old`);
// }).catch(errorHandler);


// // Find and Create  - we use this is we do NOT have a unique ID:
// db.user.findOrCreate({
//     where: {
//         email: 'b.hague@ga.co'
//     },
//     defaults: {
//         firstName: 'Brian',
//         lastName: 'Hague'
//     }
// }).then(([user, created]) => {
//     console.log(`🌎🌎 ${user.firstName} was ${created ? 'created' : 'found'}!`);
// }).catch(errorHandler);

// Find all READ function ------//

// db.userfindAll().then(user => {
//     user.forEach(user => console.log(`Hey there ${user.firstName}!` ));
// }).catch(errorHandler);



//UPDATE - first peramiter is WHAT we want to update  2nd is 
// UPDATE users SET age = 99 WHERE email = 'hague@ga.co'; SQL STYLE

// db.user.update({
//     age: 99
// }, {
//     where: { 
//         email: 'b.hague@ga.co'
//      } 
//     }).then(update => {
//         console.log('👨‍💻')
//         // updated is a array of one value which is the # number of items updated
//         console.log(updated);
//     }).catch(errorHandler);


//DESTROY

// db.user.destroy({
//     where: {
//         firstName:'Brian'
//     }
// }).then(deleted => {
//     console.log('⛑');
//     // deleted is a Number of items deleted
//     console.log(deleted);
// }).catch(errorHandler).finally(() => {
//     // Anykind of clean up or other things
//     console.log('Dunskies !')
// });



/* -----------Adding PETS ------------------------------ */

// //createModel   --- This is standard form can update it to add more pets into the Data Base ! 
// db.user.findOne().then(user => {
//     user.createPet({
//         name:'Silly May',
//         species: 'Mini Aussie',
//         desciption: 'A big loaf of dog with different colored eyes'
//     }).then(pet => {
//         console.log(`🐕 Hello there ${pet.name}!`);
//     }).catch(errorHandler);
// }).catch(errorHandler);

//GetModel

// Get a user

// db.user.findOne().then(steve => {
//     // Get all the pets of the user
//     steve.getPets().then(pets => {
//         //Pets is an array
//         pets.forEach(pet => console.log(`🐕 ${pet.name} is a ${pet.species}`));
//     }).catch(errorHandler);
// }).catch(errorHandler);

// //setModel

// db.pet.findOrCreate({
//     where: {
//         name:'Simbuttbutt',
//         species: 'Ginger Cat'
//     },
//     defaults: {
//         description: 'Traumatised by an aussie, but very cute'
//     }
// }). then(([pet, created]) => {
//     db.user.findOne().then(user => {
//         user.addPet(pet);
//         console.log(` 🌲 User ${user.firstName} is the owner of ${pet.name}`);
//     }).catch(errorHandler);
// }).catch(errorHandler);



// include statement ------- how to include 1 to many  ( 1 to MANY )

db.user.findAll({
    include: [db.pet]
}).then(users => {
    // each user object will have key with an array of pets
    console.log(` 🏆 ${users[0].firstName} has ${users[0].pets.length} pets`);
}).catch(errorHandler);



//addModel

