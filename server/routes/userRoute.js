const {getPostByUser, getUser, addUserPhoto, addBgPhoto } = require('../controllers/userController');

const userRoute = require('express').Router();


userRoute.get('/user-post/:id', getPostByUser);
userRoute.get('/:id', getUser);
userRoute.post('/add-photo/:id', addUserPhoto);
userRoute.post('/add-bg_picture/:id', addBgPhoto);


module.exports = userRoute;