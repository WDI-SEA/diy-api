const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    const allBeans = await db.bean.findAll()
    res.render('beans/show', { allBeans: allBeans })
})

// Create
router.get('/new', async (req, res) => {
    res.render('beans/new')
})

router.post('/new', async (req, res) => {
    try {
        const [bean, beanCreated] = await db.bean.findOrCreate({
            where: {
                name: req.body.name,
                country: req.body.country,
                region: req.body.region,
                roastlevel: req.body.roastlevel
            }
        })

        const aRecipe = await db.recipe.findOne({
            where: {
                name: req.body.recipeName
            }
        })
        res.redirect('/beans')
        await aRecipe.addBean(bean)
        
    } catch(err) {
        console.warn(err)
    }
})

// Read
router.get('/:id', async (req, res) => {
    try {
        const aBean = await db.bean.findOne({
            where: {
                id: req.params.id
            }   
        })
        res.render('beans/showOne', {aBean: aBean})
    } catch(err) {
        console.warn(err)
    }
})

// Update
router.get('/:id/edit', async (req, res) => {
    try {
        const aBean = await db.bean.findOne({
            where: {
                id: req.params.id
            }
        })
        res.render('beans/edit', {aBean: aBean})
    } catch(err) {
        console.log(err)
        res.render('error')
    }
})

router.put('/:id', async (req, res) => {
    try {
        await db.bean.update({
            name: req.body.name,
            country: req.body.country,
            region: req.body.region,
            roastlevel: req.body.roastlevel
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/beans')
    } catch(err) {
        console.log(err)
        res.render('error')
    }
})

// Destroy
router.delete('/:id', async (req, res) => {
    try {
        await db.bean.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/beans')
    } catch(err) {
        console.warn(err)
    }
})

module.exports = router