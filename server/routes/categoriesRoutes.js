const {addCat,getAllCat} = require('../controllers/categoryController');

const catRoute = require('express').Router();

catRoute.get('/', getAllCat);
catRoute.post('/', addCat);


module.exports = catRoute