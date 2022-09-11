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
        const [organization, orgCreated] = await db.organization.findOrCreate(    // findOrCreate() to prevent duplicates
        {
            where:
            {
                // can be replaced with req.body.name, req.body.founded, etc. once form is made
                name: "Gen.G Esports",
                founded: "2017-08-11",
                location: "South Korea",
                abbreviation: "Gen.G"
            }
        });
        console.log("Unique entry:", orgCreated);
        res.redirect(`/organizations/${organization.id}`)    // redirect to detail page of org created or found
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
        res.json(await db.organization.findByPk(req.params.id));    // send json data of org found by primary key
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
        res.redirect(`/organizations/${organization.id}`);    // redirect to detail page of org updated
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
router.delete("/:id", async (req, res) =>
{
    try 
    {
        const organization = await db.organization.findByPk(req.params.id);
        await organization.destroy();
        res.redirect("/organizations");
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})

module.exports = router;