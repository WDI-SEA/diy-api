const express = require("express");
const db = require("./models");
const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("HOOOOME");
})

//Hey LISTEN
app.listen(6000, () => console.log(`You're listening to the smooth sounds of port 6000`));