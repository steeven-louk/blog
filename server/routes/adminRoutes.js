const { getAllUsers, getUserCount, getBlogCount } = require('../controllers/adminController');
const { verifyUserToken } = require('../middlewares/authMiddleware');

const adminRoute = require('express').Router();

adminRoute.get('/users',verifyUserToken, getAllUsers);
adminRoute.get('/users/count', verifyUserToken,getUserCount);
adminRoute.get('/posts/count', verifyUserToken,getBlogCount);




module.exports = adminRoute