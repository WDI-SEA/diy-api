const express = require('express')
const app = express()
const port = 3000

// require models
const models = require('./models')

const jokeCrud = async () => {
   //    models.joke.create({
   //    jokeName: 'chemist’s nightstand',
   //    jokeQ: 'I was reading a book on helium.',
   //    jokeA: 'I couldn’t put it down.',
   //    category: 'chemistry'

   models.joke.findOrCreate({
      where: {
         jokeName: 'chemist’s nightstand',
         jokeQ: 'I was reading a book on helium.',
         jokeA: 'I couldn’t put it down.',
         category: 'chemistry'
      }
   });


   const jokeListAll = async () => {
      try {
         const allJokes = await models.joke.findAll()

         console.log(alljokes);
      } catch (err) {
         console.log(err);
      }
   }

   const jokesByCategory = async () => {
      try {
         const jokeByCatChemistry = await models.joke.category.findAll(
            where({
               category: 'chemistry'
            })
      )
         console.log(jokesByCategory);
      } catch (err) {
         console.log(err);
      }
   }
}

jokeCrud()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})