const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", (req, res) => {
    // res.send("list all mlb teams")
    db.baseball.findAll()
    .then((baseballs) => {
        console.log(baseballs.team)
        res.render("baseball/index.ejs", { baseballs: baseballs })
    })
    .catch ((error) => {
        console.log(error)
    })
})
//GET -- new team
router.get("/new", (req, res) => {
    baseballs = db.baseball;
    res.render("baseball/new.ejs")
})


// GET Team details
router.get("/:id", (req, res) => {
    // res.send("team details")
    // console.log(req.params.id)
    teamId = req.params.id;
    db.baseball.findOne({
        where: { id: teamId }
    })
    .then((baseballs) => {
        console.log(baseballs.team)
        res.render("baseball/details.ejs", 
        {baseballs: baseballs})
    })
    .catch ((error) => {
        console.log(error)
    })
})


// POST -- Create new team
router.post("/", (req, res) => {
    // res.send("create team and redirect to '/'")
    console.log(req.body)
    db.baseball.create({
        team: req.body.team,
        league: req.body.league,
        location: req.body.location,
        championships: parseInt(req.body.championships)
    })
    res.redirect(`/baseball`)
})

router.put("/:id", async (req, res) => {
    console.log(req.body)
    await db.baseball.update({
        team: req.body.team,
        location: req.body.location,
        championships: parseInt(req.body.championships)
    }, {
        where: {id: req.body.id}
})
    // res.send("update team info")

})

router.delete("/:id", (req, res) => {
    res.send("delete team")
})


module.exports = router;