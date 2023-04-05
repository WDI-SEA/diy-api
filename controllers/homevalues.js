const db = require("../models");
const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
  const allHV = await db.homevalues.findAll() 
  res.json(allHV);
  }) 
 


router.get('/:id', (req, res) => {
  res.send("test hvi")
})

router.post('/', (req, res) => {
  res.send("post hv")
})

router.put('/:id', (req, res) => {
  res.send("put hv id")
})

router.delete('/:id', (req, res) => {
  res.send("delete hv id")
})

module.exports = router