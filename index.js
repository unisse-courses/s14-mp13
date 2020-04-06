// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');

// Importing the models

const User = require('./models/user');
const Movie = require('./models/movie');
const Cinema = require('./models/cinema');
const Screening = require('./models/screening');
const Reservation = require('./models/reservation');




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

    // SCREENING 1
    Screening.findById('5e86f3c71c9d440000ec3b19', function(err, screening1) {
    Movie.findById(screening1.movie, function(err, movie1) {
    Cinema.findById(screening1.cinema, function(err, cinema1) {
    // SCREENING 2
    Screening.findById('5e86fd761c9d440000ec3b1a', function(err, screening2) {
    Movie.findById(screening2.movie, function(err, movie2) {
    Cinema.findById(screening2.cinema, function(err, cinema2) {
    // SCREENING 3
    Screening.findById('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
    Movie.findById(screening3.movie, function(err, movie3) {
    Cinema.findById(screening3.cinema, function(err, cinema3) {
    // SCREENING 4
    Screening.findById('5e86fe201c9d440000ec3b1c', function(err, screening4) {
    Movie.findById(screening4.movie, function(err, movie4) {
    Cinema.findById(screening4.cinema, function(err, cinema4) {
    // SCREENING 5
    Screening.findById('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
    Movie.findById(screening5.movie, function(err, movie5) {
    Cinema.findById(screening5.cinema, function(err, cinema5) {
    // SCREENING 6
    Screening.findById('5e8698471c9d440000ec3b07', function(err, screening6) {
    Movie.findById(screening6.movie, function(err, movie6) {
    Cinema.findById(screening6.cinema, function(err, cinema6) {
    // SCREENING 7
    Screening.findById('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
    Movie.findById(screening7.movie, function(err, movie7) {
    Cinema.findById(screening7.cinema, function(err, cinema7) {
    // SCREENING 7
    Screening.findById('5e87005f1c9d440000ec3b21', function(err, screening8) {
    Movie.findById(screening8.movie, function(err, movie8) {
    Cinema.findById(screening8.cinema, function(err, cinema8) {
        
    res.render('schedules', {
      title: 'W&Js Cinemas Schedules',
      titledesc: 'Reserve seats based on your preferred schedule.',

      // SCREENING 1
      img_url: movie1.img_url,
      name: movie1.name,
      rating: movie1.rating,
      cinema: cinema1.cinemanum,
      price: movie1.price,
      date: screening1.dates,
      timeslots: screening1.timeslots,

      //SCREENING 2
      img_url2: movie2.img_url,
      name2: movie2.name,
      rating2: movie2.rating,
      cinema2: cinema2.cinemanum,
      price2: movie2.price,
      date2: screening2.dates,
      timeslots2: screening2.timeslots,

      //SCREENING 3
      img_url3: movie3.img_url,
      name3: movie3.name,
      rating3: movie3.rating,
      cinema3: cinema3.cinemanum,
      price3: movie3.price,
      date3: screening3.dates,
      timeslots3: screening3.timeslots,

      //SCREENING 4
      img_url4: movie4.img_url,
      name4: movie4.name,
      rating4: movie4.rating,
      cinema4: cinema4.cinemanum,
      price4: movie4.price,
      date4: screening4.dates,
      timeslots4: screening4.timeslots,

      //SCREENING 5
      img_url5: movie5.img_url,
      name5: movie5.name,
      rating5: movie5.rating,
      cinema5: cinema5.cinemanum,
      price5: movie5.price,
      date5: screening5.dates,
      timeslots5: screening5.timeslots,

      //SCREENING 6
      img_url6: movie6.img_url,
      name6: movie6.name,
      rating6: movie6.rating,
      cinema6: cinema6.cinemanum,
      price6: movie6.price,
      date6: screening6.dates,
      timeslots6: screening6.timeslots,

      //SCREENING 7
      img_url7: movie7.img_url,
      name7: movie7.name,
      rating7: movie7.rating,
      cinema7: cinema7.cinemanum,
      price7: movie7.price,
      date7: screening7.dates,
      timeslots7: screening7.timeslots,

      //SCREENING 8
      img_url8: movie8.img_url,
      name8: movie8.name,
      rating8: movie8.rating,
      cinema8: cinema8.cinemanum,
      price8: movie8.price,
      date8: screening8.dates,
      timeslots8: screening8.timeslots
    })

    }); // screening 1
    }); // movie 1
    }); // cinema 1

    }); // screening 2
    }); // movie 2
    }); // cinema 2

    }); // screening 3
    }); // movie 3
    }); // cinema 3

    }); // screening 4
    }); // movie 4
    }); // cinema 4

    }); // screening 5
    }); // movie 5
    }); // cinema 5

    }); // screening 6
    }); // movie 6
    }); // cinema 6

    }); // screening 7
    }); // movie 7
    }); // cinema 7

    }); // screening 8
    }); // movie 8
    }); // cinema 8
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
      else if (user){
        console.log("User found");

        // Nested routes, so that all pages will have the user's data from the DB 

        // admin account
        if (user.utype === "Admin") {


          // admin home account (logged in) route
        app.get('/admin-home', function(req, res) {
          // The render function takes the template filename (no extension - that's what the config is for!)
          // and an object for what's needed in that template

          // check if there are reservations
          if (user.reservations[0]) {
          // NOW SHOWING ROW 1
          // SCREENING 1
          Screening.findById('5e86f3c71c9d440000ec3b19', function(err, screening1) {
          Movie.findById(screening1.movie, function(err, movie1) {
          Cinema.findById(screening1.cinema, function(err, cinema1) {
          // SCREENING 2
          Screening.findById('5e86fd761c9d440000ec3b1a', function(err, screening2) {
          Movie.findById(screening2.movie, function(err, movie2) {
          Cinema.findById(screening2.cinema, function(err, cinema2) {
          // SCREENING 3
          Screening.findById('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
          Movie.findById(screening3.movie, function(err, movie3) {
          Cinema.findById(screening3.cinema, function(err, cinema3) {
          // SCREENING 4
          Screening.findById('5e86fe201c9d440000ec3b1c', function(err, screening4) {
          Movie.findById(screening4.movie, function(err, movie4) {
          Cinema.findById(screening4.cinema, function(err, cinema4) {
          // SCREENING 5
          Screening.findById('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
          Movie.findById(screening5.movie, function(err, movie5) {
          Cinema.findById(screening5.cinema, function(err, cinema5) {
          // SCREENING 6
          Screening.findById('5e8698471c9d440000ec3b07', function(err, screening6) {
          Movie.findById(screening6.movie, function(err, movie6) {
          Cinema.findById(screening6.cinema, function(err, cinema6) {
          // SCREENING 7
          Screening.findById('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
          Movie.findById(screening7.movie, function(err, movie7) {
          Cinema.findById(screening7.cinema, function(err, cinema7) {
          // SCREENING 8
          Screening.findById('5e87005f1c9d440000ec3b21', function(err, screening8) {
          Movie.findById(screening8.movie, function(err, movie8) {
          Cinema.findById(screening8.cinema, function(err, cinema8) {

          // RESERVATIONS
          Reservation.findById(user.reservations[0], function(err, reservation1) {
          Reservation.findById(user.reservations[1], function(err, reservation2) {
          Reservation.findById(user.reservations[2], function(err, reservation3) {
          Reservation.findById(user.reservations[3], function(err, reservation4) {
          Reservation.findById(user.reservations[4], function(err, reservation5) {
          Reservation.findById(user.reservations[5], function(err, reservation6) {
          Reservation.findById(user.reservations[6], function(err, reservation7) {
          Reservation.findById(user.reservations[7], function(err, reservation8) {

          // COMING SOON ROW 1
          Movie.findById('5e86a7a31c9d440000ec3b0a', function(err, movie9) {
          Movie.findById('5e86a99a1c9d440000ec3b0b', function(err, movie10) {
          Movie.findById('5e86ab4a1c9d440000ec3b0c', function(err, movie11) {
          Movie.findById('5e86ad0a1c9d440000ec3b0d', function(err, movie12) {
          // COMING SOON ROW 2
          Movie.findById('5e86ae8c1c9d440000ec3b0e', function(err, movie13) {
          Movie.findById('5e86b0e61c9d440000ec3b0f', function(err, movie14) {
          
          res.render('admin-home', {
            layout: 'main-admin-ready',
            // NOW SHOWING
            name1: movie1.name,
            name2: movie2.name,
            name3: movie3.name,
            name4: movie4.name,
            name5: movie5.name,
            name6: movie6.name,
            name7: movie7.name,
            name8: movie8.name,

            shortdesc1: movie1.shortdesc,
            shortdesc2: movie2.shortdesc,
            shortdesc3: movie3.shortdesc,
            shortdesc4: movie4.shortdesc,
            shortdesc5: movie5.shortdesc,
            shortdesc6: movie6.shortdesc,
            shortdesc7: movie7.shortdesc,
            shortdesc8: movie8.shortdesc,

            // COMING SOON
            name9: movie9.name,
            name9: movie9.name,
            name10: movie10.name,
            name10: movie10.name,
            name11: movie11.name,
            name12: movie12.name,
            name13: movie13.name,
            name14: movie14.name,
            // Cinema numbers
            cinema1: cinema1.cinemanum,
            cinema2: cinema2.cinemanum,
            cinema3: cinema3.cinemanum,
            cinema4: cinema4.cinemanum,
            cinema5: cinema5.cinemanum,
            cinema6: cinema6.cinemanum,
            cinema7: cinema7.cinemanum,
            cinema8: cinema8.cinemanum,

            // Date start and end
            dates1: screening1.dates,
            dates2: screening2.dates,
            dates3: screening3.dates,
            dates4: screening4.dates,
            dates5: screening5.dates,
            dates6: screening6.dates,
            dates7: screening7.dates,
            dates8: screening8.dates,
           
            // timeslots
            timeslots1: screening1.timeslots,
            timeslots2: screening2.timeslots,
            timeslots3: screening3.timeslots,
            timeslots4: screening4.timeslots,
            timeslots5: screening5.timeslots,
            timeslots6: screening6.timeslots,
            timeslots7: screening7.timeslots,
            timeslots8: screening8.timeslots,

            // ratings
            rating1: movie1.rating,
            rating2: movie2.rating,
            rating3: movie3.rating,
            rating4: movie4.rating,
            rating5: movie5.rating,
            rating6: movie6.rating,
            rating7: movie7.rating,
            rating8: movie8.rating,
            rating9: movie9.rating,
            rating10: movie10.rating,
            rating11: movie11.rating,
            rating12: movie12.rating,
            rating13: movie13.rating,
            rating14: movie14.rating,

            // reservations

            reservationid: reservation1._id,
            price: reservation1.totalprice,
            date: reservation1.date_chosen,
            time: reservation1.time_chosen,
            tickets: reservation1.reserved_seats,

            reservationid2: reservation2._id,
            price2: reservation2.totalprice,
            date2: reservation2.date_chosen,
            time2: reservation2.time_chosen,
            tickets2: reservation2.reserved_seats,

            reservationid3: reservation3._id,
            price3: reservation3.totalprice,
            date3: reservation3.date_chosen,
            time3: reservation3.time_chosen,
            tickets3: reservation3.reserved_seats,

            reservationid4: reservation4._id,
            price4: reservation4.totalprice,
            date4: reservation4.date_chosen,
            time4: reservation4.time_chosen,
            tickets4: reservation4.reserved_seats,

            reservationid5: reservation5._id,
            price5: reservation5.totalprice,
            date5: reservation5.date_chosen,
            time5: reservation5.time_chosen,
            tickets5: reservation5.reserved_seats,

            reservationid6: reservation6._id,
            price6: reservation6.totalprice,
            date6: reservation6.date_chosen,
            time6: reservation6.time_chosen,
            tickets6: reservation6.reserved_seats,

            reservationid7: reservation7._id,
            price7: reservation7.totalprice,
            date7: reservation7.date_chosen,
            time7: reservation7.time_chosen,
            tickets7: reservation7.reserved_seats,

            reservationid8: reservation8._id,
            price8: reservation8.totalprice,
            date8: reservation8.date_chosen,
            time8: reservation8.time_chosen,
            tickets8: reservation8.reserved_seats

          })

        }); // screening 1
        }); // movie 1
        }); // cinema 1
      
        }); // screening 2
        }); // movie 2
        }); // cinema 2
      
        }); // screening 3
        }); // movie 3
        }); // cinema 3
      
        }); // screening 4
        }); // movie 4
        }); // cinema 4
      
        }); // screening 5
        }); // movie 5
        }); // cinema 5
      
        }); // screening 6
        }); // movie 6
        }); // cinema 6
      
        }); // screening 7
        }); // movie 7
        }); // cinema 7
      
        }); // screening 8
        }); // movie 8
        }); // cinema 8

        });
        });
        });
        });
        });
        });
        });
        });
        

        }); // movie 9
        }); // movie 10
        }); // movie 11
        }); // movie 12
        }); // movie 13
        }); // movie 14

        }

        // if there are no reservations (if else prevents error page)
        else {
           // NOW SHOWING ROW 1
           // SCREENING 1
            Screening.findById('5e86f3c71c9d440000ec3b19', function(err, screening1) {
            Movie.findById(screening1.movie, function(err, movie1) {
            Cinema.findById(screening1.cinema, function(err, cinema1) {
            // SCREENING 2
            Screening.findById('5e86fd761c9d440000ec3b1a', function(err, screening2) {
            Movie.findById(screening2.movie, function(err, movie2) {
            Cinema.findById(screening2.cinema, function(err, cinema2) {
            // SCREENING 3
            Screening.findById('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
            Movie.findById(screening3.movie, function(err, movie3) {
            Cinema.findById(screening3.cinema, function(err, cinema3) {
            // SCREENING 4
            Screening.findById('5e86fe201c9d440000ec3b1c', function(err, screening4) {
            Movie.findById(screening4.movie, function(err, movie4) {
            Cinema.findById(screening4.cinema, function(err, cinema4) {
            // SCREENING 5
            Screening.findById('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
            Movie.findById(screening5.movie, function(err, movie5) {
            Cinema.findById(screening5.cinema, function(err, cinema5) {
            // SCREENING 6
            Screening.findById('5e8698471c9d440000ec3b07', function(err, screening6) {
            Movie.findById(screening6.movie, function(err, movie6) {
            Cinema.findById(screening6.cinema, function(err, cinema6) {
            // SCREENING 7
            Screening.findById('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
            Movie.findById(screening7.movie, function(err, movie7) {
            Cinema.findById(screening7.cinema, function(err, cinema7) {
            // SCREENING 8
            Screening.findById('5e87005f1c9d440000ec3b21', function(err, screening8) {
            Movie.findById(screening8.movie, function(err, movie8) {
            Cinema.findById(screening8.cinema, function(err, cinema8) {

            // COMING SOON ROW 1
            Movie.findById('5e86a7a31c9d440000ec3b0a', function(err, movie9) {
            Movie.findById('5e86a99a1c9d440000ec3b0b', function(err, movie10) {
            Movie.findById('5e86ab4a1c9d440000ec3b0c', function(err, movie11) {
            Movie.findById('5e86ad0a1c9d440000ec3b0d', function(err, movie12) {
            // COMING SOON ROW 2
            Movie.findById('5e86ae8c1c9d440000ec3b0e', function(err, movie13) {
            Movie.findById('5e86b0e61c9d440000ec3b0f', function(err, movie14) {

          res.render('admin-home2', {
            layout: 'main-admin-ready',
            uname: user.uname,
            fname: user.fname,
            lname: user.lname,
            mnum: user.mnum,
            email: user.email,

            // NOW SHOWING
            name1: movie1.name,
            name2: movie2.name,
            name3: movie3.name,
            name4: movie4.name,
            name5: movie5.name,
            name6: movie6.name,
            name7: movie7.name,
            name8: movie8.name,

            // COMING SOON
            name9: movie9.name,
            name9: movie9.name,
            name10: movie10.name,
            name10: movie10.name,
            name11: movie11.name,
            name12: movie12.name,
            name13: movie13.name,
            name14: movie14.name,
            // Cinema numbers
            cinema1: cinema1.cinemanum,
            cinema2: cinema2.cinemanum,
            cinema3: cinema3.cinemanum,
            cinema4: cinema4.cinemanum,
            cinema5: cinema5.cinemanum,
            cinema6: cinema6.cinemanum,
            cinema7: cinema7.cinemanum,
            cinema8: cinema8.cinemanum,

            // Date start and end
            date1start: screening1.dates[0],
            date1end: screening1.dates[4],
            date2start: screening2.dates[0],
            date2end: screening2.dates[4],
            date3start: screening3.dates[0],
            date3end: screening3.dates[4],
            date4start: screening4.dates[0],
            date4end: screening4.dates[4],
            date5start: screening5.dates[0],
            date5end: screening5.dates[4],
            date6start: screening6.dates[0],
            date6end: screening6.dates[4],
            date7start: screening7.dates[0],
            date7end: screening7.dates[4],
            date8start: screening8.dates[0],
            date8end: screening8.dates[4],

            // timeslots
            timeslots1: screening1.timeslots,
            timeslots2: screening2.timeslots,
            timeslots3: screening3.timeslots,
            timeslots4: screening4.timeslots,
            timeslots5: screening5.timeslots,
            timeslots6: screening6.timeslots,
            timeslots7: screening7.timeslots,
            timeslots8: screening8.timeslots,

            // ratings
            rating1: movie1.rating,
            rating2: movie2.rating,
            rating3: movie3.rating,
            rating4: movie4.rating,
            rating5: movie5.rating,
            rating6: movie6.rating,
            rating7: movie7.rating,
            rating8: movie8.rating,
            rating9: movie9.rating,
            rating10: movie10.rating,
            rating11: movie11.rating,
            rating12: movie12.rating,
            rating13: movie13.rating,
            rating14: movie14.rating


          })
          
          }); // screening 1
          }); // movie 1
          }); // cinema 1
        
          }); // screening 2
          }); // movie 2
          }); // cinema 2
        
          }); // screening 3
          }); // movie 3
          }); // cinema 3
        
          }); // screening 4
          }); // movie 4
          }); // cinema 4
        
          }); // screening 5
          }); // movie 5
          }); // cinema 5
        
          }); // screening 6
          }); // movie 6
          }); // cinema 6
        
          }); // screening 7
          }); // movie 7
          }); // cinema 7
        
          }); // screening 8
          }); // movie 8
          }); // cinema 8

          }); // movie 9
          }); // movie 10
          }); // movie 11
          }); // movie 12
          }); // movie 13
          }); // movie 14
        }

        });

        // admin my account (logged in) route
        app.get('/adminaccount', function(req, res) {
          // The render function takes the template filename (no extension - that's what the config is for!)
          // and an object for what's needed in that template
          res.render('adminaccount', {
            layout: 'main-admin-ready',
            uname: user.uname,
            fname: user.fname,
            lname: user.lname,
            mnum: user.mnum,
            email: user.email

          })
        });

          // redirect to admin page
          res.redirect('http://localhost:3000/admin-home');

        }
         

        // regular account
        else if (user.utype === "Regular") {

          // redirect to home page
          res.redirect('http://localhost:3000/myaccount');


          // Home (logged in) route
          app.get('/home', function(req, res) {
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
          res.render('home-ready', {
            layout: 'main-regular-ready',
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

          // myaccount (logged in) route
          app.get('/myaccount', function(req, res) {
            // The render function takes the template filename (no extension - that's what the config is for!)
            // and an object for what's needed in that template

            // check if there are reservations
            if (user.reservations[0]) {

            Reservation.findById(user.reservations[0], function(err, reservation1) {
            Screening.findById(reservation1.screening, function(err, screening1) {
            Cinema.findById(screening1.cinema, function(err, cinema1) {
            Movie.findById(screening1.movie, function(err, movie1) {

            Reservation.findById(user.reservations[1], function(err, reservation2) {
            Screening.findById(reservation2.screening, function(err, screening2) {
            Cinema.findById(screening2.cinema, function(err, cinema2) {
            Movie.findById(screening2.movie, function(err, movie2) {

            Reservation.findById(user.reservations[2], function(err, reservation3) {
            Screening.findById(reservation3.screening, function(err, screening3) {
            Cinema.findById(screening3.cinema, function(err, cinema3) {
            Movie.findById(screening3.movie, function(err, movie3) {

            Reservation.findById(user.reservations[3], function(err, reservation4) {
            Screening.findById(reservation4.screening, function(err, screening4) {
            Cinema.findById(screening4.cinema, function(err, cinema4) {
            Movie.findById(screening4.movie, function(err, movie4) {

            Reservation.findById(user.reservations[4], function(err, reservation5) {
            Screening.findById(reservation5.screening, function(err, screening5) {
            Cinema.findById(screening5.cinema, function(err, cinema5) {
            Movie.findById(screening5.movie, function(err, movie5) {

            Reservation.findById(user.reservations[5], function(err, reservation6) {
            Screening.findById(reservation6.screening, function(err, screening6) {
            Cinema.findById(screening6.cinema, function(err, cinema6) {
            Movie.findById(screening6.movie, function(err, movie6) {

            Reservation.findById(user.reservations[6], function(err, reservation7) {
            Screening.findById(reservation7.screening, function(err, screening7) {
            Cinema.findById(screening7.cinema, function(err, cinema7) {
            Movie.findById(screening7.movie, function(err, movie7) {

            Reservation.findById(user.reservations[7], function(err, reservation8) {
            Screening.findById(reservation8.screening, function(err, screening8) {
            Cinema.findById(screening8.cinema, function(err, cinema8) {
            Movie.findById(screening8.movie, function(err, movie8) {

          
            res.render('myaccount', {
              layout: 'main-regular-ready',
              fname: user.fname,
              fname: user.fname,
              lname: user.lname,
              mnum: user.mnum,
              email: user.email,

            
              date: reservation1.date_chosen,
              time: reservation1.time_chosen,
              movie: movie1.name,
              cinema: cinema1.cinemanum,
              seats: reservation1.reserved_seats,
              status: reservation1.status,

              date2: reservation2.date_chosen,
              time2: reservation2.time_chosen,
              movie2: movie2.name,
              cinema2: cinema2.cinemanum,
              seats2: reservation2.reserved_seats,
              status2: reservation2.status,

              date3: reservation3.date_chosen,
              time3: reservation3.time_chosen,
              movie3: movie3.name,
              cinema3: cinema3.cinemanum,
              seats3: reservation3.reserved_seats,
              status3: reservation3.status,

              date4: reservation4.date_chosen,
              time4: reservation4.time_chosen,
              movie4: movie4.name,
              cinema4: cinema4.cinemanum,
              seats4: reservation4.reserved_seats,
              status4: reservation4.status,

              date5: reservation5.date_chosen,
              time5: reservation5.time_chosen,
              movie5: movie5.name,
              cinema5: cinema5.cinemanum,
              seats5: reservation5.reserved_seats,
              status5: reservation5.status,

              date6: reservation6.date_chosen,
              time6: reservation6.time_chosen,
              movie6: movie6.name,
              cinema6: cinema6.cinemanum,
              seats6: reservation6.reserved_seats,
              status6: reservation6.status,

              date7: reservation7.date_chosen,
              time7: reservation7.time_chosen,
              movie7: movie7.name,
              cinema7: cinema7.cinemanum,
              seats7: reservation7.reserved_seats,
              status7: reservation7.status,

              date8: reservation1.date_chosen,
              time8: reservation8.time_chosen,
              movie8: movie8.name,
              cinema8: cinema8.cinemanum,
              seats8: reservation8.reserved_seats,
              status8: reservation8.status
        
            })
          
          });
          });
          });
          });
        
          });
          });
          });
          });

          });
          });
          });
          });

          });
          });
          });
          });

          });
          });
          });
          });

          });
          });
          });
          });

          });
          });
          });
          });

          });
          });
          });
          });

          }

          // if there are no reservations (prevents error page)
          else {
            res.render('myaccount2', {
              layout: 'main-regular-ready',
              fname: user.fname,
              fname: user.fname,
              lname: user.lname,
              mnum: user.mnum,
              email: user.email

            })
          }
        
          });

          // Schedules (logged in) route
          app.get('/schedules-ready', function(req, res) {
            // The render function takes the template filename (no extension - that's what the config is for!)
            // and an object for what's needed in that template
            // SCREENING 1
            Screening.findById('5e86f3c71c9d440000ec3b19', function(err, screening1) {
            Movie.findById(screening1.movie, function(err, movie1) {
            Cinema.findById(screening1.cinema, function(err, cinema1) {
            // SCREENING 2
            Screening.findById('5e86fd761c9d440000ec3b1a', function(err, screening2) {
            Movie.findById(screening2.movie, function(err, movie2) {
            Cinema.findById(screening2.cinema, function(err, cinema2) {
            // SCREENING 3
            Screening.findById('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
            Movie.findById(screening3.movie, function(err, movie3) {
            Cinema.findById(screening3.cinema, function(err, cinema3) {
            // SCREENING 4
            Screening.findById('5e86fe201c9d440000ec3b1c', function(err, screening4) {
            Movie.findById(screening4.movie, function(err, movie4) {
            Cinema.findById(screening4.cinema, function(err, cinema4) {
            // SCREENING 5
            Screening.findById('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
            Movie.findById(screening5.movie, function(err, movie5) {
            Cinema.findById(screening5.cinema, function(err, cinema5) {
            // SCREENING 6
            Screening.findById('5e8698471c9d440000ec3b07', function(err, screening6) {
            Movie.findById(screening6.movie, function(err, movie6) {
            Cinema.findById(screening6.cinema, function(err, cinema6) {
            // SCREENING 7
            Screening.findById('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
            Movie.findById(screening7.movie, function(err, movie7) {
            Cinema.findById(screening7.cinema, function(err, cinema7) {
            // SCREENING 7
            Screening.findById('5e87005f1c9d440000ec3b21', function(err, screening8) {
            Movie.findById(screening8.movie, function(err, movie8) {
            Cinema.findById(screening8.cinema, function(err, cinema8) {
            
            res.render('schedules-ready', {
              title: 'W&Js Cinemas Schedules',
              titledesc: 'Reserve seats based on your preferred schedule.',
              layout: 'main-regular-ready',
        
              // SCREENING 1
              img_url: movie1.img_url,
              name: movie1.name,
              rating: movie1.rating,
              cinema: cinema1.cinemanum,
              price: movie1.price,
              date: screening1.dates,
              timeslots: screening1.timeslots,
        
              //SCREENING 2
              img_url2: movie2.img_url,
              name2: movie2.name,
              rating2: movie2.rating,
              cinema2: cinema2.cinemanum,
              price2: movie2.price,
              date2: screening2.dates,
              timeslots2: screening2.timeslots,
        
              //SCREENING 3
              img_url3: movie3.img_url,
              name3: movie3.name,
              rating3: movie3.rating,
              cinema3: cinema3.cinemanum,
              price3: movie3.price,
              date3: screening3.dates,
              timeslots3: screening3.timeslots,
              
              //SCREENING 4
              img_url4: movie4.img_url,
              name4: movie4.name,
              rating4: movie4.rating,
              cinema4: cinema4.cinemanum,
              price4: movie4.price,
              date4: screening4.dates,
              timeslots4: screening4.timeslots,
        
              //SCREENING 5
              img_url5: movie5.img_url,
              name5: movie5.name,
              rating5: movie5.rating,
              cinema5: cinema5.cinemanum,
              price5: movie5.price,
              date5: screening5.dates,
              timeslots5: screening5.timeslots,
        
              //SCREENING 6
              img_url6: movie6.img_url,
              name6: movie6.name,
              rating6: movie6.rating,
              cinema6: cinema6.cinemanum,
              price6: movie6.price,
              date6: screening6.dates,
              timeslots6: screening6.timeslots,
        
              //SCREENING 7
              img_url7: movie7.img_url,
              name7: movie7.name,
              rating7: movie7.rating,
              cinema7: cinema7.cinemanum,
              price7: movie7.price,
              date7: screening7.dates,
              timeslots7: screening7.timeslots,
        
              //SCREENING 8
              img_url8: movie8.img_url,
              name8: movie8.name,
              rating8: movie8.rating,
              cinema8: cinema8.cinemanum,
              price8: movie8.price,
              date8: screening8.dates,
              timeslots8: screening8.timeslots
            })
        
            }); // screening 1
            }); // movie 1
            }); // cinema 1
        
            }); // screening 2
            }); // movie 2
            }); // cinema 2
        
            }); // screening 3
            }); // movie 3
            }); // cinema 3
        
            }); // screening 4
            }); // movie 4
            }); // cinema 4
        
            }); // screening 5
            }); // movie 5
            }); // cinema 5
        
            }); // screening 6
            }); // movie 6
            }); // cinema 6
        
            }); // screening 7
            }); // movie 7
            }); // cinema 7
        
            }); // screening 8
            }); // movie 8
            }); // cinema 8
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
app.get('/reserve-movie1', function(req,res) {
  Screening.findById('5e86f3c71c9d440000ec3b19', function(err, screening1) {
  Movie.findById(screening1.movie, function(err, movie1) {
  Cinema.findById(screening1.cinema, function(err, cinema1) {
    res.render('reserve',{
        layout: 'main-regular-ready',
        movieTitle: movie1.name,
        cinema: cinema1.cinemanum,
        details: movie1.shortdesc,
        timeslots: screening1.timeslots,
        dates: screening1.dates,
        tickets_url: screening1.tickets_url,
        post_url: "/make-reservation-s1"
    })

    app.post('/make-reservation-s1', function(req,res) {
      /** == README == **
          Instead of passing an object, we now have a mongoose.Document object
          because we created an instance of the usersModel.
        **/

       var reservation = new Reservation ({
        screening: screening1._id,
        movie: movie1._id,
        reserved_seats: req.body.seats,
        date_chosen: req.body.datepicker,
        time_chosen: req.body.timepicker
          // Potential error: there's no validation for gender on the client side
      });
    
      /** == README == **
        Directly calling save for the instance of the Document.
      **/
      reservation.save(function(err, reservation) {
        var result;
    
        /** == README == **
          Added error handling! Check out the object printed out in the console.
          (Try clicking Add User when the name or id is blank)
        **/
        if (err) {
          console.log(err.errors);
    
          result = { success: false, message: "Reservation was not created!" }
          res.send(result);
          // throw err; // This is commented so that the server won't be killed.
        } else {
          console.log("Successfully added reservation!");
          console.log(reservation); // Check out the logs and see there's a new __v attribute!
    
          // Let's create a custom response that the user was created successfully
          result = { success: true, message: "Reservation created!" }
    
          // Sending the result as is to handle it the "AJAX-way".
         // res.send(result);
         res.redirect('http://localhost:3000/reserve-tickets-s1');

        }
          
      });

     

    });
     
  });
  });
  });
  
});

// 1917 tickets page
app.get('/reserve-tickets-s1', function(req,res) {
    Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation1) { 
    Screening.findById(reservation1.screening, function(err, screening1) {
    Cinema.findById(screening1.cinema, function(err, cinema1) {
    Movie.findById(screening1.movie, function(err, movie1) {
    
    res.render('tickets', {
    layout: 'main-regular-ready',
    reservationid: reservation1._id,
    movie: movie1.name,
    cinema: cinema1.cinemanum,
    price: reservation1.totalprice,
    date: reservation1.date_chosen,
    time: reservation1.time_chosen,
    tickets: reservation1.reserved_seats

  })

});
});
});
});

});

// Parasite reserve route
app.get('/reserve-movie2', function(req,res) {
    Screening.findById('5e86fd761c9d440000ec3b1a', function(err, screening2) {
    Movie.findById(screening2.movie, function(err, movie2) {
    Cinema.findById(screening2.cinema, function(err, cinema2) {
      res.render('reserve',{
          layout: 'main-regular-ready',
          movieTitle: movie2.name,
          cinema: cinema2.cinemanum,
          details: movie2.shortdesc,
          timeslots: screening2.timeslots,
          dates: screening2.dates,
          tickets_url: screening2.tickets_url,
          post_url: "/make-reservation-s2"
      })

      
    app.post('/make-reservation-s2', function(req,res) {
      /** == README == **
          Instead of passing an object, we now have a mongoose.Document object
          because we created an instance of the usersModel.
        **/
       

      
       var reservation = new Reservation ({
        screening: screening2._id,
        movie: movie2._id,
        reserved_seats: req.body.seats,
        date_chosen: req.body.datepicker,
        time_chosen: req.body.timepicker
          // Potential error: there's no validation for gender on the client side
      });
    
      /** == README == **
        Directly calling save for the instance of the Document.
      **/
      reservation.save(function(err, reservation) {
        var result;
    
        /** == README == **
          Added error handling! Check out the object printed out in the console.
          (Try clicking Add User when the name or id is blank)
        **/
        if (err) {
          console.log(err.errors);
    
          result = { success: false, message: "Reservation was not created!" }
          res.send(result);
          // throw err; // This is commented so that the server won't be killed.
        } else {
          console.log("Successfully added reservation!");
          console.log(reservation); // Check out the logs and see there's a new __v attribute!
    
          // Let's create a custom response that the user was created successfully
          result = { success: true, message: "Reservation created!" }
    
          // Sending the result as is to handle it the "AJAX-way".
          //res.send(result);
          res.redirect('http://localhost:3000/reserve-tickets-s2');
        }
    
      });
    
    })


    });
    });
    });
  
});

// Parasite tickets page
app.get('/reserve-tickets-s2', function(req,res) {
  Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation2) { 
  Screening.findById(reservation2.screening, function(err, screening2) {
  Cinema.findById(screening2.cinema, function(err, cinema2) {
  Movie.findById(screening2.movie, function(err, movie2) {
  
  res.render('tickets', {
  layout: 'main-regular-ready',
  reservationid: reservation2._id,
  movie: movie2.name,
  cinema: cinema2.cinemanum,
  price: reservation2.totalprice,
  date: reservation2.date_chosen,
  time: reservation2.time_chosen,
  tickets: reservation2.reserved_seats

})

});
});
});
});

});

