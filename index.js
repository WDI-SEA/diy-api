require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const PORT = 8000

app.set('view engine', 'ejs')



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

  app.post('/caught', (req, res) => {
    res.render('caught')
  })



  app.listen(PORT, () => {
    console.log('Server is running' + PORT)
  })
