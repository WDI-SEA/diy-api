require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const PORT = 8000
const db = require('./models')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))



const options = {
    method: 'GET',
    url: 'https://fish-species.p.rapidapi.com/fish_api/fishes',
    headers: {
      'X-RapidAPI-Key': process.env.fishy,
      'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
    }
  };

 
  
  app.get('/', (req, res) => {
  axios.request(options)
  .then(function (response) {
    let fish = response.data
      res.render('index', {
      fish:fish
  })
  })
  .catch(function (error) {
      console.error(error);
  });
  })

  app.get('/result', async (req, res) => {
    try {
        const speciesSearch = {
            method: 'GET',
            url: `https://fish-species.p.rapidapi.com/fish_api/fish/${req.query.fishSearch}`,
            headers: {
              'X-RapidAPI-Key': process.env.fishy,
              'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
            }
          };
        axios.request(speciesSearch)
        .then(function (response) {
            let species = response.data
            console.log(species);
            res.render("result", {
                species:species})
        })
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
  })

  app.post('/caught', async (req, res) => {
    try {
      await db.fish.findOrCreate({
        where: {
          name: req.body.name,
          length: req.body.length,
          weight: req.body.weight
        }
      })
      res.redirect('caught')
    } catch(err) {
      console.log(err)
      res.status(500).send("Server had an error")
    }
  })

  app.get('/caught', async (req, res) => {
    try {
      const allFish = await db.fish.findAll()
      res.render('caught', {allFish})
    } catch(err) {
      console.log(err)
      res.status(500).send('Server had an error')
    }
  })

  app.post('/caught/edit', async (req, res) => {
    try {
      const { id, length, weight } = req.body;
  
      // Find fish by ID
      const fish = await db.fish.findByPk(id);
  
      if (!fish) {
        res.status(404).send('Fish not found');
        return;
      }
  
      // Update fish with new length or weight
      if (length) {
        fish.length = length;
      }
      if (weight) {
        fish.weight = weight;
      }
  
      // Save changes to database
      await fish.save();
  
      res.redirect('/caught');
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  });
  
  // Route to delete a fish
  app.post('/caught/delete', async (req, res) => {
    try {
      const { id } = req.body;
  
      // Find fish by ID and delete it
      await db.fish.destroy({
        where: {
          id: id
        }
      });
  
      res.redirect('/caught');
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  });

  app.listen(PORT, () => {
    console.log('Server is running' + PORT)
  })