// Sonic reserve route
app.get('/reserve-movie3', function(req,res) {
    Screening.findById('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
    Movie.findById(screening3.movie, function(err, movie3) {
    Cinema.findById(screening3.cinema, function(err, cinema3) {
      res.render('reserve',{
          layout: 'main-regular-ready',
          movieTitle: movie3.name,
          cinema: cinema3.cinemanum,
          details: movie3.shortdesc,
          timeslots: screening3.timeslots,
          dates: screening3.dates,
          tickets_url: screening3.tickets_url,
          post_url: "/make-reservation-s3"
      })

      app.post('/make-reservation-s3', function(req,res) {
        /** == README == **
            Instead of passing an object, we now have a mongoose.Document object
            because we created an instance of the usersModel.
          **/
         
        
         var reservation = new Reservation ({
          screening: screening3._id,
          movie: movie3._id,
          reserved_seats: req.body.seats,
          date_chosen: req.body.datepicker,
          time_chosen: req.body.timepicker
            // Potential error: there's no validation for gender on the client side
        });
      
        /** == README == **
          Directly calling save for the instance of the Document.
        **/
        reservation.save(function(err, reservation) {
          var result;
      
          /** == README == **
            Added error handling! Check out the object printed out in the console.
            (Try clicking Add User when the name or id is blank)
          **/
          if (err) {
            console.log(err.errors);
      
            result = { success: false, message: "Reservation was not created!" }
            res.send(result);
            // throw err; // This is commented so that the server won't be killed.
          } else {
            console.log("Successfully added reservation!");
            console.log(reservation); // Check out the logs and see there's a new __v attribute!
      
            // Let's create a custom response that the user was created successfully
            result = { success: true, message: "Reservation created!" }
      
            // Sending the result as is to handle it the "AJAX-way".
            //res.send(result);
            res.redirect('http://localhost:3000/reserve-tickets-s3');
          }
      
        });
      
      })
      
    });
    });
    });
});

