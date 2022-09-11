const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", async (req, res) =>
{
    try 
    {
        res.json(await db.organization.findAll());    // find all orgs in database and send as json data
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
router.get("/:id", async (req, res) =>
{
    try 
    {
        res.json(await db.organization.findByPk(req.params.id));    // find org by primary key
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
router.put("/:id", async (req, res) =>
{
    try 
    {
        const organization = await db.organization.findByPk(req.params.id);
        organization.set(
        {
            // can be replaced with req.body.name, req.body.founded, etc. once form is made
            name: "Cloud9",
            founded: "2013-01-08",
            location: "United States",
            abbreviation: "C9"
        })
        await organization.save();
        res.json(organization);
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})

module.exports = router;