let express = require('express')
let db = require('../models')
let router = express.Router()

router.get('/', async (req, res) => {
    try {
        const categories = await db.category.findAll()
        res.render("categories/show.ejs", { categories: categories })

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})

router.post('/', async (req, res) => {
    try {
        const [category, categoryCreated] = await db.category.findOrCreate({
            where: {
                name: req.body.name,
                budget: req.body.budget
            }
        })
        res.redirect("/categories")

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})


module.exports = router