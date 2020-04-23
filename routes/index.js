const router = require('express').Router();
const userController = require('../controllers/userController');
const { registerValidation, loginValidation } = require('../validators.js');
const { isPublic, isPrivate } = require('../middlewares/checkAuth');

// Importing the controllers
const movieController = require('../controllers/movieController');
const screeningController = require('../controllers/screeningController');

// Home/movies route
router.get('/home', isPrivate, movieController.showAllMoviesUser);

// myaccount route 
router.get('/myaccount', isPrivate, (req, res) => {
    res.render('myaccount2', {
        layout: 'main-regular',
        uname: req.session.uname,
        fname: req.session.fname,
        lname: req.session.lname,
        mnum: req.session.mnum,
        email: req.session.email
      })
});

// Schedules/screening route
router.get('/schedules/user', isPrivate, screeningController.showAllScreeningsUser);

// Snacks (logged in) route
router.get('/snacks/user', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('snacks-regular', {
      layout: 'main-regular',
      title: 'Snacks'
    })
  });

  // Contact Us (logged in) route
  router.get('/contactus/user', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('contactus', {
      layout: 'main-regular',
      address: 'Rockwell Drive, Estrella, 4114 Makati',
      title: 'W&Js Cinemas',
      landline: '7777-1234',
      mobile: '09171234567',
      email: 'wjscinemas@gmail.com',

      q1: 'Can I cancel my reservation anytime?',
      a1: 'You may only cancel within 45 minutes of your current booking.',
      q2: 'Is it possible to change my current booking?',
      a2: 'No, the only way to do this is to cancel the current booking and make a new one.',
      q3: 'What is the next step after reserving?',
      a3: 'After reserving, simply present your digital ticket/s either through your mobile devices or a printed copy at the Online Resevations Line at W&Js Cinemas and pay for your physical ticket/s.'
    })
  });

  // FAQs (logged in) route
  router.get('/faqs/user', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('faqs', {
      layout: 'main-regular',
      address: 'Rockwell Drive, Estrella, 4114 Makati',
      title: 'W&Js Cinemas',
      landline: '7777-1234',
      mobile: '09171234567',
      email: 'wjscinemas@gmail.com',

      q1: 'Can I cancel my reservation anytime?',
      a1: 'You may only cancel within 45 minutes of your current booking.',
      q2: 'Is it possible to change my current booking?',
      a2: 'No, the only way to do this is to cancel the current booking and make a new one.',
      q3: 'What is the next step after reserving?',
      a3: 'After reserving, simply present your digital ticket/s either through your mobile devices or a printed copy at the Online Resevations Line at W&Js Cinemas and pay for your physical ticket/s.'
    }) 

  });    





module.exports = router;
