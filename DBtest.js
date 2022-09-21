const db = require('./models')

//db.dino.sequelizeMethod()
const schoolCRUD = async () => {
    try {
        const newSchool = await db.school.create({
            schoolName: 'East High Scool'
        }) 
        console.log(newSchool)
    } catch(err) {
        console.warn(err)
    }
}
//dont forget to invoke
schoolCRUD()