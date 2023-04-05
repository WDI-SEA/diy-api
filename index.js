const express = require("express");
const app = express();
const PORT = 3300;
app.set("view enginer", "ejs")
app.use(express.urlencoded({ extended: false })) // what does this do again?
app.use(express.static(__dirname +"/public/"))


// ROUTES

//GET "/" -- homepage, list all sports
app.get("/", (req,res) => {
    // res.send("This page should list all sport leagues")
    res.render("index.ejs")
})

// CONTROLLERS
app.use('/baseball', require('./controllers/baseball'));


app.listen(PORT, () => {
    console.log(`It's a great day for baseball on port ${PORT} ⚾️`)
})