// Sonic tickets page
app.get('/reserve-tickets-s3', function(req,res) {
  Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation3) { 
  Screening.findById(reservation3.screening, function(err, screening3) {
  Cinema.findById(screening3.cinema, function(err, cinema3) {
  Movie.findById(screening3.movie, function(err, movie3) {
  
  res.render('tickets', {
  layout: 'main-regular-ready',
  reservationid: reservation3._id,
  movie: movie3.name,
  cinema: cinema3.cinemanum,
  price: reservation3.totalprice,
  date: reservation3.date_chosen,
  time: reservation3.time_chosen,
  tickets: reservation3.reserved_seats

})

});
});
});
});

})

// BOP reserve route
app.get('/reserve-movie4', function(req,res) {
    Screening.findById('5e86fe201c9d440000ec3b1c', function(err, screening4) {
    Movie.findById(screening4.movie, function(err, movie4) {
    Cinema.findById(screening4.cinema, function(err, cinema4) {
      res.render('reserve',{
          layout: 'main-regular-ready',
          movieTitle: movie4.name,
          cinema: cinema4.cinemanum,
          details: movie4.shortdesc,
          timeslots: screening4.timeslots,
          dates: screening4.dates,
          tickets_url: screening4.tickets_url,
          post_url: "/make-reservation-s4"
      })

      app.post('/make-reservation-s4', function(req,res) {
        /** == README == **
            Instead of passing an object, we now have a mongoose.Document object
            because we created an instance of the usersModel.
          **/
        
         var reservation = new Reservation ({
          screening: screening4._id,
          movie: movie4._id,
          reserved_seats: req.body.seats,
          date_chosen: req.body.datepicker,
          time_chosen: req.body.timepicker
            // Potential error: there's no validation for gender on the client side
        });
      
        /** == README == **
          Directly calling save for the instance of the Document.
        **/
        reservation.save(function(err, reservation) {
          var result;
      
          /** == README == **
            Added error handling! Check out the object printed out in the console.
            (Try clicking Add User when the name or id is blank)
          **/
          if (err) {
            console.log(err.errors);
      
            result = { success: false, message: "Reservation was not created!" }
            res.send(result);
            // throw err; // This is commented so that the server won't be killed.
          } else {
            console.log("Successfully added reservation!");
            console.log(reservation); // Check out the logs and see there's a new __v attribute!
      
            // Let's create a custom response that the user was created successfully
            result = { success: true, message: "Reservation created!" }
      
            // Sending the result as is to handle it the "AJAX-way".
            //res.send(result);
            res.redirect('http://localhost:3000/reserve-tickets-s4');
          }
      
        });
      
      })

    });
    });
    });
});

