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


//PRODUCTS
// create products
let malmData = {
    name: 'MALM Dresser',
    color: 'Maple Wood' ,
    purpose: 'organization'
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
newProduct(malmData)