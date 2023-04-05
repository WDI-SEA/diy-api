let express = require("express");
let db = require("../models");
let router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allCards = await db.card.findAll();
    res.send(allCards);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    await db.card.create({
      name: req.body.name,
      energy: req.body.energy,
      power: req.body.power,
      text: req.body.text,
    });
    res.send("card added!");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let foundCard = await db.card.findOne({
      where: { id },
    });
    if (!foundCard) throw Error();
    res.send(foundCard);
  } catch (error) {
    console.log(error);
    res.status(404).send("Card not found in database");
  }
});

router.put("/:id", async (req, res) => {
  try {
    await db.card.update(
      {
        power: 99,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("That must be your favorite card!");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    numRowsDeleted = await db.card.destroy({
      where: { id: req.params.id },
    });
    numRowsDeleted > 0
      ? res.send("card deleted!")
      : res.send("no card found to delete.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
