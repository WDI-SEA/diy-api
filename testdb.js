const db = require('./models')

// db queires are asycronous, so we use async/await (.then also works)
const sportsCrud = async () => {
    try {
        // // CREATE 
        const newTeam = await db.baseball.create({
            team: 'Colorado Rockies',
            league: 'Major League Baseball',
            location: "Denver, Colorado",
            championships: 0
        })
        // const teamUpdate = await db.baseball.update({ team: 'San Francisco Giants' }, {
        //     where: {
        //         location: 'San Francisco, California'
        //     }
        // })
    } catch (err) {
        console.log(err)
    }
}
sportsCrud()