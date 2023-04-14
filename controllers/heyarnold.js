const express = require("express")
const router = express.Router()
const db = require("../models")

// http GET url localhost:3000/heyarnold
// INDEX OF ALL CHARACTERS
router.get("/", async (req, res) => {
    //res.send(test)
    const allCharacters = await db.thread.findAll({})
    res.send(allCharacters)
})

// http POST url localhost:8000/heyarnold
router.post("/", async (req, res) => {
    try {
        const character = await db.heyarnold.create({
            firstName: "Lila",
            lastName: "Sawyer",
            img_url: "https://static.wikia.nocookie.net/nickelodeon/images/b/bb/Arnold_smiling.jpg/revision/latest?cb=20150224084359",
            description: "Lila is, as Helga puts it, 'Little Miss Perfect'. She has a tendency to add the words 'ever so or 'oh so' to just about every sentence she speaks, and she's very polite, sweet, and kind. This leads her to bond quite easily with Olga, as the two have similar interests.",
        })
        res.send(character)
    }catch(err){
        console.log(err)
    }
})

// http GET url localhost:8000/heyarnold/:id
// READ ONE THREAD, SHOW ROUTE
router.get("/:id", async (req, res) => {
    try{
        const foundArnold = await db.heyarnold.findOne({
            where: {
                id: req.params.id
            }
        })
        res.send(foundArnold)
    }catch(err){
        console.log(err)
        
    }
})

module.exports = router