const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const PORT = 8000
const db = require('./models')
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.get('/', async(req, res) => {
  try {
    const allWorkouts = await db.workout.findAll()
    res.send(allWorkouts)
  } catch (error) {
    console.error(error)
  }
})

app.post('/', async(req, res) => {
  try {
    await db.workout.create({
      // name: req.body.name,
      // date: req.body.date,
      // weight: req.body.weight,
      // reps: req.body.reps
      name: 'Bicep Curls',
      date: '12/19/2022',
      weight: '25',
      reps: '8'
    })
    res.send('created new record')
  } catch (error) {
    console.error(error)
  }
})

app.get('/:id', async(req, res) => {
  try {
    const workout = await db.workout.findOne({
      where: { id: req.params.id }
    })
    res.json(workout)
  } catch (error) {
    console.error(error)
  }
})

app.put('/:id', async(req, res) => {
  try {
    await db.workout.update({
      reps: req.body.reps
    }, {
      where: {
        id: req.params.id
      }
    }
    )
    res.send('updated')
  } catch (error) {
    console.error(error)
  }
})

app.delete('/:id', async(req, res) => {
  try {
    await db.workout.destroy({
      where: { id: req.params.id }
    })
    res.send('deleted')
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
