const express = require("express");
const db = require("./models");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use("/cards", require("./controllers/cards"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
