const screeningModel = require('../models/screening');
const movieModel = require('../models/movie');
const cinemaModel = require('../models/cinema');
const reservationModel = require('../models/reservation');




/*============================RESERVE ROUTES============================*/ 

//1917 reserve screen
exports.show1917 = function(req, res) {
    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, screening1) {
    movieModel.showAll(screening1.movie, function(err, _1917) {
    cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
        res.render('reserve',{
            layout: 'main-regular',
            title: '1917 Reservation',
            movieTitle: _1917.name,
            cinema: cinema1.cinemanum,
            details: _1917.shortdesc,
            timeslots: screening1.timeslots,
            dates: screening1.dates,
            post_url: '/reserve/1917/screening01'
        })
    });
    });
    });
};

//1917 reserve
exports.reserve1917 = function(req, res) {
    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, screening1) {
    movieModel.showAll(screening1.movie, function(err, _1917) {
    cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
     
        const  screening = screening1._id;
        const  movie = _1917._id;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/1917/screening01');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/1917/screening01/tickets');
      
              }
        });
      
    });
    });
    });
};

// 1917 tickets screen
exports.tickets1917 = function(req, res) {
    reservationModel.showTickets(function(err, reservation1) { 
    screeningModel.showAll(reservation1.screening, function(err, screening1) {
    cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
    movieModel.showAll(screening1.movie, function(err, _1917) {
              
        res.render('tickets', {
        layout: 'main-regular',
        title: '1917 Tickets',
        reservationid: reservation1._id,
        movie: _1917.name,
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
};

//Parasite reserve screen
exports.showParasite = function(req, res) {
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, screening2) {
    movieModel.showAll(screening2.movie, function(err, parasite) {
    cinemaModel.showAll(screening2.cinema, function(err, cinema2) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Parasite Reservation',
            movieTitle: parasite.name,
            cinema: cinema2.cinemanum,
            details: parasite.shortdesc,
            timeslots: screening2.timeslots,
            dates: screening2.dates,
            post_url: '/reserve/parasite/screening02'
        })
    });
    });
    });
};

//Parasite reserve
exports.reserveParasite = function(req, res) {
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, screening2) {
    movieModel.showAll(screening2.movie, function(err, parasite) {
    cinemaModel.showAll(screening2.cinema, function(err, cinema2) {
     
        const  screening = screening2._id;
        const  movie = parasite._id;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/1917/screening01');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/parasite/screening02/tickets');
      
              }
        });
      
    });
    });
    });
};

// Parasite tickets screen
exports.ticketsParasite = function(req, res) {
    reservationModel.showTickets(function(err, reservation2) { 
    screeningModel.showAll(reservation2.screening, function(err, screening2) {
    cinemaModel.showAll(screening2.cinema, function(err, cinema2) {
    movieModel.showAll(screening2.movie, function(err, parasite) {
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'Parasite Tickets',
        reservationid: reservation2._id,
        movie: parasite.name,
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
};

//Sonic reserve screen
exports.showSonic = function(req, res) {
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
    movieModel.showAll(screening3.movie, function(err, sonic) {
    cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Sonic the Hedgehog Reservation',
            movieTitle: sonic.name,
            cinema: cinema3.cinemanum,
            details: sonic.shortdesc,
            timeslots: screening3.timeslots,
            dates: screening3.dates,
            post_url: '/reserve/sonic/screening03'
        })
    });
    });
    });
};

//Sonic reserve
exports.reserveSonic = function(req, res) {
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
    movieModel.showAll(screening3.movie, function(err, sonic) {
    cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
     
        const  screening = screening3._id;
        const  movie = sonic._id;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/sonic/screening03');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/sonic/screening03/tickets');
      
              }
        });
      
    });
    });
    });
};

// Sonic tickets screen
exports.ticketsSonic = function(req, res) {
    reservationModel.showTickets(function(err, reservation3) { 
    screeningModel.showAll(reservation3.screening, function(err, screening3) {
    cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
    movieModel.showAll(screening3.movie, function(err, sonic) {
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'Sonic the Hedgehog Tickets',
        reservationid: reservation3._id,
        movie: sonic.name,
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
};

//BOP reserve screen
exports.showBOP = function(req, res) {
    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, screening4) {
    movieModel.showAll(screening4.movie, function(err, bop) {
    cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Birds of Prey Reservation',
            movieTitle: bop.name,
            cinema: cinema4.cinemanum,
            details: bop.shortdesc,
            timeslots: screening4.timeslots,
            dates: screening4.dates,
            post_url: '/reserve/birdsofprey/screening04'
        })
    });
    });
    });
};

