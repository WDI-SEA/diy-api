const db = require("./models")

const addGuns = async ()=>{
    // const gun = await db.gun.create({
    //     id:1,
    //     name:"Odin",
    //     type:"Heavy Weapons",
    //     video:"https://media.valorant-api.com/streamedvideos/VALskinpreview_Alien_Odin_02.mp4"
    // })
    const gun2 = await db.gun.create({
        id:2,
        name:"Ares",
        type:"Heavy Weapons",
        video:"https://media.valorant-api.com/streamedvideos/VALskinpreview_Doodlebuds_Ares_02_chroma_01.mp4"
    })
    const gun3 = await db.gun.create({
        id:3,
        name:"Vandal",
        type:"Assault Rifles",
        video:"https://media.valorant-api.com/streamedvideos/VALskinpreview_Afterglow_Vandal_05_chroma_01.mp4"
    })
}

// addGuns()