const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", (req, res) => {
    res.send("list all mlb teams")
})


// GET Team details
router.get("/:id", (req, res) => {
    res.send("team details")
})

//GET -- new team
router.get("/new", (req, res) => {
    res.send("create new team")
})

// POST -- Create new team
router.post("/", (req, res) => {
    res.send("create team and redirect to '/'")
})

router.put("/:id", (req, res) => {
    res.send("update team info")
})

router.delete("/:id", (req, res) => {
    res.send("delete team")
})


module.exports = router;