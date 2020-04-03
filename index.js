// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');

// Importing the models

const Movie = require('./models/movie');
const User = require('./models/user');



// Creates the express application
const app = express();
app.use(express.static(__dirname));
const port = 3000;

app.use(bodyParser.json()); // converts data body to JSON format

/**
  Creates an engine called "hbs" using the express-handlebars package.
**/
app.engine( 'hbs', exphbs({
  extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
  defaultView: 'main', // this is the default value but you may change it to whatever you'd like
  layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
  partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
}));

// Setting the view engine to the express-handlebars engine we created
app.set('view engine', 'hbs');

// Configuration for handling API endpoint data
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*============================MAIN ROUTES============================*/ 
// Home (not logged in) route

app.get('/', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template

      // NOW SHOWING ROW 1
      Movie.findById('5e85aa5d1c9d440000d85c62', function(err, movie1) {
      Movie.findById('5e85acac1c9d440000d85c63', function(err, movie2) {
      Movie.findById('5e8690bc1c9d440000ec3b03', function(err, movie3) {
      Movie.findById('5e8693081c9d440000ec3b04', function(err, movie4) {
      // NOW SHOWING ROW 2
      Movie.findById('5e8695691c9d440000ec3b06', function(err, movie5) {
      Movie.findById('5e8698471c9d440000ec3b07', function(err, movie6) {
      Movie.findById('5e86a43b1c9d440000ec3b08', function(err, movie7) {
      Movie.findById('5e86a5f01c9d440000ec3b09', function(err, movie8) {
      // COMING SOON ROW 1
      Movie.findById('5e86a7a31c9d440000ec3b0a', function(err, movie9) {
      Movie.findById('5e86a99a1c9d440000ec3b0b', function(err, movie10) {
      Movie.findById('5e86ab4a1c9d440000ec3b0c', function(err, movie11) {
      Movie.findById('5e86ad0a1c9d440000ec3b0d', function(err, movie12) {
      // COMING SOON ROW 2
      Movie.findById('5e86ae8c1c9d440000ec3b0e', function(err, movie13) {
      Movie.findById('5e86b0e61c9d440000ec3b0f', function(err, movie14) {
      res.render('home', {

       
        title: 'W&Js Cinemas',
       
        // NOW SHOWING ROW 1
        name: movie1.name,
        shortdesc: movie1.shortdesc,
        price: movie1.price,
        directors: movie1.directors,
        cast: movie1.cast, 
        trailer_url: movie1.trailer_url, 
        img_url: movie1.img_url, 
        synopsis: movie1.synopsis,
      

        name2: movie2.name,
        shortdesc2: movie2.shortdesc,
        price2: movie2.price,
        directors2: movie2.directors,
        cast2: movie2.cast, 
        trailer_url2: movie2.trailer_url, 
        img_url2: movie2.img_url, 
        synopsis2: movie2.synopsis,

        name3: movie3.name,
        shortdesc3: movie3.shortdesc,
        price3: movie3.price,
        directors3: movie3.directors,
        cast3: movie3.cast, 
        trailer_url3: movie3.trailer_url, 
        img_url3: movie3.img_url, 
        synopsis3: movie3.synopsis,

        name4: movie4.name,
        shortdesc4: movie4.shortdesc,
        price4: movie4.price,
        directors4: movie4.directors,
        cast4: movie4.cast, 
        trailer_url4: movie4.trailer_url, 
        img_url4: movie4.img_url, 
        synopsis4: movie4.synopsis,

        //NOW SHOWING ROW 2
        name5: movie5.name,
        shortdesc5: movie5.shortdesc,
        price5: movie5.price,
        directors5: movie5.directors,
        cast5: movie5.cast, 
        trailer_url5: movie5.trailer_url, 
        img_url5: movie5.img_url, 
        synopsis5: movie5.synopsis,

        name6: movie6.name,
        shortdesc6: movie6.shortdesc,
        price6: movie6.price,
        directors6: movie6.directors,
        cast6: movie6.cast, 
        trailer_url6: movie6.trailer_url, 
        img_url6: movie6.img_url, 
        synopsis6: movie6.synopsis,

        name7: movie7.name,
        shortdesc7: movie7.shortdesc,
        price7: movie7.price,
        directors7: movie7.directors,
        cast7: movie7.cast, 
        trailer_url7: movie7.trailer_url, 
        img_url7: movie7.img_url, 
        synopsis7: movie7.synopsis,

        name8: movie8.name,
        shortdesc8: movie8.shortdesc,
        price8: movie8.price,
        directors8: movie8.directors,
        cast8: movie8.cast, 
        trailer_url8: movie8.trailer_url, 
        img_url8: movie8.img_url, 
        synopsis8: movie8.synopsis,

        //COMING SOON ROW 1
        name9: movie9.name,
        shortdesc9: movie9.shortdesc,
        price9: movie9.price,
        directors9: movie9.directors,
        cast9: movie9.cast, 
        trailer_url9: movie9.trailer_url, 
        img_url9: movie9.img_url, 
        synopsis9: movie9.synopsis,

        name10: movie10.name,
        shortdesc10: movie10.shortdesc,
        price10: movie10.price,
        directors10: movie10.directors,
        cast10: movie10.cast, 
        trailer_url10: movie10.trailer_url, 
        img_url10: movie10.img_url, 
        synopsis10: movie10.synopsis,

        name11: movie11.name,
        shortdesc11: movie11.shortdesc,
        price11: movie11.price,
        directors11: movie11.directors,
        cast11: movie11.cast, 
        trailer_url11: movie11.trailer_url, 
        img_url11: movie11.img_url, 
        synopsis11: movie11.synopsis,

        name12: movie12.name,
        shortdesc12: movie12.shortdesc,
        price12: movie12.price,
        directors12: movie12.directors,
        cast12: movie12.cast, 
        trailer_url12: movie12.trailer_url, 
        img_url12: movie12.img_url, 
        synopsis12: movie12.synopsis,

        // COMING SOON ROW 2
        name13: movie13.name,
        shortdesc13: movie13.shortdesc,
        price13: movie13.price,
        directors13: movie13.directors,
        cast13: movie13.cast, 
        trailer_url13: movie13.trailer_url, 
        img_url13: movie13.img_url, 
        synopsis13: movie13.synopsis,

        name14: movie14.name,
        shortdesc14: movie14.shortdesc,
        price14: movie14.price,
        directors14: movie14.directors,
        cast14: movie14.cast, 
        trailer_url14: movie14.trailer_url, 
        img_url14: movie14.img_url, 
        synopsis14: movie14.synopsis
      })
      
      }); // movie 1
      }); // movie 2
      }); // movie 3
      }); // movie 4
      }); // movie 5
      }); // movie 6
      }); // movie 7
      }); // movie 8
      }); // movie 9
      }); // movie 10
      }); // movie 11
      }); // movie 12
      }); // movie 13
      }); // movie 14
});


