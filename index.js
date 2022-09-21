const express = require('express')
const ejsLayouts = require('express-ejs-layouts');
const db = require('./models')
const app = express()
const PORT = (8000)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)

///////////////////////////////////////
//ROUTES 
///////////////////////////////////////

//homepage
app.get('/', (req, res) => {
    res.render('home')
})

//Get all feed
app.get('/students/', async (req, res) => {
  try {
    const students = await db.student.findAll()
      res.render('students/show', { students })
            
        } catch(err) {
            console.log('server error')
        }
})

app.get('/students/new', (req, res) => {
    res.render('students/new')
})

//Post new student
app.post('/students/new', async (req, res) => {
    try {
      const newStudent = await db.student.create({
          name: req.body.name,
          age: req.body.age,
          gender: req.body.gender
      })
        res.redirect('/students')
        } catch(err) {
          console.log(err)
    }
  })

app.get('/students/:id', async (req, res) => {
    try {
        const data = await db.student.findOne({
            where: { id: req.params.id }
        })
        res.render('students/info', { student: data })
    } catch(err) {
        console.log(err)
    }
}) 

//Get details/show
app.put('/students/:id', async (req,res) => {
    try {
        const editStudent = await db.student.update({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender
        }, 
        {
            where: { id: req.params.id }
        })
        res.redirect(`/students/${req.params.id}`)
    } catch(err) {
        console.log(err)
    }
})

app.delete('/students/:id', async (req,res) => {
    try {
       const unenroll = await db.student.destroy({
            where: { id: req.params.id }
        })
        console.log(unenroll)
        res.redirect('/students')
    }catch(err){
        console.log(err)
    }
})


///////////////////////////////////////

app.listen(PORT, function(){
    console.log('I am smitten for them kittens 🐈')
})
