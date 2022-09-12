let express = require('express')
let db = require('../models')
let router = express.Router()

router.get('/', async (req, res) => {
    const movies = await db.movie.findAll();
    res.json(movies);
})
router.post('/', async (req, res) => {
    await db.movie.create({
        title: req.body.title,
        year: req.body.year  
    });
    res.redirect('/');
})
router.get('/:id', async (req, res) => {
    const movie = await db.movie.findOne({
        where: {
            id : req.params.id
        },
        include: [db.image, db.genre]
    });
    // console.log(movie.image)
    res.json(movie);
})
router.put('/:id', async (req, res) => {
    await db.movie.update({
        title: req.body.title,
        year: req.body.year
    },{
        where: {
            id : req.params.id
        }
    });
    res.redirect('/');
})

router.delete('/:id', async (req, res) => {
    await db.movie.destroy({
        where: {
            id : req.params.id
        }
    });
    res.redirect('/');
})
module.exports = router