//BOP reserve
exports.reserveBOP = function(req, res) {
    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, screening4) {
    movieModel.showAll(screening4.movie, function(err, bop) {
    cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
     
        const  screening = screening4._id;
        const  movie = bop._id;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/birdsofprey/screening04');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/birdsofprey/screening04/tickets');
      
              }
        });
      
    });
    });
    });
};

// BOP tickets screen
exports.ticketsBOP = function(req, res) {
    reservationModel.showTickets(function(err, reservation4) { 
    screeningModel.showAll(reservation4.screening, function(err, screening4) {
    cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
    movieModel.showAll(screening4.movie, function(err, bop) {
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'Birds of Prey Tickets',
        reservationid: reservation4._id,
        movie: bop.name,
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
};

//Bad Boys for Life reserve screen
exports.showBadBoys = function(req, res) {
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
    movieModel.showAll(screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Bad Boys for Life Reservation',
            movieTitle: bb4life.name,
            cinema: cinema5.cinemanum,
            details: bb4life.shortdesc,
            timeslots: screening5.timeslots,
            dates: screening5.dates,
            post_url: '/reserve/badboysforlife/screening05'
        })
    });
    });
    });
};

//Bad Boys for Life reserve
exports.reserveBadBoys = function(req, res) {
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
    movieModel.showAll(screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
     
        const  screening = screening5._id;
        const  movie = bb4life._id;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/badboysforlife/screening05');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/badboysforlife/screening05/tickets');
      
              }
        });
      
    });
    });
    });
};

// Bad Boys for Life tickets screen
exports.ticketsBadBoys = function(req, res) {
    reservationModel.showTickets(function(err, reservation5) { 
    screeningModel.showAll(reservation5.screening, function(err, screening5) {
    cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
    movieModel.showAll(screening5.movie, function(err, bb4life) {
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'Bad Boys for Life Tickets',
        reservationid: reservation5._id,
        movie: bb4life.name,
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
};

//DoLittle reserve screen
exports.showDoLittle = function(req, res) {
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, screening6) {
    movieModel.showAll(screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'DoLittle Reservation',
            movieTitle: dolittle.name,
            cinema: cinema6.cinemanum,
            details: dolittle.shortdesc,
            timeslots: screening6.timeslots,
            dates: screening6.dates,
            post_url: '/reserve/dolittle/screening06'
        })
    });
    });
    });
};

//DoLittle reserve
exports.reserveDoLittle = function(req, res) {
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, screening6) {
    movieModel.showAll(screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
     
        const  screening = screening6._id;
        const  movie = dolittle._id;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/dolittle/screening06');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/dolittle/screening06/tickets');
      
              }
        });
      
    });
    });
    });
};

// DoLittle tickets screen
exports.ticketsDoLittle = function(req, res) {
    reservationModel.showTickets(function(err, reservation6) { 
    screeningModel.showAll(reservation6.screening, function(err, screening6) {
    cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
    movieModel.showAll(screening6.movie, function(err, dolittle) {
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'DoLittle Tickets',
        reservationid: reservation6._id,
        movie: dolittle.name,
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
};

//TNC reserve screen
exports.showTNC = function(req, res) {
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
    movieModel.showAll(screening7.movie, function(err, tnc) {
    cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Night Clerk Reservation',
            movieTitle: tnc.name,
            cinema: cinema7.cinemanum,
            details: tnc.shortdesc,
            timeslots: screening7.timeslots,
            dates: screening7.dates,
            post_url: '/reserve/thenightclerk/screening07'
        })
    });
    });
    });
};

//TNC reserve
exports.reserveTNC = function(req, res) {
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
    movieModel.showAll(screening7.movie, function(err, tnc) {
    cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
     
        const  screening = screening7._id;
        const  movie = tnc._id;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thenightclerk/screening07');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thenightclerk/screening07/tickets');
      
              }
        });
      
    });
    });
    });
};

