const express = require('express')
const db = require('./models')
const methodOverride = require('method-override');

const app = express()
const PORT = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.set('view engine','ejs')
app.use(express.static(__dirname + '/public/'))

//GET /index ALL THE UNITS /units
app.get('/', (req,res) =>{
    db.unit.findAll({

    }).then((unit) =>{
        res.render('./index', {unit :unit})
    }).catch((error) =>{
        console.log(error);
    })
    
    // res.send('Home page!');
})
//POST /create TO CREATE A UNIT /units
app.post('/', async (req,res)=>{
        await  db.unit.create({
        name: req.body.name,
        race: req.body.race,
        imgUrl: req.body.imgUrl
    }).then(() =>{
        res.redirect('/')
    }).catch((error) =>{
        console.log(error);
    })

})
//GET details of units units/:id
app.get('/units/:id', async (req, res) => {
    const unitId = req.params.id;

    await db.unit.findByPk(unitId)
        .then((unit) => {
            if (unit) {
                res.render('./unit', { unit: unit });
            } else {
                // Render error page or handle not found case
                res.render('./error', { message: 'Unit not found' });
            }
        })
        .catch((error) => {
            console.log(error);
            // Render error page or handle error case
            res.render('./error', { message: 'Error fetching unit details' });
        });
});

//PUT update a unit /units/:id
app.put('/:id', async (req, res) => {
    const unitId = req.params.id;

    await db.unit.update(
        {
            name: req.body.name,
            race: req.body.race,
            imgUrl: req.body.imgUrl
        },
        {
            where: {
                id: unitId 
            }
        }
    )
    .then(() => {
        res.redirect('/')
    })
    .catch((error) => {
        console.log(error);
    });
});

//DELETE delete a unit /units/:id
app.delete('/:id', async (req,res)=>{
    const unitId = req.params.id; // Get the unit ID from the URL parameter
    await db.unit.destroy({
        where: {
            id: unitId // Specify the unit ID in the where clause to delete only that unit
        }
    }).then(() =>{
        res.redirect('/')
    }).catch((error) =>{
        console.log(error);
    })
});

app.listen(PORT, () =>{
    console.log(`listening to port`)
})