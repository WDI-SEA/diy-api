const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const db = require('./models');
const rowdy = require('rowdy-logger');

const app = express();
const PORT = process.env.PORT || 3000;
rowdy.begin(app);

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)

