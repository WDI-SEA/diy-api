const express = require("express")
const db = require("../models")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const players = await db.player.findAll()
        res.render("players/favorites.ejs", { players })
    }catch(err) {
        console.log(err)
    }
})

router.get("/new", (req, res) => {
    res.render("players/new")
})

router.post("/", (req, res) => {
    
    db.player.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        picture: req.body.picture

    })
    .then((player) => {
        res.redirect("/players")
    })
    .catch((error) => {
        console.log(error)
    })
})

router.get("/:id", async (req, res) => {
    try {
        const onePlayer = await db.player.findOne({
            where: {id: req.params.id }
        })
        res.render("players/oneplayer.ejs", { player: onePlayer })
    }catch(err) {
        console.log(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const updatePlayer = await db.player.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            picture: req.body.picture
        }, {
            where: {id: req.params.id}
        })
        res.redirect("/players")
    } catch(err) {
        console.log(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deletePlayer = await db.player.destroy({
            where: { id: req.params.id }
        })
        res.redirect("/players")
    } catch(err) {
        console.log(err)
    }
})
module.exports = router