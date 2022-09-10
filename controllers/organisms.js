const express = require('express')
const router = express.Router()



router.get('/new', (req,res) => {
    res.render('organism/new')
})

router.post('/organisms/new', async (req, res) => {
    try {
        await db.organism.create({
            common_name: req.body.cName,
            size: req.body.size,
            scientific_name: req.body.sName,
            kingdomId: req.body.id

        })
    } catch(err) {
        console.log(err)
        res.send('Sorry, Server Issue')
    }
})




module.exports = router