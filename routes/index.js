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
router.get('/myaccount', isPrivate, reservationController.showMyAccount);

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

// 1917
// ---------------------------------------------------------------------------------------------- //
// Reservation routes 1917 timeslot 1 
router.get('/reserve/1917/t1', isPrivate, reservationController.show1917);
router.post('/reserve/1917/t1/screening01', isPrivate, reservationController.reserve1917);
router.get('/reserve/1917/t1/screening01/tickets', isPrivate, reservationController.tickets1917);

// Reservation routes 1917 timeslot 2
router.get('/reserve/1917/t2', isPrivate, reservationController.show1917t2);
router.post('/reserve/1917/t2/screening01', isPrivate, reservationController.reserve1917t2);
router.get('/reserve/1917/t2/screening01/tickets', isPrivate, reservationController.tickets1917t2);

// Reservation routes 1917 timeslot 3
router.get('/reserve/1917/t3', isPrivate, reservationController.show1917t3);
router.post('/reserve/1917/t3/screening01', isPrivate, reservationController.reserve1917t3);
router.get('/reserve/1917/t3/screening01/tickets', isPrivate, reservationController.tickets1917t3);

// Reservation routes 1917 timeslot 4
router.get('/reserve/1917/t4', isPrivate, reservationController.show1917t4);
router.post('/reserve/1917/t4/screening01', isPrivate, reservationController.reserve1917t4);
router.get('/reserve/1917/t4/screening01/tickets', isPrivate, reservationController.tickets1917t4);
// ---------------------------------------------------------------------------------------------- //
// END OF 1917

// PARASITE
// ---------------------------------------------------------------------------------------------- //
// Reservation routes Parasite timeslot 1
router.get('/reserve/parasite/t1', isPrivate, reservationController.showParasite);
router.post('/reserve/parasite/t1/screening02', isPrivate, reservationController.reserveParasite);
router.get('/reserve/parasite/t1/screening02/tickets', isPrivate, reservationController.ticketsParasite);

// Reservation routes Parasite timeslot 2
router.get('/reserve/parasite/t2', isPrivate, reservationController.showParasitet2);
router.post('/reserve/parasite/t2/screening02', isPrivate, reservationController.reserveParasitet2);
router.get('/reserve/parasite/t2/screening02/tickets', isPrivate, reservationController.ticketsParasitet2);

// Reservation routes Parasite timeslot 3
router.get('/reserve/parasite/t3', isPrivate, reservationController.showParasitet3);
router.post('/reserve/parasite/t3/screening02', isPrivate, reservationController.reserveParasitet3);
router.get('/reserve/parasite/t3/screening02/tickets', isPrivate, reservationController.ticketsParasitet3);

// Reservation routes Parasite timeslot 4
router.get('/reserve/parasite/t4', isPrivate, reservationController.showParasitet4);
router.post('/reserve/parasite/t4/screening02', isPrivate, reservationController.reserveParasitet4);
router.get('/reserve/parasite/t4/screening02/tickets', isPrivate, reservationController.ticketsParasitet4);
// ---------------------------------------------------------------------------------------------- //
// END OF PARASITE

// SONIC
// ---------------------------------------------------------------------------------------------- //
// Reservation routes Sonic timeslot 1
router.get('/reserve/sonic/t1', isPrivate, reservationController.showSonic);
router.post('/reserve/sonic/t1/screening03', isPrivate, reservationController.reserveSonic);
router.get('/reserve/sonic/t1/screening03/tickets', isPrivate, reservationController.ticketsSonic);

// Reservation routes Sonic timeslot 2
router.get('/reserve/sonic/t2', isPrivate, reservationController.showSonict2);
router.post('/reserve/sonic/t2/screening03', isPrivate, reservationController.reserveSonict2);
router.get('/reserve/sonic/t2/screening03/tickets', isPrivate, reservationController.ticketsSonict2);

// Reservation routes Sonic timeslot 3
router.get('/reserve/sonic/t3', isPrivate, reservationController.showSonict3);
router.post('/reserve/sonic/t3/screening03', isPrivate, reservationController.reserveSonict3);
router.get('/reserve/sonic/t3/screening03/tickets', isPrivate, reservationController.ticketsSonict3);

// Reservation routes Sonic timeslot 4
router.get('/reserve/sonic/t4', isPrivate, reservationController.showSonict4);
router.post('/reserve/sonic/t4/screening03', isPrivate, reservationController.reserveSonict4);
router.get('/reserve/sonic/t4/screening03/tickets', isPrivate, reservationController.ticketsSonict4);
// ---------------------------------------------------------------------------------------------- //
// END OF SONIC

// BOP
// ---------------------------------------------------------------------------------------------- //
// Reservation routes Birds of Prey timeslot 1
router.get('/reserve/birdsofprey/t1', isPrivate, reservationController.showBOP);
router.post('/reserve/birdsofprey/t1/screening04', isPrivate, reservationController.reserveBOP);
router.get('/reserve/birdsofprey/t1/screening04/tickets', isPrivate, reservationController.ticketsBOP);

