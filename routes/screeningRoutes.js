const router = require('express').Router();

// Importing the controller
const screeningController = require('../controllers/screeningController');

// Screening route
router.get('/schedules', screeningController.showAllScreenings);


module.exports = router;