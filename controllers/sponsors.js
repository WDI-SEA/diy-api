const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", async (req, res) =>
{
    try 
    {
        res.json (await db.sponsor.findAll());    // find all sponsors in database and send as json data
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
router.get("/:sponsorId", async (req, res) =>
{
    try 
    {
        res.json(await db.sponsor.findByPk(req.params.sponsorId));    // send json data of sponsor found by primary key
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})

module.exports = router;