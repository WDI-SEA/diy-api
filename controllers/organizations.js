const express = require("express");
const db = require("../models");
const router = express.Router();

router.use("/:orgId/teams", require("./teams"));

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
router.get("/:orgId", async (req, res) =>
{
    try 
    {
        res.json(await db.organization.findByPk(req.params.orgId));    // send json data of org found by primary key
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
router.get("/:orgId/sponsors", async (req, res) =>
{
    try 
    {
        const organization = await db.organization.findOne(
        {
            where:
            {
                id: req.params.orgId
            },
            include: [db.sponsor]
        })
        res.json(organization.sponsors);    // send json data of all sponsors under this org
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
                name: req.body.name,                   // e.g. "Gen.G Esports"
                founded: req.body.founded,             // e.g. "2017-08-11"
                location: req.body.location,           // e.g. "South Korea"
                abbreviation: req.body.abbreviation    // e.g. "Gen.G"
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
router.post("/:orgId/sponsors", async (req, res) =>
{
    try 
    {
        const [sponsor, sponsorCreated] = await db.sponsor.findOrCreate(
        {
            where:
            {
                name: req.body.name,
                founded: req.body.founded,
                headquarters: req.body.headquarters,
                revenue: req.body.revenue
            }
        });
        console.log("Unique entry:", sponsorCreated);
        const organization = await db.organization.findByPk(req.params.orgId);
        await organization.addSponsor(sponsor);
        res.redirect(`/organizations/${organization.id}/sponsors`)    // redirect to all sponsors under this org
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
router.put("/:orgId", async (req, res) =>
{
    try 
    {
        const organization = await db.organization.findByPk(req.params.orgId);
        organization.set(
        {
            name: req.body.name,                   // e.g. "Cloud9"
            founded: req.body.founded,             // e.g. "2013-01-08"
            location: req.body.location,           // e.g. "United States"
            abbreviation: req.body.abbreviation    // e.g. "C9"
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
router.delete("/:orgId", async (req, res) =>
{
    try 
    {
        const organization = await db.organization.findByPk(req.params.orgId);
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