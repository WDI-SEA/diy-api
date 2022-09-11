const express = require("express");
const app = express();
const PORT = 3000;

// Controllers
app.use("/organizations", require("./controllers/organizations"));

// Routes
app.get("/", (req, res) =>
{
    res.send("esports api");
})

// Listen
app.listen(PORT, () =>
{
    console.log(`Express server running on port ${PORT}`);
})