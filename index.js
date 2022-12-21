const express = require("express")

const app = express()
const PORT = 8001

// request body parsing
app.use(express.urlencoded({ extended: false}))
// DO NOT NEED method override
// thunder client won't need method override

// ROUTES
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the ultimate beer API"
    })
})

app.use("/brewers", require("./controllers/brewers.js")) 

// listen
app.listen(PORT, () => {
    console.log(`You're listening to smooth jazz ${PORT}`)
})