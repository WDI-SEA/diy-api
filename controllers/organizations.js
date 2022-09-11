const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", async (req, res) =>
{
    try 
    {
        const organizations = await db.organization.findAll();    // find all orgs in database
        res.json(organizations);    // send json data of all orgs found
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
router.post("/", async (req, res) =>
{
    try 
    {
        res.json(await db.organization.create(    // send json data of org created
        {
            // can be replaced with req.body.name, req.body.founded, etc. once form is made
            name: "Gen.G Esports",
            founded: "2017-08-11",
            location: "South Korea",
            abbreviation: "Gen.G"
        }));
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})

module.exports = router;