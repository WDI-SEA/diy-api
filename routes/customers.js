const express = require('express')
const router = express.Router()
const db = require('../models')

// GET Payments
router.get('/', async (req, res) => {
  // Show all Customers
  try {
    const customers = await db.customer.findAll()
    res.render('customers/index', { webpage: 'Customers', customers })
  } catch(err) {
    res.send(err)
  }
})

// GET New Payment
router.get('/new', (req, res) => {
  res.render('customers/new', { webpage: 'New Customer' })
})

// GET Customer Payment
router.get('/:id', async (req, res) => {
  // Show specific customer info by id
  try {
    const customer = await db.customer.findOne({
      where: {
        id: req.params.id
      }
    })
    res.render('customers/show', { webpage: customer.name, customer })
  } catch(err) {
    res.send(err)
  }
})

// GET Edit Payment
router.get('/:id/edit', async (req, res) => {
  try {
    const customer = await db.customer.findOne({
      where: {
        id: req.params.id
      }
    })
    res.render('customers/edit', {
      webpage: 'Edit Customer',
      customer
    })
  } catch(err) {
    res.send(err)
  }
})

// POST New Payment
router.post('/new', async (req, res) => {
  // Create a new customer
  try {
    const newCustomer = await db.customer.create({
      type: req.body.paymentType || 'One-Time Payment',
      amount: req.body.amount,
      currency: req.body.currency,
      name: req.body.name,
      description: req.body.description || 'N/A',
      statement: req.body.statement || 'N/A'
    })
    res.redirect(`/customers/${newCustomer.id}`)//, { 
    //   webpage: newCustomer.name,
    //   newCustomer
    // })
  } catch(err) {
    res.send(err)
  }
})

// UPDATE Existing Payment
router.put('/:id', async (req, res) => {
  // Update customer info
  try {
    console.log(req.body)
    await db.customer.update({
      type: req.body.paymentType,
      amount: req.body.amount,
      currency: req.body.currency,
      name: req.body.name,
      description: req.body.description || 'N/A',
      statement: req.body.statement || 'N/A'
    },
    {
      where: {
        id: req.params.id
      }
    })
    res.redirect(`/`)
  } catch(err) {
    res.send(err)
  }
})

// DELETE Customer Payment
router.delete('/:id', async (req, res) => {
  // Delete this customer
  try {
    await db.customer.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/customers')
  } catch(err) {
    res.send(err)
  }
})

module.exports = router