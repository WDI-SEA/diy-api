const express = require("express");
const db = require("../models");
const router = express.Router({mergeParams: true});

// GET /organizations/:orgId/teams
router.get("/", async (req, res) =>
{
    try 
    {
        const teams = await db.team.findAll(    // find all teams in db associatted with the org
        {
            where: {organizationId: req.params.orgId}
        })
        res.json(teams);
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
// GET /organizations/:orgId/teams/:teamId
router.get("/:teamId", async (req, res) =>
{
    try 
    {
        res.json(await db.team.findOne(
        {
            where:
            {
                id: req.params.teamId,
                organizationId: req.params.orgId
            }
        }))
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
// POST /organizations/:orgId/teams
router.post("/", async (req, res) =>
{
    try 
    {
        const [team, teamCreated] = await db.team.findOrCreate(
        {
            where:
            {
                name: req.body.name,
                created: req.body.created,
                region: req.body.region,
                organizationId: req.params.orgId
            },
            defaults:
            {
                winnings: req.body.winnings
            }
        });
        console.log("Unique entry:", teamCreated);
        res.redirect(`/organizations/${req.params.orgId}/teams/${team.id}`)    // redirect to detail page of team created or found
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})
// PUT /organizations/:orgId/teams/:teamId
router.put("/:teamId", async (req, res) =>
{
    try 
    {
        const team = await db.team.findOne(
        {
            where:
            {
                id: req.params.teamId,
                organizationId: req.params.orgId
            }
        });
        team.set(
        {
            name: req.body.name,
            created: req.body.created,
            region: req.body.region,
            winnings: req.body.winnings
        })
        await team.save();
        res.redirect(`/organizations/${req.params.orgId}/teams/${team.id}`);    // redirect to detail page of team updated
    } 
    catch (error) 
    {
        console.warn(error);
        res.send("server error");
    }
})

module.exports = router;