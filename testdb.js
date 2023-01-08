const db = require('./models')

const testDb = async () => {
    try {
        // create a cat
        const [animal, created] = await db.animal.findOrCreate({
            where: {
                breed: 'Maine Coon'
            },
            defaults: {
                species: 'Domestic cat',
                scientific_name: 'Felis catus',
                origin: 'Maine, United States'
            }
        })
       
    } catch(err) {

    }
}

testDb()
