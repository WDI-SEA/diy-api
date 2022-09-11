const db = require('./models')

const create = async () => {
    try {
        await db.character.create({
        name: 'Elena Gilbert',
        season: '1-6, 8',
        description: 'Was a sweet human dating the good salvatore, then she became an undead blood vaccum, stopped caring about right and wrong...started daing the bed one',
        type: 'doppelganger, vampire and now human',
        img_icon:'https://i.pinimg.com/originals/5e/ff/dd/5effddb5f41890b720452104b6d9205f.jpg'
     })
    }catch (err) {
        console.log(err)
    }
 }
create()
const upDate = async () => {
    try {
       await db.character.update({ img_icon: 'https://i.pinimg.com/originals/a2/56/e2/a256e2e1b71e3343323ded4c0f44222d.jpg' }, {
           where: {
                 id: 1
                 }
        })  
     } catch (err) {
         console.log(err)
     }
 }
// upDate()
const destroy = async () => {
    try {
        await db.character.destroy({
            where: {
                id: 2
            }
        }) 
    } catch (err) {
        console.log(err)
    }
}
// destroy()