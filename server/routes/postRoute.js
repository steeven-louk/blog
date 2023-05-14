const { getAllPost, addPost, getPost, deletePost, updatePost } = require('../controllers/postController');

const postRoute = require('express').Router();

postRoute.get('/', getAllPost);
postRoute.post('/', addPost);
postRoute.get('/:id', getPost);
postRoute.delete('/:userId/:postId', deletePost);
postRoute.put('/:id', updatePost);


module.exports = postRoute;