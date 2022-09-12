let express = require('express')
let db = require('../models')
let router = express.Router()

router.post('/', async (req, res) => {
    await db.image.create({
        url: req.body.url, 
    });
    res.redirect('/');
})

router.put('/:id', async (req, res) => {
    await db.image.update({
        url: req.body.url,

    },{
        where: {
            id : req.params.id
        }
    });
    res.redirect('/movies');
})
router.delete('/:id', async (req, res) => {
    await db.image.destroy({
        where: {
            id : req.params.id
        }
    });
    res.redirect('/movies');
})

module.exports = router