// TNC tickets screen
exports.ticketsTNC = function(req, res) {
    reservationModel.showTickets(function(err, reservation7) { 
    screeningModel.showAll(reservation7.screening, function(err, screening7) {
    cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
    movieModel.showAll(screening7.movie, function(err, tnc) {
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'The Night Clerk Tickets',
        reservationid: reservation7._id,
        movie: tnc.name,
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
};

//The Call of the Wild reserve screen
exports.showCallofWild = function(req, res) {
    screeningModel.showAll('5e87005f1c9d440000ec3b21', function(err, screening8) {
    movieModel.showAll(screening8.movie, function(err, cow) {
    cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Call of the Wild Reservation',
            movieTitle: cow.name,
            cinema: cinema8.cinemanum,
            details: cow.shortdesc,
            timeslots: screening8.timeslots,
            dates: screening8.dates,
            post_url: '/reserve/thecallofthewild/screening08'
        })
    });
    });
    });
};

//The Call of the Wild reserve
exports.reserveCallofWild = function(req, res) {
    screeningModel.showAll('5e87005f1c9d440000ec3b21', function(err, screening8) {
    movieModel.showAll(screening8.movie, function(err, cow) {
    cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
     
        const  screening = screening8._id;
        const  movie = cow._id;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thecallofthewild/screening08');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thecallofthewild/screening08/tickets');
      
              }
        });
      
    });
    });
    });
};

// The Call of the Wild tickets screen
exports.ticketsCallofWild = function(req, res) {
    reservationModel.showTickets(function(err, reservation8) { 
    screeningModel.showAll(reservation8.screening, function(err, screening8) {
    cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
    movieModel.showAll(screening8.movie, function(err, cow) {
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'The Call of the Wild Tickets',
        reservationid: reservation8._id,
        movie: cow.name,
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
};
  

  
//   // The Call of the Wild reserve route
//   app.get('/reserve/thecallofthewild', function(req,res) {
//       Screening.findById('5e87005f1c9d440000ec3b21', function(err, screening8) {
//       Movie.findById(screening8.movie, function(err, movie8) {
//       Cinema.findById(screening8.cinema, function(err, cinema8) {
//         res.render('reserve',{
//             layout: 'main-regular',
//             movieTitle: movie8.name,
//             cinema: cinema8.cinemanum,
//             details: movie8.shortdesc,
//             timeslots: screening8.timeslots,
//             dates: screening8.dates,
//             tickets_url: screening8.tickets_url,
//             post_url: '/reserve/thecallofthewild/screening08'
//         })
  
//         app.post('/reserve/thecallofthewild/screening08', function(req,res) {
//           /** == README == **
//               Instead of passing an object, we now have a mongoose.Document object
//               because we created an instance of the usersModel.
//             **/
          
//            var reservation = new Reservation ({
//             screening: screening8._id,
//             movie: movie8._id,
//             reserved_seats: req.body.seats,
//             date_chosen: req.body.datepicker,
//             time_chosen: req.body.timepicker
//               // Potential error: there's no validation for gender on the client side
//           });
        
//           /** == README == **
//             Directly calling save for the instance of the Document.
//           **/
//           reservation.save(function(err, reservation) {
//             var result;
        
//             /** == README == **
//               Added error handling! Check out the object printed out in the console.
//               (Try clicking Add User when the name or id is blank)
//             **/
//             if (err) {
//               console.log(err.errors);
        
//               result = { success: false, message: "Reservation was not created!" }
//               res.send(result);
//               // throw err; // This is commented so that the server won't be killed.
//             } else {
//               console.log("Successfully added reservation!");
//               console.log(reservation); // Check out the logs and see there's a new __v attribute!
        
//               // Let's create a custom response that the user was created successfully
//               result = { success: true, message: "Reservation created!" }
        
//               // Sending the result as is to handle it the "AJAX-way".
//               //res.send(result);
//               res.redirect('http://localhost:3000/reserve/thecallofthewild/screening08/tickets');
//             }
        
//           });
        
//         })
//       });
//       });
//       });
//   });
  
//   // The Call of the Wild tickets page
//   app.get('/reserve/thecallofthewild/screening08/tickets', function(req,res) {
//     Reservation.findOne().sort({$natural: -1}).limit(1).exec(function(err, reservation8) { 
//     Screening.findById(reservation8.screening, function(err, screening8) {
//     Cinema.findById(screening8.cinema, function(err, cinema8) {
//     Movie.findById(screening8.movie, function(err, movie8) {
    
//     res.render('tickets', {
//     layout: 'main-regular',
//     reservationid: reservation8._id,
//     movie: movie8.name,
//     cinema: cinema8.cinemanum,
//     price: reservation8.totalprice,
//     date: reservation8.date_chosen,
//     time: reservation8.time_chosen,
//     tickets: reservation8.reserved_seats
  
//   })
  
//   });
//   });
//   });
//   });
  
//   });
  
  
//   /*================================================================*/