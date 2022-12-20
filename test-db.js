const db = require('./models')

const addMotorcycle = async () => {
    try {
        const newMotorcycle = await db.motorcycle.create({
            make: 'harley davidson',
            model: 'road king',
            year: 2018,
            type: 'touring',
            color: 'crimson'
        })
        console.log(newMotorcycle)
    } catch (err) {
        
    }
}

// addMotorcycle()