let express = require('express')
let db = require('../models')
let router = express.Router()

// POST /articles - create a new post
router.post('/', (req, res) => {
  db.thread.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id
  })
  .then((post) => {
    res.redirect('/')
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
})

// GET /articles/new - display form for creating new articles
router.get('/new', (req, res) => {
  db.thread.findAll()
  .then((threads) => {
    res.render('thread/new', { thread: threads })
  })
  .catch((error) => {
    res.status(400).render('main/404')
  })
})

// GET /articles/:id - display a specific post and its author
router.get('/:id', (req, res) => {
  db.thread.findOne({
    where: { id: req.params.id },
    include: [db.thread, db.comment]
  })
  .then((article) => {
    if (!article) throw Error()
    console.log(article.author)
    res.render('articles/show', { article: article })
  })
  .catch((error) => {
    console.log(error)
    res.status(400).render('main/404')
  })
})

// POST :3000/articles/:id/comments - route to save comment to
router.post("/:id/comments", async (req, res) => {
  //get data from rec.body
  //create new comment from data
  //console.log new comment
  // rerender the page so user can see comment
  try {
    const newComment = await db.comment.create({
        name: req.body.name,
        content: req.body.content,
        articleId: req.params.id
      })
      res.redirect(`/articles/${req.params.id}`)
    }catch(err){
      console.log(err)
  }
})



module.exports = router
