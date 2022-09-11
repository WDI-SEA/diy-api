const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const db = require("./models")
const overRide = require("method-override")

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({extended:false}))
app.use(overRide('_method'))


const PORT =3000

app.get("/guns",async (req,res)=>{

    const guns = await db.gun.findAll()

    res.render("index",{guns})
})

app.post("/guns",async (req,res)=>{
    const guns = await db.gun.findOrCreate({
        where:{
            name:req.body.name,
            type:req.body.type,
            video:req.body.video
        }
    })
    res.redirect("/guns")
})

app.get("/guns/:id",async(req,res)=>{
    const gun = await db.gun.findOne({
        where:{
            name:req.params.id
        }
    })
    res.render("show",{gun})
})

app.put("/guns/:id",async (req,res)=>{
    const gun = await db.gun.update({
            name:req.body.name,
            type:req.body.type,
            video:req.body.video
    },{where:{
            name:req.params.id
        } })
        res.redirect("/guns")
    })
app.delete("/guns/:id",async (req,res)=>{
    console.log("in delete")
    const gun = await db.gun.destroy({
        where:{
            name:req.params.id
        }    
})
    res.redirect("/guns")
})

app.listen(PORT,()=>{
    console.log(`PORT ${PORT} deported`)
})