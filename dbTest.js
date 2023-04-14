const db = require("./models")

// const characterCrud = async () => {
//     try {
//         // CREATE
//         const character = await db.heyarnold.create({
//             firstName: "Lila",
//             lastName: "Sawyer",
//             img_url: "https://static.wikia.nocookie.net/nickelodeon/images/b/bb/Arnold_smiling.jpg/revision/latest?cb=20150224084359",
//             description: "Lila is, as Helga puts it, 'Little Miss Perfect'. She has a tendency to add the words 'ever so or 'oh so' to just about every sentence she speaks, and she's very polite, sweet, and kind. This leads her to bond quite easily with Olga, as the two have similar interests.",
//         })
//     } catch(err) {
//         console.log(err)
//     }
// }
// characterCrud()


// const read = async () => {
//     try {
//         const foundArnold = await db.heyarnold.findOrCreate({
//             where: {
//                 firstName: "Arnold"
//             },
//             defaults: {
//                 lastName:"" , 
//             }
//         })
//         console.log("FIND OR CREATE")
//     }catch(err) {
//         console.log(err)
//     }
// }
// read()

// const update = async () => {
//     try {
//         const updatedCharacter = await db.heyarnold.update({
//             img_url: ""
//         },
//         {
//             where: {
//                 firstName: "Helga"
//             }
//         },
//         )
//         console.log(updatedCharacter)
//     } catch(err) {
//         console.log(err)
//     }
// }
// update()

const destroy = async () => {
    try {
        await db.heyarnold.destroy({
            where: {
                id: 8
            }
        })
    } catch(err){
        console.log(err)
    }
}
destroy()