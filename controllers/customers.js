//require
const express = require("express");
const router = express.Router();
const fs = require("fs")


//GET localhost:3000/customers
//GET /customers --show all customers
router.get('/', (req, res) => {
    //parse data
    const customers = fs.readFileSync('./customers.json')
    const customerData = JSON.parse(customers)
    console.log(customerData);
    res.render('show', {customers: customerData})
    // res.send('hello world')
}) 

//POST/CREATE new customer
//GET localhost:3000/customers/new
router.get("/new", (req, res) => {
    res.render("new.ejs");
  });
//POST new customers
router.post("/", (req, res) => {
    const customers = fs.readFileSync("./customers.json");
    const customerData = JSON.parse(customers);
    res.redirect('show.ejs', {customers: customerData})
});
    //add item to customers array in json file
// GET request to /customers filter by name
// router.get("/", (req, res) => {
//     const customers = fs.readFileSync("./customers.json");
//     const customerData = JSON.parse(customers);
  
//     const nameFilter = req.query.nameFilter;
  
//     if (nameFilter) {
//       customerData = customerData.filter(customer => customer.name.toLowerCase() === nameFilter.toLowerCase()
//       );
//     }
  
//     res.render("customers/customers", { customers: customerData });
// });


  module.exports = router;