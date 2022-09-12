const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const db = require('./models')
const { defaults } = require("pg")
const methodOverride = require("method-override")

const app = express()
const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(ejsLayouts)
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.use("/players", require("./controllers/players"))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })