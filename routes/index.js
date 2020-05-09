const router = require('express').Router();
const userController = require('../controllers/userController');
const { registerValidation, loginValidation } = require('../validators.js');
const { isPublic, isPrivate } = require('../middlewares/checkAuth');

// Importing the controllers
const movieController = require('../controllers/movieController');
const screeningController = require('../controllers/screeningController');
const reservationController = require('../controllers/reservationController');

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

// Reservation routes 1917
router.get('/reserve/1917', isPrivate, reservationController.show1917);
router.post('/reserve/1917/screening01', isPrivate, reservationController.reserve1917);
router.get('/reserve/1917/screening01/tickets', isPrivate, reservationController.tickets1917);

// Reservation routes Parasite 
router.get('/reserve/parasite', isPrivate, reservationController.showParasite);
router.post('/reserve/parasite/screening02', isPrivate, reservationController.reserveParasite);
router.get('/reserve/parasite/screening02/tickets', isPrivate, reservationController.ticketsParasite);

// Reservation routes Sonic
router.get('/reserve/sonic', isPrivate, reservationController.showSonic);
router.post('/reserve/sonic/screening03', isPrivate, reservationController.reserveSonic);
router.get('/reserve/sonic/screening03/tickets', isPrivate, reservationController.ticketsSonic);

// Reservation routes Birds of Prey
router.get('/reserve/birdsofprey', isPrivate, reservationController.showBOP);
router.post('/reserve/birdsofprey/screening04', isPrivate, reservationController.reserveBOP);
router.get('/reserve/birdsofprey/screening04/tickets', isPrivate, reservationController.ticketsBOP);

// Reservation routes Bad Boys for Life
router.get('/reserve/badboysforlife', isPrivate, reservationController.showBadBoys);
router.post('/reserve/badboysforlife/screening05', isPrivate, reservationController.reserveBadBoys);
router.get('/reserve/badboysforlife/screening05/tickets', isPrivate, reservationController.ticketsBadBoys);

// Reservation routes DoLittle
router.get('/reserve/dolittle', isPrivate, reservationController.showDoLittle);
router.post('/reserve/dolittle/screening06', isPrivate, reservationController.reserveDoLittle);
router.get('/reserve/dolittle/screening06/tickets', isPrivate, reservationController.ticketsDoLittle);

// Reservation routes The Night Clerk
router.get('/reserve/thenightclerk', isPrivate, reservationController.showTNC);
router.post('/reserve/thenightclerk/screening07', isPrivate, reservationController.reserveTNC);
router.get('/reserve/thenightclerk/screening07/tickets', isPrivate, reservationController.ticketsTNC);

// Reservation routes 
router.get('/reserve/thecallofthewild', isPrivate, reservationController.showCallofWild);
router.post('/reserve/thecallofthewild/screening08', isPrivate, reservationController.reserveCallofWild);
router.get('/reserve/thecallofthewild/screening08/tickets', isPrivate, reservationController.ticketsCallofWild);

module.exports = router;
