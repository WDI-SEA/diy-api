const db = require('./models');

// errorhandler from sarah
const errorHandler = error => {
    console.log('🤬🤬🤬🤬')
}

//ROOMS
// create a room
db.room.create({ 
    name: 'bedroom',
    color: 'Wood',
    purpose: 'sleep'
}).then(roomData => {
    console.log(`🌲🌲🌲`)
    console.log(roomData)
}).catch(errorHandler)

// find a room
db.room.findOne({
    where: {
        id: 1
    }
}).then(foundRoom => {
console.log(`🍂 Yo check out ${foundRoom.name} for the best ${foundRoom.purpose} of your life!🍂`)
}).catch(errorHandler)

// to find rooms 
db.room.findAll().then(room => {
room.forEach(room => console.log(`📍 Lets take a look at ${room.name}! 📍`))
}).catch(errorHandler)

// update a room
db.room.update({
    name: 'bathroom'
}, { 
    where: {
        purpose: 'hygiene'
    }
}).then(updated => {
    console.log(`✅✅`)
    console.log(updated)
}).catch(errorHandler)

// destroy/deletion of room
db.room.destroy({
    where: {
        color: 'neutral grey'
    }
}).then(delete => {
    console.log(`🦀🦀🦀`)
    console.log(delete)
}).catch(errorHandler)


//PRODUCTS
// create -- product 
db.product.create({ 
    name: 'MALM Dresser',
    color: 'Wood',
    purpose: 'organization'
}).then(productData => {
    console.log(`🦥🦥🦥`)
    console.log(productData)
}).catch(errorHandler)

// find product by Id
db.product.findOne({
    where: {
        id: 1
    }
}).then(foundProduct => {
    console.log(`🐣 Buy this ${foundProduct.name} for  ${foundProduct.purpose}! 🐣`)
}).catch(errorHandler)

// to find all products 
db.product.findAll().then(product => {
    product.forEach(product => console.log(`🐣 View ${product.name} for your furniture! 🐣`))
})

// update a product
db.product.update({
    name: 'Hemnes Lamp'
}, { 
    where: {
        color: 'Arctic White'
    }
}).then(updated => {
    console.log(`🌊🌊`)
    console.log(updated)
}).catch(errorHandler)

// destroy/deletion of product
db.product.destroy({
    where: {
        purpose: 'bedding'
    }
}).then(deleted => {
    console.log(`🦀🦀🦀`)
    console.log(deleted)
}).catch(errorHandler)
