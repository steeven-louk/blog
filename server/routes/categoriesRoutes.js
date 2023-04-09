const {addCat,getAllCat, delCat} = require('../controllers/categoryController');

const catRoute = require('express').Router();

catRoute.get('/', getAllCat);
catRoute.post('/', addCat);
catRoute.delete('/:id', delCat);


module.exports = catRoute