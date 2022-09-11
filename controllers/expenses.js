let express = require('express')
let db = require('../models')
let router = express.Router()
//for PUT and DELETE
const methodOverride = require("method-override")
router.use(methodOverride("_method"))

router.post('/', async (req, res) => {
    try {
        const [merchant, merchantCreated] = await db.merchant.findOrCreate({
            where: {
                name: req.body.merchant
            }
        })
        const category = await db.category.findOne({
            where: {
                id: req.body.category
            }
        })
        await merchant.addCategory(category)
        const expense = await db.expense.create({
            date: req.body.date,
            merchantId: merchant.id,
            cost: req.body.cost,
            categoryId: req.body.category,
            description: req.body.description
        })
        res.redirect("/expenses")

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})

router.get('/', async (req, res) => {
    try {
        const expenses = await db.expense.findAll()
        const categories = await db.category.findAll()
        res.render("expenses/show.ejs", { expenses: expenses, categories:categories })

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})

router.get('/:id', async (req, res) => {
    try {
        const expense = await db.expense.findOne({
            where: {
                id: req.params.id
            }
        })
        const merchant = await db.merchant.findOne({
            where: {
                id: expense.merchantId
            }
        })
        const category = await db.category.findOne({
            where: {
                id: expense.categoryId
            }
        })
        res.render("expenses/detail.ejs", { expense: expense, category: category, merchant: merchant })

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})

router.get('/:id/edit', async (req, res) => {
    try {
        const expense = await db.expense.findOne({
            where: {
                id: req.params.id
            }
        })
        const merchant = await db.merchant.findOne({
            where: {
                id: expense.merchantId
            }
        })
        const category = await db.category.findOne({
            where: {
                id: expense.categoryId
            }
        })
        const categories = await db.category.findAll()
        res.render("expenses/edit.ejs", { expense: expense, category: category, merchant: merchant, categories: categories })

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})

router.put('/:id', async (req, res) => {
    try {
        const [merchant, merchantCreated] = await db.merchant.findOrCreate({
            where: {
                name: req.body.merchant
            }
        })
        const category = await db.category.findOne({
            where: {
                id: req.body.category
            }
        })
        await merchant.addCategory(category)
        const updateExpense = await db.expense.update({
            date: req.body.date,
            merchantId: merchant.id,
            categoryId: category.id,
            cost: req.body.cost,
            description: req.body.description
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect(`/expenses/${req.params.id}`)

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const numRowsDeleted = await db.expense.destroy({
            where: {
                id: req.params.id
            }
        })       
        res.redirect("/expenses")

    } catch (err) {
        console.log(err)
        res.send("server error")
    }
})



module.exports = router