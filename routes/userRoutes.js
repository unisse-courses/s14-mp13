const router = require('express').Router();

// Importing the controller
const userController = require('../controllers/userController');

// Students route
// router.get('/', userController.getAllUsers);
  
// Inserts a user in the database
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;