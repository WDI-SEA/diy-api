const express = require("express");
const db = require("./models");
const app = express();


const errorHandler = error => {
    console.log("💥");
    console.log(error);
}

//The routes live in index.
//DO NOT let them live in testDB.js
//you need an index.js and a testDB.js
app.get("/", (req, res) => {
    res.send("HOOOOME");
})

// //Method	Action	URL	Functionality
// GET	index	/albums
//list all albums
app.get("/album", (req, res) => {
    db.album.findAll().then(albums => {
        res.send(JSON.stringify(albums));
        console.log("this is where we will list all the albums!");
    }).catch(err => {
        console.log("💢");
        console.log(err);
    })
})

// // POST	create	/albums	
// // add an album
// CREATE

// console.log("adding that album was a lot of work ✅);
// GET	detail/show	/widgets/:id	
//show one widget

// PUT	update	/widgets/:id	
//update one widget

// DELETE	delete	/widgets/:id	
//delete one widget

//Hey LISTEN
app.listen(3000, () => console.log(`You're listening to the smooth sounds of port 3000`));

