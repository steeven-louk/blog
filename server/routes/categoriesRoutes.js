const {addCat,getAllCat, delCat} = require('../controllers/categoryController');
const { verifyUserToken } = require('../middlewares/authMiddleware');

const catRoute = require('express').Router();

catRoute.get('/', getAllCat);
catRoute.post('/',verifyUserToken, addCat);
catRoute.delete('/:id',verifyUserToken, delCat);


module.exports = catRoute