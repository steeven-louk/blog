const {getPostByUser, getUser, addUserPhoto, addBgPhoto, addToFavories, removeToFavories, getFavories} = require('../controllers/userController');

const userRoute = require('express').Router();


userRoute.get('/user-post/:id', getPostByUser);
userRoute.get('/:id', getUser);
userRoute.post('/add-photo/:id', addUserPhoto);
userRoute.post('/add-bg_picture/:id', addBgPhoto);

userRoute.get('/:id/favoris', getFavories );
userRoute.post('/:userId/favorite/:postId', addToFavories);
userRoute.delete('/:userId/favorite/:postId', removeToFavories );


module.exports = userRoute;