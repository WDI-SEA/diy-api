const express = require('express')
const router = express.Router()
const db = require('./models')

//Get all feed
router.get('/', (req, res) => {
    const post = 
    res.send('all posts!')
})

//Post new content
router.post('/', async (req, res) => {
    try {
      const post = await db.post.create({
        name: req.body.name,
        userId: req.body.userId,
        imageUrl: res.body.imageUrl
      })
      // find or create a category
      const [user] = await db.user.findOrCreate({
        where: {
          name: req.body.user
        },
        // no defualts needed 
        // defualts:
      })
      // associate the project with the category
      await user.addPost(post)
      // await project.addCategory(category)
      res.redirect('/')
    } catch(err) {
      console.log(err)
    }
  })

//Get details/show
router.get('/posts/:id', (req, res) => {
    res.send('details/show')
})

//Update post
router.put('/posts/:id', (req, res) => {
    res.send('update post')
})

module.exports = router