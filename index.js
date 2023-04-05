const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the world of the Spellmonger, created by Terry Mancour!')
})

// GET	index	/widgets	list all widgets
app.get('/books', (req, res) => {
    res.send('This should be the book list')
})

// POST	create	/widgets	add a widget
app.post('/books', (req, res) => {
    res.send('this adds a book to the list/db')
})

// GET	detail/show	/widgets/:id	show one widget
app.get('/books/:id', (req, res) => {
    res.send('this shows all the deets of a single book')
})

// PUT	update	/widgets/:id	update one widget
app.put('/books/:id', (req, res) => {
    res.send('this would let you update one of the books')
})

// DELETE	delete	/widgets/:id	delete one widget
app.delete('/books/:id', (req, res) => {
    res.send('delete one of the books')
})

app.listen(PORT, () => { console.log(`Server running on ${PORT} 🚒`)})