// Reservation routes Birds of Prey timeslot 2
router.get('/reserve/birdsofprey/t2', isPrivate, reservationController.showBOPt2);
router.post('/reserve/birdsofprey/t2/screening04', isPrivate, reservationController.reserveBOPt2);
router.get('/reserve/birdsofprey/t2/screening04/tickets', isPrivate, reservationController.ticketsBOPt2);

// Reservation routes Birds of Prey timeslot 3
router.get('/reserve/birdsofprey/t3', isPrivate, reservationController.showBOPt3);
router.post('/reserve/birdsofprey/t3/screening04', isPrivate, reservationController.reserveBOPt3);
router.get('/reserve/birdsofprey/t3/screening04/tickets', isPrivate, reservationController.ticketsBOPt3);

// Reservation routes Birds of Prey timeslot 4
router.get('/reserve/birdsofprey/t4', isPrivate, reservationController.showBOPt4);
router.post('/reserve/birdsofprey/t4/screening04', isPrivate, reservationController.reserveBOPt4);
router.get('/reserve/birdsofprey/t4/screening04/tickets', isPrivate, reservationController.ticketsBOPt4);
// ---------------------------------------------------------------------------------------------- //
// END OF BOP

// BAD BOYS
// ---------------------------------------------------------------------------------------------- //
// Reservation routes Bad Boys for Life timeslot 1
router.get('/reserve/badboysforlife/t1', isPrivate, reservationController.showBadBoys);
router.post('/reserve/badboysforlife/t1/screening05', isPrivate, reservationController.reserveBadBoys);
router.get('/reserve/badboysforlife/t1/screening05/tickets', isPrivate, reservationController.ticketsBadBoys);

// Reservation routes Bad Boys for Life timeslot 2
router.get('/reserve/badboysforlife/t2', isPrivate, reservationController.showBadBoyst2);
router.post('/reserve/badboysforlife/t2/screening05', isPrivate, reservationController.reserveBadBoyst2);
router.get('/reserve/badboysforlife/t2/screening05/tickets', isPrivate, reservationController.ticketsBadBoyst2);

// Reservation routes Bad Boys for Life timeslot 3
router.get('/reserve/badboysforlife/t3', isPrivate, reservationController.showBadBoyst3);
router.post('/reserve/badboysforlife/t3/screening05', isPrivate, reservationController.reserveBadBoyst3);
router.get('/reserve/badboysforlife/t3/screening05/tickets', isPrivate, reservationController.ticketsBadBoyst3);

// Reservation routes Bad Boys for Life timeslot 4
router.get('/reserve/badboysforlife/t4', isPrivate, reservationController.showBadBoyst4);
router.post('/reserve/badboysforlife/t4/screening05', isPrivate, reservationController.reserveBadBoyst4);
router.get('/reserve/badboysforlife/t4/screening05/tickets', isPrivate, reservationController.ticketsBadBoyst4);


// ---------------------------------------------------------------------------------------------- //
// END OF BAD BOYS

// DOLITTLE
// ---------------------------------------------------------------------------------------------- //
// Reservation routes DoLittle timeslot 1
router.get('/reserve/dolittle/t1', isPrivate, reservationController.showDoLittle);
router.post('/reserve/dolittle/t1/screening06', isPrivate, reservationController.reserveDoLittle);
router.get('/reserve/dolittle/t1/screening06/tickets', isPrivate, reservationController.ticketsDoLittle);

// Reservation routes DoLittle timeslot 2
router.get('/reserve/dolittle/t2', isPrivate, reservationController.showDoLittlet2);
router.post('/reserve/dolittle/t2/screening06', isPrivate, reservationController.reserveDoLittlet2);
router.get('/reserve/dolittle/t2/screening06/tickets', isPrivate, reservationController.ticketsDoLittlet2);

// Reservation routes DoLittle timeslot 3
router.get('/reserve/dolittle/t3', isPrivate, reservationController.showDoLittlet3);
router.post('/reserve/dolittle/t3/screening06', isPrivate, reservationController.reserveDoLittlet3);
router.get('/reserve/dolittle/t3/screening06/tickets', isPrivate, reservationController.ticketsDoLittlet3);

// Reservation routes DoLittle timeslot 4
router.get('/reserve/dolittle/t4', isPrivate, reservationController.showDoLittlet4);
router.post('/reserve/dolittle/t4/screening06', isPrivate, reservationController.reserveDoLittlet4);
router.get('/reserve/dolittle/t4/screening06/tickets', isPrivate, reservationController.ticketsDoLittlet4);

// ---------------------------------------------------------------------------------------------- //
// END OF DOLITTLE

