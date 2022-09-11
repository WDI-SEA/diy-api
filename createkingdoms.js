const db = require('./models')

async function createKingdom() {
    try {
        const newKingdom = await db.kingdom.create({
            kingdom_name: 'Viruses',
            traits: 'Not living, biological machines of war. My favorite',
            known_species: null
        })
    } catch(err) {
        console.log(err)
    }
}

// createKingdom()
