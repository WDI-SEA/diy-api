const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: false}));

// Controllers
app.use("/organizations", require("./controllers/organizations"));

// Routes
app.get("/", (req, res) =>
{
    res.render("main/index.ejs");
})

// Listen
app.listen(PORT, () =>
{
    console.log(`Express server running on port ${PORT}`);
})