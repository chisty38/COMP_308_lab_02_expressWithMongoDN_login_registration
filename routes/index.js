let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let indexController = require('../controllers/index');
let contactController = require('../controllers/contact');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/thankyou', indexController.displayThankYouPage);

/* GET home page. */
router.get('/product', indexController.displayProductPage);

/* GET home page. */
router.get('/services', indexController.displayServicesPage);

/* GET home page. */
router.get('/contact', indexController.displayContactPage);

// Get - Display the log in page
router.get('/login', indexController.displayLoginPage);

// Post - process the login page
router.post('/login', indexController.processLoginPage);

// Get - display the user registration page
router.get('/register', indexController.displayRegisterPage);

//Post - process the user registration page
router.post('/register', indexController.processRegisterPage);

// Get - perform user logout
router.get('/logout', indexController.performLogout);

router.get('/edit/:username', contactController.displayEditPage);

/* Post route for processesing the edit page */
router.post('/edit/:username', contactController.processEditPage);



module.exports = router;
