const express = require("express")
const db = require("../models")

const router = express.Router()

// mount routes on the router

// GET /brewers -- READ all breweries
router.get("/", async (req, res) => {
    try {
        // find all breweries in db
        const brewers = await db.brewer.findAll()
        // short hand instead of res.json ({ breweries: breweries })
        res.json({ brewers })
    } catch (err) {
        console.log(err)
    }
})

// POST /planets -- CREATE a brewery
router.post("/", async (req, res) => {
    try {
        // assume req.body has 
        await db.brewer.create(req.body)
        res.redirect("/brewers") 
       
    } catch (err) {
        console.log(err)
    }
})

// GET /brewers/:id -- READ one brewery
router.get("/", async (req, res) => {
    try {
        const brewer = await db.brewer.findbyPK(req.params.id, {
            include: [db.beer]
        })
        res.json({ brewer })
    } catch (err) {
        console.log(err)
    }
})

// PUT /breweries/:id -- UPDATE a brewery 
router.put("/", async (req, res) => {
    try {
        res.json({
            message: "update with id of" + req.params.id
        })
    } catch (err) {
        console.log(err)
    }
})

// POST /breweries/:id/beers -- CREATE a beer
router.post("/", async (req, res) => {
    try {
        res.json({
            message: "create beer" + req.params.id 
        })
    } catch (err) {
        console.log(err)
    }
})

// export the router
module.exports = router 