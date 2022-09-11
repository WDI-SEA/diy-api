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

module.exports = router;