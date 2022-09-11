const express = require('express')
const router = express.Router()



router.get('/new', (req,res) => {
    res.render('organism/new')
})

router.post('/organisms/new', async (req, res) => {
    try {
        db.kingdom.find({
            where: {
                id: req.body.id
             }
        })
    } catch(err) {
        console.log(err)
        res.send('Sorry, Server Issue')
    }
})




module.exports = router