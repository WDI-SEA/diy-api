const db = require('./models')
const room = require('./models/room')
const product = require('./models/product')

//ROOMS
// create rooms
let bedRoomData = {
    name: 'bedroom',
    color: 'Arctic White',
    purpose: 'sleep'
}
  
let livingRoomData = {
    name: 'living room',
    color: 'Wood',
    purpose: 'lounging'
}
  
let kitchenData = {
    name: 'kitchen',
    color: 'Maple Marble',
    purpose: 'cooking'
}


//PRODUCTS
// create products
let malmData = {
    name: 'MALM Dresser',
    color: 'Maple Wood' ,
    purpose: 'organization'
}
  
let brimnesData = {
    name: 'BRIMNES Bed',
    color: 'neutral grey' ,
    purpose: 'sleep'
}
  
let godmorgonData = {
    name: 'GODMORGON Toilet',
    color: 'Artic White' ,
    purpose: 'hygiene'
}

//function to make new rooms & products
function newRoom(createData){
    db.room.create(createData)
    .then(roomData => { 
      console.log(`🌊${roomData}`)
    })
}

function newProduct(createData){
    db.product.create(createData)
    .then(productData => { 
      console.log(`🌊${productData}`)
    })
}

// call the functions
newRoom(bedRoomData)
newRoom(livingRoomData)
newRoom(kitchenData)
newProduct(malmData)
newProduct(brimnesData)
newProduct(godmorgonData)