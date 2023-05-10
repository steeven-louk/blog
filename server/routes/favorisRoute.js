const { addFavoris, removeFavoris, getFavoris } = require('../controllers/favorisController');

const favorisRoute = require('express').Router();

favorisRoute.get('/:id/favoris', getFavoris );
favorisRoute.post('/:userId/:postId', addFavoris);
favorisRoute.delete('/:userId/:postId', removeFavoris);


module.exports = favorisRoute;