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
// create()
const upDate = async () => {
    try {
       await db.character.update({ img_icon: 'https://qph.cf2.quoracdn.net/main-qimg-f2d85ff885707f4d71da531618d7a871-lq' }, {
           where: {
                 id: 4
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