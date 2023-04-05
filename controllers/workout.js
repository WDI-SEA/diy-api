const express = require("express")
const router = express.Router()
const db = require("../models")

router.get("/", async (req,res) => {
    const allWorkouts = await db.workout.findAll({})
    res.send(allWorkouts)

})

router.post("/", async (req, res) => {
    try{
        const newWorkout = await db.workout.create({
            title: "At Homeworkouts",
            user:"tom",
            content:["10 jumping jacks", "10 push-ups"]
            
        })
        res.send(newWorkout)

    } catch(err){

    }
})




module.exports = router