const { addFavoris, getFavoris, getFavorisId, removeFavoris } = require('../controllers/favorisController');
const { verifyUserToken } = require('../middlewares/authMiddleware');

const favorisRoute = require('express').Router();

favorisRoute.get('/:userId/favoris',verifyUserToken ,getFavoris );
favorisRoute.get('/:userId/favoris-ids', getFavorisId );
favorisRoute.put('/:userId/:postId', addFavoris);
favorisRoute.delete('/:userId/:postId', verifyUserToken,removeFavoris);


module.exports = favorisRoute;