// Schedules (not logged in) route
app.get('/schedules', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('schedules', {
      title: 'Schedules'
    })
});


// Snacks (not logged in) route
app.get('/snacks', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('snacks', {
      title: 'Snacks'
    })
});


// Contact Us (not logged in) route
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

// FAQs (not logged in) route
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



/*============================REGISTER/LOGIN ROUTES===============================*/ 

// Users route
app.get('/users', function(req, res) {
    /** == README == **
      This used to hold the mongodb connection and find.
      But now, using only the model, we use the same find parameter.
      Using the query helper sort() so we also have the exec() function
      to be able to actually execute the query.
    **/
   User.find({}).sort({ name: 1 }).exec(function(err, result) {
      // Handlebars fix!
      // Because of this error warning:
      // https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access
      // we need to convert each object returned from the find to a plain JS object
      var userObjects = [];
  
      result.forEach(function(doc) {
        userObjects.push(doc.toObject());
      });
      // end handlebars fix!
  
      res.render('users', { title: 'Users', users: userObjects });
      // try passing result for users instead of userObjects to see the error!
    });
  });

// Inserts a user in the database
app.post('/addUser', function(req, res) {

    /** == README == **
      Instead of passing an object, we now have a mongoose.Document object
      because we created an instance of the usersModel.
    **/
    var user = new User ({
      utype: req.body.utype,
      uname: req.body.uname,
      fname: req.body.fname,
      lname: req.body.lname,
      mnum: req.body.mnum,
      email: req.body.email,
      pword: req.body.pword,

        // Potential error: there's no validation for gender on the client side
    });
  
    /** == README == **
      Directly calling save for the instance of the Document.
    **/
    user.save(function(err, user) {
      var result;
  
      /** == README == **
        Added error handling! Check out the object printed out in the console.
        (Try clicking Add User when the name or id is blank)
      **/
      if (err) {
        console.log(err.errors);
  
        result = { success: false, message: "User was not created!" }
        res.send(result);
        // throw err; // This is commented so that the server won't be killed.
      } else {
        console.log("Successfully added user!");
        console.log(user); // Check out the logs and see there's a new __v attribute!
  
        // Let's create a custom response that the user was created successfully
        result = { success: true, message: "User created!" }
  
        // Sending the result as is to handle it the "AJAX-way".
        res.send(result);
      }
  
    });
  
  });

  app.get('/users', function(req, res) {
    // Retrieves all genres
    User.find({}, function(err, users) {
      res.send(users);
    });
  });
  
  
  // Log In
  app.post('/login', function(req,res) {
  
    var username = req.body.uname_login;
    var password = req.body.pword_login;
    

    User.findOne({uname: username, pword: password}, function(err, user) {

      // if syntax error
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
  
      // if user is not found in the DB
      if (!user) {
        console.log("User not found");
        res.redirect('http://localhost:3000/');


        return res.status(404).send();
       
      }

      // if user is found in the DB
      else {
        console.log("User found");

        // Nested routes, so that all pages will have the user's data from the DB 

        // admin account
        if (user.utype === "Admin") {


          // admin home account (logged in) route
        app.get('/admin-home', function(req, res) {
          // The render function takes the template filename (no extension - that's what the config is for!)
          // and an object for what's needed in that template
          res.render('admin-home', {
            layout: 'main-admin-ready'
          })
        });

        // admin my account (logged in) route
        app.get('/adminaccount', function(req, res) {
          // The render function takes the template filename (no extension - that's what the config is for!)
          // and an object for what's needed in that template
          res.render('adminaccount', {
            layout: 'main-admin-ready'
          })
        });

          // redirect to admin page
          res.redirect('http://localhost:3000/admin-home');

        }
         

        // regular account
        else if (user.utype === "Regular") {

          // redirect to home page
          res.redirect('http://localhost:3000/home');


          // Home (logged in) route
          app.get('/home', function(req, res) {
            // The render function takes the template filename (no extension - that's what the config is for!)
            // and an object for what's needed in that template
    
            res.render('home-ready', {
              layout: 'main-regular-ready',
              title: 'W&Js Cinemas'
            })
            
          });

          // myaccount (logged in) route
          app.get('/myaccount', function(req, res) {
            // The render function takes the template filename (no extension - that's what the config is for!)
            // and an object for what's needed in that template
            res.render('myaccount', {
              layout: 'main-regular-ready',
              uname: user.uname,
              fname: user.fname,
              lname: user.lname,
              mnum: user.mnum,
              email: user.email
            })

          });

          // Schedules (logged in) route
          app.get('/schedules-ready', function(req, res) {
            // The render function takes the template filename (no extension - that's what the config is for!)
            // and an object for what's needed in that template
            res.render('schedules-ready', {
              layout: 'main-regular-ready',
              title: 'Schedules'
            })
          });

          // Snacks (logged in) route
          app.get('/snacks-ready', function(req, res) {
            // The render function takes the template filename (no extension - that's what the config is for!)
            // and an object for what's needed in that template
            res.render('snacks-ready', {
              layout: 'main-regular-ready',
              title: 'Snacks'
            })
          });

          // Contact Us (logged in) route
          app.get('/contactus-ready', function(req, res) {
            // The render function takes the template filename (no extension - that's what the config is for!)
            // and an object for what's needed in that template
            res.render('contactus', {
              layout: 'main-regular-ready',
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
          app.get('/faqs-ready', function(req, res) {
            // The render function takes the template filename (no extension - that's what the config is for!)
            // and an object for what's needed in that template
            res.render('faqs', {
              layout: 'main-regular-ready',
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
          
          app.get('/logout', function(req, res){

            res.redirect('http://localhost:3000/');

            console.log('User Id', users._id);

            User.findByIdAndRemove(users._id, function(err){
            if(err) res.send(err);
            console.log('User Deleted!');
           })

          
        });
        
        }
        return res.status(200).send();
      }
      
    })
});

/*============================MOVIE ROUTE============================*/ 
app.post('/addMovie', function(req, res) {
  // Adds a genre to the database
  const movie = new Movie({
    name: req.body.name
  });

  genre.save(function (err, result) {
    if (err) throw err;

    res.send(result);
  });
});

app.get('/movies', function(req, res) {
  // Retrieves all movies
  Movie.find({}, function(err, movies) {
    res.send(movies);
  });
});



/*================================================================*/

/*============================RESERVE ROUTES============================*/ 
// 1917 reserve route
app.get('/reserve-1917', function(req,res) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: '1917', 
        cinema: 'Cinema 1',
        details: ' R | 1h 59min | Drama, War | 10 January 2020 (USA)',
        time: ['1:30 PM', '4:00 PM', '6:15 PM', '8:45 PM']              //this should be retrieved from the DB
    })
});

// Parasite reserve route
app.get('/reserve-parasite', function(req,res) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: 'Parasite',
        cinema: 'Cinema 2',
        details: '',
        time: []
    })
});

// Sonic reserve route
app.get('/reserve-sonic', function(req,res) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: 'Sonic the Hedgehog'
    })
});

// BOP reserve route
app.get('/reserve-BOP', function(req,res) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: 'Birds of Prey'
    })
});

// Bad Boys for Life reserve route
app.get('/reserve-badboysforlife', function(req,res) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: 'Bad Boys for Life'
    })
});

// DoLittle reserve route
app.get('/reserve-dolittle', function(req,res) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: 'Do Little'
    })
});

// The Night Clerk reserve route
app.get('/reserve-thenightclerk', function(req,res) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: 'The Night Clerk'
    })
});

// The Call of the Wild reserve route
app.get('/reserve-thecallofthewild', function(req,res) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: 'The Call of the Wild'
    })
});
/*================================================================*/


/**
  To be able to render images, css and JavaScript files, it's best to host the static files
  and use the expected path in the data and the imports.
  This takes the contents of the public folder and makes it accessible through the URL.
  i.e. public/css/styles.css (in project) will be accessible through http://localhost:3000/css/styles.css
**/
app.use(express.static('public'));

// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});