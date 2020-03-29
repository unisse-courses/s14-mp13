// imports 
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

// Creates the express application
const app = express();
const port = 9090;

//Creates an engine called "hbs" using the express-handlebars package.

app.engine( 'hbs', exphbs({
    extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
    defaultView: 'main', // this is the default value but you may change it to whatever you'd like
    layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
    partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
  }));

// Setting the view engine to the express-handlebars engine we created
app.set('view engine', 'hbs');

/*============================ROUTES============================*/ 
// Home Routes
app.get('/', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('home', {
      title: 'W&Js Cinemas',
      img: 'img/penny.jpg'          //<--What is this
    })
});

// Schedules route
app.get('/schedules', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('schedules', {
      title: 'Schedules'
    })
});

// Snacks route
app.get('/snacks', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('snacks', {
      title: 'Snacks'
    })
});

// Contact Us route
app.get('/contactus', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('contactus', {
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

// FAQs route
app.get('/faqs', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('faqs', {
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


// 1917 reserve route
app.get('/reserve-1917', function(req,res) {
    res.render('reserve',{
        movieTitle: '1917', 
        cinema: 'Cinema 1',
        details: ' R | 1h 59min | Drama, War | 10 January 2020 (USA)',
        time: ['1:30 PM', '4:00 PM', '6:15 PM', '8:45 PM']              //this should be retrieved from the DB
    })
});

// Parasite reserve route
app.get('/reserve-parasite', function(req,res) {
    res.render('reserve',{
        movieTitle: 'Parasite',
        cinema: 'Cinema 2',
        details: '',
        time: []
    })
});

// Sonic reserve route
app.get('/reserve/sonic', function(req,res) {
    res.render('reserve',{
        movieTitle: 'Sonic the Hedgehog'
    })
});

// BOP reserve route
app.get('/reserve/BOP', function(req,res) {
    res.render('reserve',{
        movieTitle: 'Birds of Prey'
    })
});

// Bad Boys for Life reserve route
app.get('/reserve/badboysforlife', function(req,res) {
    res.render('reserve',{
        movieTitle: 'Bad Boys for Life'
    })
});

// DoLittle reserve route
app.get('/reserve/dolittle', function(req,res) {
    res.render('reserve',{
        movieTitle: 'Do Little'
    })
});

// The Night Clerk reserve route
app.get('/reserve/thenightclerk', function(req,res) {
    res.render('reserve',{
        movieTitle: 'The Night Clerk'
    })
});

// The Call of the Wild reserve route
app.get('/reserve/thecallofthewild', function(req,res) {
    res.render('reserve',{
        movieTitle: 'The Call of the Wild'
    })
});
/*================================================================*/


/**
  To be able to render images, css and JavaScript files, it's best to host the static files
  and use the expected path in the data and the imports.
  This takes the contents of the public folder and makes it accessible through the URL.
  i.e. public/css/styles.css (in project) will be accessible through http://localhost:9090/css/styles.css
**/
app.use(express.static('public'));

// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});