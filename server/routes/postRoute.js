const { getAllPost, addPost, getPost, deletePost, updatePost } = require('../controllers/postController');
const {verifyUserToken} = require('../middlewares/authMiddleware');

const postRoute = require('express').Router();

postRoute.get('/', getAllPost);
postRoute.post('/:id',verifyUserToken, addPost);
postRoute.get('/:id', getPost);
postRoute.delete('/:userId/:postId',verifyUserToken, deletePost);
postRoute.put('/:id',verifyUserToken, updatePost);


module.exports = postRoute;