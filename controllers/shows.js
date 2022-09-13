const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', async (req, res) => {
    try {
        const allShows = db.show.find()
        res.send(allShows)
    } catch(err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newShow = req.body
        const createdShow = await db.show.create({
            title: newShow.title,
            description: newShow.description,
            spooky: newShow.spooky,
            watched: newShow.watched
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id', (req, res) => {
    res.send('this i the show detail')
})

router.put('/:id', (req, res) => {
    res.send('this i the show detail')
})

router.put('/:id', async (req, res) => {
    try {
        const showToEdit = await db.show.findOne({
            where: {
                id: req.params.id
            }
        })
        const newData = req.body
        const changedShow = await showToEdit.update(newData)
        res.send(changedShow)
    } catch(err) {
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const showToDetele = await db.show.destroy({
            where: {
                id: req.params.body
            }
        })
    } catch(err) {
        console.log(err)
    }
})

module.exports = router