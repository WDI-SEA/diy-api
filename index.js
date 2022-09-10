const express = require('express')
const db = require('./models')
const methodOverride = require('method-override')


const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))