const db = require('./models')
const cars = require('./models/cars')

db.cars.create({
    name:'Honda Civic',
    color: 'Blue',
    year: 2009,
})
.then(cars => {
    console.log(cars.id)
})
.catch(console.log)