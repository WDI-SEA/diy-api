let express = require('express')
let db = require('../models')
let router = express.Router()

// GET /things -- READ all planets
router.get('/', async (req, res) => {
    try{
        const things = await db.thing.findAll({
            // include: [db.moon]
        })
        res.json({ things})
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'error'
        })
    }
})


// POST /things -- CREATE a thing
router.post('/', async (req, res) => {
    try{
        // assume the req.body, has all the things
        await db.thing.findOrCreate({
            where: req.body
        })
        
        res.redirect('/things')
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'error'
        })
    }
})

// get /things/:id -- READ one planet
router.get('/:id', async (req, res) => {
    try{
        const thing = await db.thing.findByPk(req.params.id)
        res.json({ thing })
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'error'
        })
    }
})


// PUT /things/:id -- UPDATE a thing
router.put('/:id', async (req, res) => {
    try{
        // assume that req.body has all my attributes
        await db.thing.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        res.redirect(`/things/${req.params.id}`)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'error'
        })
    }
})

// DELETE /things/:id -- destroy a thing
router.delete('/:id', async (req, res) => {
    try{
        await db.thing.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/things')
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'error'
        })
    }
})










// router.get('/', async (req, res) => {
//     try{
//         const things = await db.thing.findAll()
//         res.render('things/index', {things: things})
//     } catch(err) {
//         console.log(err)
//         res.status(500).send('owowow')
//     }
// })


// router.post('/new', async (req, res) => {
//     try{
//         const body = req.body
//      res.redirect('/')
//             console.log(body)
//     }catch(err) {
//         console.log(err)
//         res.status(500).send('ooof')
//     }
// })
// router.get('/new', async (req, res) => {
//     try {
//         res.render('things/new')
//     } catch(err) {
//         console.log(err)
//         res.status(500).send('ooowf')
//     }
// })


// router.post('/create', async (req, res) => {
//     try {
//         const newThing = await db.thing.create({
//             name: req.body.name,
//             age: req.body.age,
//             backstory: req.body.backstory,
//             reference: req.body.reference,
//             isyes: req.body.isyes,
//             image: req.body.image,
//             estimatedheight: req.body.estimatedheight
//         })
//         console.log(newThing)
//         res.redirect('/')
        
//     } catch(err) {
//         console.log(err)
//         res.status(500).send('ooof')
//     }
// })

// router.delete('/:id', async (req, res) => {
//     try {
//     const thingId = Number(req.params.id)
//     const things = await db.thing.delete({
//         where: {
//             id: thingId
//         }
//     })
//     console.log(things)
//     console.log(thingId)
//     res.render('things/index')
//     } catch(err) {
//         console.log(err)
//         res.status(500).send('ow')
//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         const thing = await db.thing.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.render('things/show', {thing: thing})
//     } catch(err) {
//         console.log(err)
//         res.status(500).send('owowowowo')
//     }
// })


module.exports = router