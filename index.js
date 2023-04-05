const express = require("express")
const app = express()

const PORT = 8000

app.use("/thread", require("./controllers/thread"))

app.listen(PORT, () => {
    console.log(`making threads on port ${PORT}`)
})