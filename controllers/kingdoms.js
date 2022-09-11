const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req,res) => {
    db.kingdom.findAll()
    .then(kingdoms => {
        res.render('./kingdoms/index', { kingdoms: kingdoms})

    })
})

router.get('/:id', async (req,res) => {
    try {
        const kingdom = await db.kingdom.findOne({
            where: {kingdom_name: req.params.id},
            include:[db.organism]
        })
        res.render('./kingdoms/show', {kingdom: kingdom})
    } catch(error) {
        res.send('error sorry :)')
    }
})






module.exports = router