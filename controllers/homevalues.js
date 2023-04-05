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
  const { sizerank } = req.body;
  const [homevalue] = await db.homevalues.findOrCreate({
    where: { regionname: 'New York, NY' },
    defaults: { sizerank }
  }); 
  res.json(homevalue);
});


router.put('/:SizeRank', async (req, res) => {
  const { SizeRank } = req.params;

  const [numUpdated] = await db.homevalues.update(
    { sizerank: 1 },
    { where: { sizerank: SizeRank } }
  );

  if (numUpdated === 0) {
    return res.status(404).send(`SizeRank ${SizeRank} not found.`);
  }

  res.json({ message: `Updated SizeRank ${SizeRank}.` });
});



router.delete('/:SizeRank', async (req, res) => {
  const { SizeRank } = req.params;

  try {
    const numDeleted = await db.homevalues.destroy({ where: { sizerank: "1" } });

    if (numDeleted === 0) {
      return res.status(404).send(`No SizeRank ${SizeRank} found to delete.`);
    }

    res.json({ message: `Deleted SizeRank ${SizeRank}.` });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting home value.');
  }
});


module.exports = router