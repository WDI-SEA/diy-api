const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
    res.render('./kingdoms/index')
})

router.get('/:id', (req,res) => {
    res.render('./kingdoms/show', {
        title: req.params.id
    })
})






module.exports = router