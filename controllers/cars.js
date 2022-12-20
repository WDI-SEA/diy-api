const db = require('../models')
const express = require('express')

const router = express()
router.get('/', async function(req,res){
    try{
    let carmake =[]
    const car = await db.car.findAll()
    console.log(carmake)
    res.render('index.ejs',{cars:car})
    }catch(error){
        console.log('wrong')
    }
})
router.post('/', async function(req,res){
    try{
        const newCar = await db.car.findOrCreate({
            where:{
                make: req.body.make,
                model: req.body.model,
                year: parseInt(req.body.year)
            }
        })
        res.redirect('/')
    }catch(error){
        console.log('shouldn\'t be here')
    }
})
router.get('/:id', async function(req,res){
    try{
        const car = await db.car.findByPk(parseInt(req.params.id))
        res.render('show.ejs', {car: car})
    }catch(error){
        console.log('wrong')
    }
})
router.put('/:id',async function(req,res){
    try{
        console.log(req.body.make, req.body.model, req.body.year)
        let car = await db.car.update({
            make: String(req.body.make),
            model: String(req.body.model),
            year: parseInt(req.body.year)
        },
        {
            where:{
                id:parseInt(req.params.id)
            }
        })
        res.render('show.ejs', {car: car})
    }catch(error){
        console.log('eroror')
    }
})
router.delete('/:id',async function(req,res){
    try{
        const car = await db.car.destroy({
            where:{
                id: parseInt(req.params.id)
            }
        })
        res.redirect('/')
    }catch(error){
        console.log('eroror')
    }
})
module.exports = router