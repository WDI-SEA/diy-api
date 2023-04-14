const express = require("express")
const app = express()
const db = require("./models")

const PORT = 8000




app.get("/", (req, res) => {
    res.send("you have reached the home route")
})





app.listen(PORT, () => {
    console.log(`rEStfUl is working on port ${PORT}`)
})