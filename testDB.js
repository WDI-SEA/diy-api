const db = require('./models');

const errorHandler = error => {
  console.log('YOU FAIL')
}

// db.user.findAll().then(users => {
//   users.forEach(user => console.log(`User ${user.name} exists`))
// })

db.user.findByPk(5).then(user => {
  user.createCandy({
    name: 'Skittles',
    description: 'tiny, delightful fruit-flavored sugar balls', 
    rating: 9
  }).then(candy => {
    console.log(`that was tough!`)
  }).catch(errorHandler);
}).catch(errorHandler)


//edit//
// db.user.update({
//   name: 'MilkyWay'
// }, {
//   where: {
//     email: 'mandms@chocolate.com'
//   }
// }).then(updated  => {
//   console.log(`${user.name} is updated`);
// }).catch(errorHandler);

