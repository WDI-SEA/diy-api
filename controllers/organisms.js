const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/new', (req,res) => {
    res.render('organism/new')
})

router.post('/new', async (req, res) => {
    try {
        const kingdom = await db.kingdom.findOne({
            where: {
                id: req.body.id
             }
        })
        const newOrganism = await kingdom.createOrganism({
            common_name: req.body.cName,
            size: req.body.size,
            scientific_name: req.body.sName,
            kingdomId: req.body.id
        })
        res.redirect(`../kingdoms/${kingdom.kingdom_name}`)
    } catch(err) {
        console.log(err)
        res.send('Sorry, Server Issue')
    }
})




module.exports = router