// BOP tickets page
app.get('/reserve-tickets-s4', function(req,res) {
  Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation4) { 
  Screening.findById(reservation4.screening, function(err, screening4) {
  Cinema.findById(screening4.cinema, function(err, cinema4) {
  Movie.findById(screening4.movie, function(err, movie4) {
  
  res.render('tickets', {
  layout: 'main-regular-ready',
  reservationid: reservation4._id,
  movie: movie4.name,
  cinema: cinema4.cinemanum,
  price: reservation4.totalprice,
  date: reservation4.date_chosen,
  time: reservation4.time_chosen,
  tickets: reservation4.reserved_seats

})

});
});
});
});

});

// Bad Boys for Life reserve route
app.get('/reserve-movie5', function(req,res) {
    Screening.findById('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
    Movie.findById(screening5.movie, function(err, movie5) {
    Cinema.findById(screening5.cinema, function(err, cinema5) {
      res.render('reserve',{
          layout: 'main-regular-ready',
          movieTitle: movie5.name,
          cinema: cinema5.cinemanum,
          details: movie5.shortdesc,
          timeslots: screening5.timeslots,
          dates: screening5.dates,
          tickets_url: screening5.tickets_url,
          post_url: "/make-reservation-s5"
      })

      app.post('/make-reservation-s5', function(req,res) {
        /** == README == **
            Instead of passing an object, we now have a mongoose.Document object
            because we created an instance of the usersModel.
          **/
        
         var reservation = new Reservation ({
          screening: screening5._id,
          movie: movie5._id,
          reserved_seats: req.body.seats,
          date_chosen: req.body.datepicker,
          time_chosen: req.body.timepicker
            // Potential error: there's no validation for gender on the client side
        });
      
        /** == README == **
          Directly calling save for the instance of the Document.
        **/
        reservation.save(function(err, reservation) {
          var result;
      
          /** == README == **
            Added error handling! Check out the object printed out in the console.
            (Try clicking Add User when the name or id is blank)
          **/
          if (err) {
            console.log(err.errors);
      
            result = { success: false, message: "Reservation was not created!" }
            res.send(result);
            // throw err; // This is commented so that the server won't be killed.
          } else {
            console.log("Successfully added reservation!");
            console.log(reservation); // Check out the logs and see there's a new __v attribute!
      
            // Let's create a custom response that the user was created successfully
            result = { success: true, message: "Reservation created!" }
      
            // Sending the result as is to handle it the "AJAX-way".
            //res.send(result);
            res.redirect('http://localhost:3000/reserve-tickets-s5');
          }
      
        });
      
      })
    });
    });
    });
});

