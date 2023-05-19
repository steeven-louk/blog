const {getPostByUser, getUser, addUserPhoto, addBgPhoto, updateUser } = require('../controllers/userController');
const verifyUserToken = require('../middlewares/authMiddleware');

const userRoute = require('express').Router();


userRoute.get('/user-post/:id', getPostByUser);
userRoute.get('/:id', getUser);
userRoute.post('/add-photo/:id', addUserPhoto);
userRoute.post('/add-bg_picture/:id', addBgPhoto);
userRoute.put('/update/:userId', updateUser);


module.exports = userRoute;