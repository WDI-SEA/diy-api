//required packages
const express = require("express")

//app config
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')
//MIDDLEWARE

//ROUTES


// app.get('/customers', (req, res) => {
//     //parse data
//     const customers = fs.readFileSync('./customers.json')
//     const customerData = JSON.parse(customers)
//     res.render('index.ejs', { customers: customerData })
//     //redirect
//     // res.send('hello world')
// }) 


// //GET /customers/:id --show one customer
// app.get('/customers/:id', (req, res) => {
//     res.send('show one customer')
// })


// //PUT /customers/:id --update a customer
// app.get('/customers/:id', (req, res) => {
//     res.send('update a customer')
// })
// //DELETE /customers/:id --delete a customer

// app.get('/customers/:id', (req, res) => {
//     res.send('delete a customer')
// })
//CONTROLLERS
app.use("/customers", require("./controllers/customers.js"));

//LISTEN ON PORT
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})