// Bad Boys for life tickets page
app.get('/reserve-tickets-s5', function(req,res) {
  Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation5) { 
  Screening.findById(reservation5.screening, function(err, screening5) {
  Cinema.findById(screening5.cinema, function(err, cinema5) {
  Movie.findById(screening5.movie, function(err, movie5) {
  
  res.render('tickets', {
  layout: 'main-regular-ready',
  reservationid: reservation5._id,
  movie: movie5.name,
  cinema: cinema5.cinemanum,
  price: reservation5.totalprice,
  date: reservation5.date_chosen,
  time: reservation5.time_chosen,
  tickets: reservation5.reserved_seats

})

});
});
});
});

});

// DoLittle reserve route
app.get('/reserve-movie6', function(req,res) {
    Screening.findById('5e8698471c9d440000ec3b07', function(err, screening6) {
    Movie.findById(screening6.movie, function(err, movie6) {
    Cinema.findById(screening6.cinema, function(err, cinema6) {
      res.render('reserve',{
          layout: 'main-regular-ready',
          movieTitle: movie6.name,
          cinema: cinema6.cinemanum,
          details: movie6.shortdesc,
          timeslots: screening6.timeslots,
          dates: screening6.dates,
          tickets_url: screening6.tickets_url,
          post_url: "/make-reservation-s6"
      })

      app.post('/make-reservation-s6', function(req,res) {
        /** == README == **
            Instead of passing an object, we now have a mongoose.Document object
            because we created an instance of the usersModel.
          **/
        
         var reservation = new Reservation ({
          screening: screening6._id,
          movie: movie6._id,
          reserved_seats: req.body.seats,
          date_chosen: req.body.datepicker,
          time_chosen: req.body.timepicker
            // Potential error: there's no validation for gender on the client side
        });
      
        /** == README == **
          Directly calling save for the instance of the Document.
        **/
        reservation.save(function(err, reservation) {
          var result;
      
          /** == README == **
            Added error handling! Check out the object printed out in the console.
            (Try clicking Add User when the name or id is blank)
          **/
          if (err) {
            console.log(err.errors);
      
            result = { success: false, message: "Reservation was not created!" }
            res.send(result);
            // throw err; // This is commented so that the server won't be killed.
          } else {
            console.log("Successfully added reservation!");
            console.log(reservation); // Check out the logs and see there's a new __v attribute!
      
            // Let's create a custom response that the user was created successfully
            result = { success: true, message: "Reservation created!" }
      
            // Sending the result as is to handle it the "AJAX-way".
            //res.send(result);
            res.redirect('http://localhost:3000/reserve-tickets-s6');
          }
      
        });
      
      })
    });
    });
    });
});

