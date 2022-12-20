const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
    try {
        const allMotorcyles = await db.motorcycle.findAll()
        res.send(allMotorcyles)
    } catch (err) {
        console.log('that\'s a no', err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newMotorcycle = await db.motorcycle.findOrCreate({
            where: {
                make: 'honda',
                model: 'fury',
                year: 2020,
                type: 'crusier',
                color: 'blue'
            },
            default: {
                make: 'honda',
                model: 'fury',
                year: 2020,
                type: 'crusier',
                color: 'blue'
            }
        })
        res.send(newMotorcycle)
    } catch (err) {
        console.log('that\'s a no', err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const detailMotorcycle = await db.motorcycle.findByPk(req.params.id)
        res.send(detailMotorcycle)
    } catch (err) {
        console.log('that\'s a no', err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const changeMotorcycle = await db.motorcycle.findByPk(req.params.id)
        changeMotorcycle.set({
            make: 'bmw',
            model: 's 1000 rr',
            year: 2019,
            type: 'sport',
            color: 'yellow'
        })
        await changeMotorcycle.save()
        res.send(changeMotorcycle)
    } catch {
        console.log('that\'s a no', err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteMotorcycle = await db.motorcycle.findByPk(req.params.id)
        deleteMotorcycle.destroy()
        res.send('deleted')
    } catch {
        console.log('that\'s a no', err)
    }
})

module.exports = router;