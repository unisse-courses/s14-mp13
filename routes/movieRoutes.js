const router = require('express').Router();

// Importing the controller
const movieController = require('../controllers/movieController');

// Movies route
router.get('/', movieController.showAllMovies);


module.exports = router;