// DoLittle tickets page
app.get('/reserve-tickets-s6', function(req,res) {
  Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation6) { 
  Screening.findById(reservation6.screening, function(err, screening6) {
  Cinema.findById(screening6.cinema, function(err, cinema6) {
  Movie.findById(screening6.movie, function(err, movie6) {
  
  res.render('tickets', {
  layout: 'main-regular-ready',
  reservationid: reservation6._id,
  movie: movie6.name,
  cinema: cinema6.cinemanum,
  price: reservation6.totalprice,
  date: reservation6.date_chosen,
  time: reservation6.time_chosen,
  tickets: reservation6.reserved_seats

})

});
});
});
});

});

// The Night Clerk reserve route
app.get('/reserve-movie7', function(req,res) {
    Screening.findById('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
    Movie.findById(screening7.movie, function(err, movie7) {
    Cinema.findById(screening7.cinema, function(err, cinema7) {
      res.render('reserve',{
          layout: 'main-regular-ready',
          movieTitle: movie7.name,
          cinema: cinema7.cinemanum,
          details: movie7.shortdesc,
          timeslots: screening7.timeslots,
          dates: screening7.dates,
          tickets_url: screening7.tickets_url,
          post_url: "/make-reservation-s7"
      })

      app.post('/make-reservation-s7', function(req,res) {
        /** == README == **
            Instead of passing an object, we now have a mongoose.Document object
            because we created an instance of the usersModel.
          **/
        
         var reservation = new Reservation ({
          screening: screening7._id,
          movie: movie7._id,
          reserved_seats: req.body.seats,
          date_chosen: req.body.datepicker,
          time_chosen: req.body.timepicker
            // Potential error: there's no validation for gender on the client side
        });
      
        /** == README == **
          Directly calling save for the instance of the Document.
        **/
        reservation.save(function(err, reservation) {
          var result;
      
          /** == README == **
            Added error handling! Check out the object printed out in the console.
            (Try clicking Add User when the name or id is blank)
          **/
          if (err) {
            console.log(err.errors);
      
            result = { success: false, message: "Reservation was not created!" }
            res.send(result);
            // throw err; // This is commented so that the server won't be killed.
          } else {
            console.log("Successfully added reservation!");
            console.log(reservation); // Check out the logs and see there's a new __v attribute!
      
            // Let's create a custom response that the user was created successfully
            result = { success: true, message: "Reservation created!" }
      
            // Sending the result as is to handle it the "AJAX-way".
            //res.send(result);
            res.redirect('http://localhost:3000/reserve-tickets-s7');
          }
      
        });
      
      })
    });
    });
    });
});

