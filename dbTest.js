const db = require('./models')
async function test(){
try{
    const myCar = await db.car.create({
            make: 'Toyota',
            model: 'Corolla s',
            year: 2013

    })
} catch(error){
    console.log('mistakee')
}
}
test()