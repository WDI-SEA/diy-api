const db = require('./models')
async function makeDrink(){
    try {
        await db.cocktail.create({
            name:"long island", 
            alcoholType: "all", 
            mixer: "coke", 
            alcohol:90
        })
        
    } catch (error) {
        console.log(error)
    }
}

makeDrink()