// The Night Clerk tickets page
app.get('/reserve-tickets-s7', function(req,res) {
  Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation7) { 
  Screening.findById(reservation7.screening, function(err, screening7) {
  Cinema.findById(screening7.cinema, function(err, cinema7) {
  Movie.findById(screening7.movie, function(err, movie7) {
  
  res.render('tickets', {
  layout: 'main-regular-ready',
  reservationid: reservation7._id,
  movie: movie7.name,
  cinema: cinema7.cinemanum,
  price: reservation7.totalprice,
  date: reservation7.date_chosen,
  time: reservation7.time_chosen,
  tickets: reservation7.reserved_seats

})

});
});
});
});

});

// The Call of the Wild reserve route
app.get('/reserve-movie8', function(req,res) {
    Screening.findById('5e87005f1c9d440000ec3b21', function(err, screening8) {
    Movie.findById(screening8.movie, function(err, movie8) {
    Cinema.findById(screening8.cinema, function(err, cinema8) {
      res.render('reserve',{
          layout: 'main-regular-ready',
          movieTitle: movie8.name,
          cinema: cinema8.cinemanum,
          details: movie8.shortdesc,
          timeslots: screening8.timeslots,
          dates: screening8.dates,
          tickets_url: screening8.tickets_url,
          post_url: "/make-reservation-s8"
      })

      app.post('/make-reservation-s8', function(req,res) {
        /** == README == **
            Instead of passing an object, we now have a mongoose.Document object
            because we created an instance of the usersModel.
          **/
        
         var reservation = new Reservation ({
          screening: screening8._id,
          movie: movie8._id,
          reserved_seats: req.body.seats,
          date_chosen: req.body.datepicker,
          time_chosen: req.body.timepicker
            // Potential error: there's no validation for gender on the client side
        });
      
        /** == README == **
          Directly calling save for the instance of the Document.
        **/
        reservation.save(function(err, reservation) {
          var result;
      
          /** == README == **
            Added error handling! Check out the object printed out in the console.
            (Try clicking Add User when the name or id is blank)
          **/
          if (err) {
            console.log(err.errors);
      
            result = { success: false, message: "Reservation was not created!" }
            res.send(result);
            // throw err; // This is commented so that the server won't be killed.
          } else {
            console.log("Successfully added reservation!");
            console.log(reservation); // Check out the logs and see there's a new __v attribute!
      
            // Let's create a custom response that the user was created successfully
            result = { success: true, message: "Reservation created!" }
      
            // Sending the result as is to handle it the "AJAX-way".
            //res.send(result);
            res.redirect('http://localhost:3000/reserve-tickets-s8');
          }
      
        });
      
      })
    });
    });
    });
});

// The Call of the Wild tickets page
app.get('/reserve-tickets-s8', function(req,res) {
  Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation8) { 
  Screening.findById(reservation8.screening, function(err, screening8) {
  Cinema.findById(screening8.cinema, function(err, cinema8) {
  Movie.findById(screening8.movie, function(err, movie8) {
  
  res.render('tickets', {
  layout: 'main-regular-ready',
  reservationid: reservation8._id,
  movie: movie8.name,
  cinema: cinema8.cinemanum,
  price: reservation8.totalprice,
  date: reservation8.date_chosen,
  time: reservation8.time_chosen,
  tickets: reservation8.reserved_seats

})

});
});
});
});

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