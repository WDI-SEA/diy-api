const db = require('./models')

const errorHandler = error => {
    console.log(error)
}

db.friend.create({
    firstName: 'first',
    lastName: 'friend',
    age: 25
}).then(data => {
    console.log(data)
}).catch(errorHandler)