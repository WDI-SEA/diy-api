const express = require("express");
const router = express.Router({mergeParams: true});

// GET /organizations/:id/teams
router.get("/", (req, res) =>
{
    res.send(`teams under org id ${req.params.id}`);
})

module.exports = router;