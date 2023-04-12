const getPostByUser = require('../controllers/userController');

const userRoute = require('express').Router();


userRoute.get('/user-post/:id', getPostByUser);


module.exports = userRoute;