let express = require('express')
let db = require('../models')
let router = express.Router()

router.post('/', async (req, res) => {
    await db.genre.create({
        name: req.body.name, 
    });
    res.redirect('/');
})

router.put('/:id', async (req, res) => {
    await db.genre.update({
        url: req.body.name,

    },{
        where: {
            id : req.params.id
        }
    });
    res.redirect('/movies');
})
router.delete('/:id', async (req, res) => {
    await db.genre.destroy({
        where: {
            id : req.params.id
        }
    });
    res.redirect('/movies');
})

module.exports = router