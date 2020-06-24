const db = require('./models');

const errorHandler = err => {
  console.log('YOU FAIL')
}

// db.user.findAll().then(users => {
//   users.forEach(user => console.log(`User ${user.name} exists`))
// })

db.user.findOrCreate({
  where: {
    email: 'sweet@sour.com'
  }, 
  defaults: {
    name: 'Star Burst', 
    age: 28
  }
}).then(([user, created]) => {
  console.log(`${user.name} was ${created? 'created' : 'found'}!`)
}).catch(errorHandler);

//edit//
db.user.update({
  name: 'MilkyWay'
}, {
  where: {
    email: 'mandms@chocolate.com'
  }
}).then(updated  => {
  console.log(`${user.name} is updated`);
}).catch(errorHandler);