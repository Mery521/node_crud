
const express = require('express');
const route = express.Router();
const { getItems } = require('../db/db');


route.get('/', (req, res) => {
    getItems('crud').then((items) => {
        res.render('index.hbs', {items:items});
    });
});
module.exports = route; 
