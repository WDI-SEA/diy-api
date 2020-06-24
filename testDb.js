const db = require('./models')
const errorHandler = (error) => {
    console.log('🔥🔥🔥🔥🔥🔥🔥🔥')
    console.log(error)
}

// ---CREATE--- 
// db.bearer.create({
//     name: 'Tom Bombadil',
//     type: 'Hobbit',
//     description: `Tom Bombadil is a special case in that while he held the ring for a time he was not affected by its powers (nor was he blind to Frodo wearing it). Additionally, he only held it for a minute. Gandalf also handles the Ring very briefly, on at least three different occasions.`
// }).then((bearerData) => {
//     console.log('💍💍💍💍💍💍💍💍💍💍💍')
//     console.log(bearerData)
// }).catch(errorHandler)

// ---READ---
// db.bearer.findOne({
//     where: {
//         id: 1,
//     }
// }).then(foundBearer => {
//     // We hav a bearer! Let's console.log about it
//     console.log(`🍋 Hey there ${foundBearer.firstName}! You are ${foundBearer.age} years old`)
// }).catch(errorHandler)

// ---UPDATE---
// db.bearer.update(
//     { 
//         description: "A well respected and powerful wizard who understood the dangers that came along with bearing the One ring.  Gandalf helped both, Bilbo and Frodo Baggins, to handle the pressure of bearing and destroying it." 
//     }, { 
//         where: 
//         { 
//             id: 6,
//         } 
//     }
// ).then( updated => {
//     console.log(`👑👑👑👑👑👑👑👑👑👑👑👑👑`)
//     // updated is an array of one value which is the number of items updated
//     console.log(updated)
// }).catch(errorHandler)


// ---DESTROY---
// db.bearer.destroy({
//     where: {
//         name: 'Tom Bombadil'
//     }
// }).then( deleted => {
//     console.log('⛑⛑⛑⛑⛑⛑⛑⛑⛑⛑⛑⛑⛑')
//     // deleted is a Number of items deleted
//     console.log(deleted)
// }).catch(errorHandler).finally( () => {
//     console.log(`DONEZO's`)
// })
