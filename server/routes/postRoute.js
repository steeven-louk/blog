const { getAllPost, addPost, getPost, deletePost, updatePost } = require('../controllers/postController');

const postRoute = require('express').Router();

postRoute.get('/', getAllPost);
postRoute.get('/:id', getPost);
postRoute.delete('/:id', deletePost);
postRoute.put('/:id', updatePost);
postRoute.post('/', addPost);


module.exports = postRoute;