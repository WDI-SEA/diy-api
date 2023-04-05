const db = require("../models");
const express = require("express");
const router = express.Router();

router.get('/', async (req, res) => {
  const allHV = await db.homevalues.findAll() 
  res.json(allHV);
  }) 
 
router.get('/:id', (req, res) => {
  db.homevalues.findOne({
    where: { regionname: 'New York, NY' }
}).then(foundRegion=>{
    console.log(foundRegion)
    res.json(foundRegion)
})
})

router.post('/', async (req, res) => {
  const { regionname, sizerank } = req.body;
  const [homevalue, created] = await db.homevalues.findOrCreate({
    where: { regionname: 'New York, NY' },
    defaults: { sizerank }
  }); 
  res.json(homevalue);
});


router.put('/:id', (req, res) => {
  db.user.update({
    lastName: 'Taco'
  }, {
    where: {
      firstName: 'Brian'
    }
}).then(numRowsChanged=>{
    // Returns a value of how many rows were altered by this update
    console.log(numRowsChanged)
    process.exit()
});})

router.delete('/:id', (req, res) => {
  db.user.destroy({
    where: { firstName: 'Brian' }
  }).then(numRowsDeleted=>{
      console.log(numRowsDeleted)
    // do something when done deleting
      process.exit()
  });})

module.exports = router