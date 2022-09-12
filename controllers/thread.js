let express = require('express')
let db = require('../models')
let router = express.Router()
const fs = require('fs')

// get the threads from the db
const readThreads = () => {
    // use the filesystem to read the dino json
    const threads = fs.readFileSync('./threads.json')
    // parse the file into json data
    const threadData = JSON.parse(threads)
    return threadData
}


// GET / - display all threads    list all threads
router.get('/', (req, res) => {
    // const threadData = readThreads()
    res.render('layout.ejs')
  })
  
// GET /threads/new - display form for creating new threads
router.get('/new', (req, res) => {
    res.render('thread/new')
})

// POST /thread - create a new post
router.post('/', (req, res) => {
  db.thread.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id,
    user_name: req.body.user_name
  })
  .then((post) => {
    res.redirect('/')
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
})

// // GET /thread/:id - display a specific post and its author
// router.get('/:id', (req, res) => {
//   db.thread.findOne({
//     where: { id: req.params.id },
//     include: [db.thread, db.comment]
//   })
//   .then((thread) => {
//     if (!article) throw Error()
//     console.log(article.author)
//     res.render('/thread/show', { thread: thread })
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// })

// // POST :3000/thread/:id/comments - route to save comment to
// router.post("/:id/comments", async (req, res) => {
//   //get data from rec.body
//   //create new comment from data
//   //console.log new comment
//   // rerender the page so user can see comment
//   try {
//     const newComment = await db.comment.create({
//         name: req.body.name,
//         content: req.body.content,
//         articleId: req.params.id
//       })
//       res.redirect(`/thread/${req.params.id}`)
//     }catch(err){
//       console.log(err)
//   }
// })


// PUT / update thread/:id   update one thread

// router.put('/thread/:id', (req, res) => {
//     res.send("test")
//   })
  
  
//   // DELETE / delete thread/:id     delete one thread
  
//   router.delete('/thread/id', (req, res) => {
//     res.send("test")
//   })
  
  

module.exports = router