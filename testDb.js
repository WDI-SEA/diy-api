const db = require('./models')
const errorHandler = (error) => {
    console.log('🔥🔥🔥🔥🔥🔥🔥🔥')
    console.log(error)
}

// ---CREATE BEARER--- 
db.bearer.create({
    name: 'Isildur',
    type: 'King of Gondor',
    description: `chopped off Sauron's finger along with the One ring during the War of the Last Alliance but failed to destroy the ring due to being enamored by its beauty.`
}).then((bearerData) => {
    console.log('💍💍💍💍💍💍💍💍💍💍💍')
    console.log(bearerData)
}).catch(errorHandler)
