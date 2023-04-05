const express = require("express")
const router = express.Router()

const db = require("../models")


// http GET url localhost:8000/thread
// INDEX OF ALL THREADS
router.get("/", async (req, res) => {
    // res.send("test")
    const allThreads = await db.thread.findAll({})
    res.send(allThreads)
})

// http POST url localhost:8000/thread
// CREATE ONE THREAD
router.post("/", async (req, res) => {
    try {
        const newThread = await db.thread.create(req.body)
        res.send(newThread)
    } catch(err) {
        console.warn(err)
    }
})

// http GET url localhost:8000/thread/:id
// READ ONE THREAD, SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        const foundThread = await db.thread.findOne({
            where: {
                id: req.params.id
            }
        })
        res.send(foundThread)
    } catch(err) {
        console.warn(err)
    }
})

// http PUT url localhost:8000/thread/:id
// UPDATE ONE THREAD
router.put("/:id", async (req, res) => {
    try {
        const updatedThread = await db.thread.update(
            {
                content: "KILLER"
            },
            {where: {
                id: req.params.id
                }
            }
        )
        res.send(updatedThread)
    } catch (err) {
        console.warn(err)
    }
})

// http DELETE url localhost:8000/thread/:id
// DESTROY ONE THREAD
router.delete("/:idTaco", async (req,res) => {
    try {
        await db.thread.destroy({
            where: {
                id: req.params.idTaco
            }
        })
        res.send("IT WAS earased")
    } catch(err) {
        console.warn(err)
    }
})

module.exports = router