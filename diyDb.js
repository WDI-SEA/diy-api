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
    prodName: 'MALM Dresser',
    color: 'Maple Wood' ,
    purpose: 'organization',
    roomId: 1
}

let brimnesData = {
    prodName: 'BRIMNES Bed',
    color: 'Neutral Grey' ,
    purpose: 'sleep',
    roomId: 1
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
newProduct(brimnesData)