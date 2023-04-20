const { addFavoris, removeFavoris, getFavoris } = require('../controllers/favorisController');

const favorisRoute = require('express').Router();

favorisRoute.post('/:userId/:postId', addFavoris);
favorisRoute.delete('/:id', removeFavoris);

favorisRoute.get('/:id/favoris', getFavoris );

module.exports = favorisRoute;