// TNC
// ---------------------------------------------------------------------------------------------- //
// Reservation routes The Night Clerk timeslot 1
router.get('/reserve/thenightclerk/t1', isPrivate, reservationController.showTNC);
router.post('/reserve/thenightclerk/t1/screening07', isPrivate, reservationController.reserveTNC);
router.get('/reserve/thenightclerk/t1/screening07/tickets', isPrivate, reservationController.ticketsTNC);

// Reservation routes The Night Clerk timeslot 2
router.get('/reserve/thenightclerk/t2', isPrivate, reservationController.showTNCt2);
router.post('/reserve/thenightclerk/t2/screening07', isPrivate, reservationController.reserveTNCt2);
router.get('/reserve/thenightclerk/t2/screening07/tickets', isPrivate, reservationController.ticketsTNCt2);

// Reservation routes The Night Clerk timeslot 3
router.get('/reserve/thenightclerk/t3', isPrivate, reservationController.showTNCt3);
router.post('/reserve/thenightclerk/t3/screening07', isPrivate, reservationController.reserveTNCt3);
router.get('/reserve/thenightclerk/t3/screening07/tickets', isPrivate, reservationController.ticketsTNCt3);

// Reservation routes The Night Clerk timeslot 4
router.get('/reserve/thenightclerk/t4', isPrivate, reservationController.showTNCt4);
router.post('/reserve/thenightclerk/t4/screening07', isPrivate, reservationController.reserveTNCt4);
router.get('/reserve/thenightclerk/t4/screening07/tickets', isPrivate, reservationController.ticketsTNCt4);

// ---------------------------------------------------------------------------------------------- //
// END OF TNC

// THE CALL OF THE WILD
// ---------------------------------------------------------------------------------------------- //
// Reservation routes The Call of the Wild timeslot 1
router.get('/reserve/thecallofthewild/t1', isPrivate, reservationController.showCallofWild);
router.post('/reserve/thecallofthewild/t1/screening08', isPrivate, reservationController.reserveCallofWild);
router.get('/reserve/thecallofthewild/t1/screening08/tickets', isPrivate, reservationController.ticketsCallofWild);

// Reservation routes The Call of the Wild timeslot 2
router.get('/reserve/thecallofthewild/t2', isPrivate, reservationController.showCallofWildt2);
router.post('/reserve/thecallofthewild/t2/screening08', isPrivate, reservationController.reserveCallofWildt2);
router.get('/reserve/thecallofthewild/t2/screening08/tickets', isPrivate, reservationController.ticketsCallofWildt2);

// Reservation routes The Call of the Wild timeslot 3
router.get('/reserve/thecallofthewild/t3', isPrivate, reservationController.showCallofWildt3);
router.post('/reserve/thecallofthewild/t3/screening08', isPrivate, reservationController.reserveCallofWildt3);
router.get('/reserve/thecallofthewild/t3/screening08/tickets', isPrivate, reservationController.ticketsCallofWildt3);

// Reservation routes The Call of the Wild timeslot 4
router.get('/reserve/thecallofthewild/t4', isPrivate, reservationController.showCallofWildt4);
router.post('/reserve/thecallofthewild/t4/screening08', isPrivate, reservationController.reserveCallofWildt4);
router.get('/reserve/thecallofthewild/t4/screening08/tickets', isPrivate, reservationController.ticketsCallofWildt4);
// ---------------------------------------------------------------------------------------------- //
// END OF THE CALL OF THE WILD

// Admin Routes
router.get('/home/admin', isPrivate, reservationController.showHome);

// admin my account (logged in) route
router.get('/adminaccount', function(req, res) {
  // The render function takes the template filename (no extension - that's what the config is for!)
  // and an object for what's needed in that template
  res.render('adminaccount', {
    layout: 'main-admin',
    title: 'My Account',
    uname: req.session.uname,
    fname: req.session.fname,
    lname: req.session.lname,
    mnum: req.session.mnum,
    email: req.session.email
  })
});

router.post('/cancel', isPrivate, reservationController.cancelReservation);

router.post('/update1917', isPrivate, reservationController.update1917);
router.post('/updateParasite', isPrivate, reservationController.updateParasite);
router.post('/updateSonic', isPrivate, reservationController.updateSonic);
router.post('/updateBOP', isPrivate, reservationController.updateBOP);
router.post('/updateBB4Life', isPrivate, reservationController.updateBB4Life);
router.post('/updateDoLittle', isPrivate, reservationController.updateDoLittle);
router.post('/updateTNC', isPrivate, reservationController.updateTNC);
router.post('/updateCOW', isPrivate, reservationController.updateCOW);

router.post('/updateAQP2', isPrivate, reservationController.updateAQP2);
router.post('/updateMulan', isPrivate, reservationController.updateMulan);
router.post('/updateGAtkimbo', isPrivate, reservationController.updateGAtkimbo);
router.post('/updateBloodshot', isPrivate, reservationController.updateBloodshot);
router.post('/updateOnward', isPrivate, reservationController.updateOnward);
router.post('/updatePOS', isPrivate, reservationController.updatePOS);


module.exports = router;
