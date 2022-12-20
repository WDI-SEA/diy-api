const db = require('./models')


//---CREATE--- 
async function makeCocktail(nameInput, alcoholInput, mixerInput, alcoholPercent) {
    try{
        let foundCocktail = await db.cocktail.findOrCreate({
            where: {
                name: nameInput,
                alcoholType: alcoholInput,
                mixer: mixerInput,
                alcohol: alcoholPercent
            }
        })
    } catch(error){
        console.log(error)
    }   
}
// makeCocktail()

//---READ---
// async function getAllCocktails() {
//     try{

//     }catch(error){
//         console.log(error)
//     }
// }

//---UPDATE---

//---DELETE---