const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/homevalues", require("./controllers/homevalues"))

app.get("/", (req, res) => {
  res.send("Welcome to the Home Value API");
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

