const express = require('express');
const axios = require('axios')
const app = express()
const db = require('./models')

app.set('view engine', 'ejs')
const PORT = 3000

app.use(express.urlencoded({ extended: false }))

// ====== ADD DATA TO SQL ====== //

// CREATE

// async function constellationCrud () {
//     try {
//         // CREATE
//         const newConstellation= await db.constellation.create({
//             name: 'Taurus',
//             pic: 'https://earthsky.org/upl/2022/02/Taurus-the-Bull-1-e1643896354499.jpg',
//             description: 'Taurus is one of the constellations of the zodiac and is located in the northern celestial hemisphere. Taurus is a large and prominent constellation in the Northern Hemisphere winter sky.'
//         })

//         console.log(newConstellation)
//     } catch (err) {
//         console.log(err)
//     }
// }
// constellationCrud()



// ====== ROUTES ====== //

// GET all constellations
app.get('/', async (req,res) => {
    try {
        const constellations = await db.constellation.findAll()
        res.json({ constellations })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// POST a new constellation to the list
app.post('/', async (req,res) => {
    try {
        await db.constellation.findOrCreate(req.body)
        res.redirect('/')
    
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// GET details on a specific constellation
app.get('/:id', async (req,res) => {
    try {
        const constellation = await db.constellation.findByPk(req.params.id)
        res.json({ constellation })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// PUT update a specific constellation
app.put('/:id', async (req,res) => {
    try {
        await db.constellation.update(req.body, {
            where: {
                id: req.params.id
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// DELETE a constellation from the list
app.delete('/:id', async (req,res) => {
    try {
        await db.constellation.destroy ({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// LISTENING PORT

app.listen(PORT, () => {
    console.log(`Listening now to the sweet sounds of port ${PORT}`)
})