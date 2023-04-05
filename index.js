const express = require('express')
const app = express()
const db = require('./models')
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the world of the Spellmonger, created by Terry Mancour!')
})

// GET	index	/widgets	list all widgets
app.get('/books', async (req, res) => {
    try {
        const books = await db.book.findAll()
        res.json(books)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Rrror 🦖')
    }
})

// POST	create	/widgets	add a widget
app.post('/books', async (req, res) => {
    try {
        const [book] = await db.book.findOrCreate({
            where: {
                title: 'The Road to Sevendor'
            },
            defaults: {
                readOrder: 3.5,
                length: 1012
            }
        })
        res.json(book)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Rrror 🦖')
    }
})

// GET	detail/show	/widgets/:id	show one widget
app.get('/books/:id', async (req, res) => {
    try {
        const book = await db.book.findByPk(req.params.id)
        res.json(book)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Rrror 🦖')
    }
})

// PUT	update	/widgets/:id	update one widget
app.put('/books/:id', async (req, res) => {
    try {
        const numOfChanges = await db.book.update({ length: 477 }, {
            where: {
                title: 'Spellmonger'
            }
        })
        console.log(numOfChanges)
        res.send('book updated')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Rrror 🦖')
    }
})

// DELETE	delete	/widgets/:id	delete one widget
app.delete('/books/:id', async (req, res) => {
    try {
        const victim = await db.book.findByPk(req.params.id)
        victim.destroy()
        console.log(victim)
        res.send('book destroyed')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Rrror 🦕')
    }
})

app.listen(PORT, () => { console.log(`Server running on ${PORT} 🚒`)})