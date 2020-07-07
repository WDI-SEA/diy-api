const db = require("./models")
const { Where } = require("sequelize/types/lib/utils")
const app = express()
const express = require("express")
app.use(express.urlencoded({ extended: false}))


const errorHandler =  error => {
    console.log(error)
}
// create
app.post("/plants/", (req, res) =>{
    db.plant.create({
        name: "Fern",
        species: "bush plant",
        description: "wide leafs"
        
    }).then(plantData => {
        console.log("lol")
        console.log(plantData)
    }).catch(errorHandler)
})
//read
app.get("/plants/:id", (req, res) =>{
    db.plant.findOne({
        where: {
            id:0
        }
    }).then(foundPlant => {


        console.log("we got him")
    }).catch(errorHandler)
})
//find or create
app.post("/plants/", (req, res) =>{
    db.plant.findOrCreate({
        where: {
            name: "fern"
        },
        defaults: {
            species: "bush plant",
            description: "big leafy"
        }
    }).then(([plant, created]) =>{
            db.plant.findOne().then(plant => { plant.addPlant(plant)
        }).catch(errorHandler)
    }).catch(errorHandler)
})
//update plants  SET age =99 WHERE email = "b.hague@ga.co"
app.put("/plants/:id", (req, res) =>{
    db.plant.update({ 
        species: "bush plant"
    }, { where: 
    { name: "fern"
    }
    }).then(updated => {
        console.log(updated)
    }).catch(errorHandler)
})
//destroy 
app.delete("/plants/:id", (req, res) =>{
    db.plant.destroy({
        where: {
            name: req.body.name,
            id: req.params.id
        }
    }).then(deleted => {
        console.log(deleted)
    }).catch(errorHandler).finally(()=> {
        //any kind of cleanup
        console.log("done")
    })
})