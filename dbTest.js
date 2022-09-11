const db = require('./models')

const createCard = async () => {
    try {
        const newCard = await db.pokemoncard.create({
            name:'Volo',
            img_url:'https://den-cards.pokellector.com/350/Volo.SWSH10.211.44868.thumb.png',
            rarity:'Rainbow Rare'
        })
    }catch(err) {
        console.log(err)
    }
}

createCard()