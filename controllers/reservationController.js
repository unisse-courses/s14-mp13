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
        const  movie = _1917.name;
        const  cinema = cinema1.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;
        const  user = req.session.user;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen,
            movie,
            cinema,
            user
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
              
        res.render('tickets', {
        layout: 'main-regular',
        title: '1917 Tickets',
        reservationid: reservation1._id,
        movie: reservation1.movie,
        cinema: reservation1.cinema,
        price: reservation1.totalprice,
        date: reservation1.date_chosen,
        time: reservation1.time_chosen,
        tickets: reservation1.reserved_seats
        })
          
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
        const  movie = parasite.name;
        const  cinema = cinema2.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;
        const  user = req.session.user;
        

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user
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
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'Parasite Tickets',
        reservationid: reservation2._id,
        movie: reservation2.movie,
        cinema: reservation2.cinema,
        price: reservation2.totalprice,
        date: reservation2.date_chosen,
        time: reservation2.time_chosen,
        tickets: reservation2.reserved_seats
        })
          
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
        const  movie = sonic.name;
        const  cinema = cinema3.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;
        const  user = req.session.user;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user
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

        res.render('tickets', {
        layout: 'main-regular',
        title: 'Sonic the Hedgehog Tickets',
        reservationid: reservation3._id,
        movie: reservation3.movie,
        cinema: reservation3.cinema,
        price: reservation3.totalprice,
        date: reservation3.date_chosen,
        time: reservation3.time_chosen,
        tickets: reservation3.reserved_seats
        })
          
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
        const  movie = bop.name;
        const  cinema = cinema4.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;
        const  user = req.session.user;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user
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
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'Birds of Prey Tickets',
        reservationid: reservation4._id,
        movie: reservation4.movie,
        cinema: reservation4.cinema,
        price: reservation4.totalprice,
        date: reservation4.date_chosen,
        time: reservation4.time_chosen,
        tickets: reservation4.reserved_seats
        })
          
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
        const  movie = bb4life.name;
        const  cinema = cinema5.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;
        const  user = req.session.user;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user
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
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'Bad Boys for Life Tickets',
        reservationid: reservation5._id,
        movie: reservation5.movie,
        cinema: reservation5.cinema,
        price: reservation5.totalprice,
        date: reservation5.date_chosen,
        time: reservation5.time_chosen,
        tickets: reservation5.reserved_seats
        })
          
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
        const  movie = dolittle.name;
        const  cinema = cinema6.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;
        const  user = req.session.user;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user
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
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'DoLittle Tickets',
        reservationid: reservation6._id,
        movie: reservation6.movie,
        cinema: reservation6.cinema,
        price: reservation6.totalprice,
        date: reservation6.date_chosen,
        time: reservation6.time_chosen,
        tickets: reservation6.reserved_seats
        })
          
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
        const  movie = tnc.name;
        const  cinema = cinema7.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;
        const  user = req.session.user;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user
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
              
        res.render('tickets', {
        layout: 'main-regular',
        title: 'The Night Clerk Tickets',
        reservationid: reservation7._id,
        movie: reservation7.movie,
        cinema: reservation7.cinema,
        price: reservation7.totalprice,
        date: reservation7.date_chosen,
        time: reservation7.time_chosen,
        tickets: reservation7.reserved_seats
        })
          
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
        const  movie = cow.name;
        const  cinema = cinema8.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = req.body.datepicker;
        const  time_chosen = req.body.timepicker;
        const  user = req.session.user;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user
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
    
        res.render('tickets', {
        layout: 'main-regular',
        title: 'The Call of the Wild Tickets',
        reservationid: reservation8._id,
        movie: reservation8.movie,
        cinema: reservation8.cinema,
        price: reservation8.totalprice,
        date: reservation8.date_chosen,
        time: reservation8.time_chosen,
        tickets: reservation8.reserved_seats
        })
          
        });
};
  
//   /*================================================================*/

// Admin home
 // admin home account (logged in) route
exports.showHome = function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template

    // NOW SHOWING ROW 1
    // SCREENING 1
    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, screening1) {
    movieModel.showAll(screening1.movie, function(err, movie1) {
    cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
    // SCREENING 2
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, screening2) {
    movieModel.showAll(screening2.movie, function(err, movie2) {
    cinemaModel.showAll(screening2.cinema, function(err, cinema2) {
    // SCREENING 3
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
    movieModel.showAll(screening3.movie, function(err, movie3) {
    cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
    // SCREENING 4
    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, screening4) {
    movieModel.showAll(screening4.movie, function(err, movie4) {
    cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
    // SCREENING 5
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
    movieModel.showAll(screening5.movie, function(err, movie5) {
    cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
    // SCREENING 6
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, screening6) {
    movieModel.showAll(screening6.movie, function(err, movie6) {
    cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
    // SCREENING 7
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
    movieModel.showAll(screening7.movie, function(err, movie7) {
    cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
    // SCREENING 8
    screeningModel.showAll('5e87005f1c9d440000ec3b21', function(err, screening8) {
    movieModel.showAll(screening8.movie, function(err, movie8) {
    cinemaModel.showAll(screening8.cinema, function(err, cinema8) {

    // RESERVATIONS
    reservationModel.getAll({date_reserved: 1}, function(reservations) {
  
    // reservationModel.showAll('5e8ae6ef4ba13b4160ff8a7b', function(err, reservation1) {
    // reservationModel.showAll('5e8ae6ef4ba13b4160ff8a7b', function(err, reservation2) {
    // reservationModel.showAll('5e8ae6ef4ba13b4160ff8a7b', function(err, reservation3) {
    // reservationModel.showAll('5e8ae6ef4ba13b4160ff8a7b', function(err, reservation4) {
    // reservationModel.showAll('5e8ae6ef4ba13b4160ff8a7b', function(err, reservation5) {
    // reservationModel.showAll('5e8ae6ef4ba13b4160ff8a7b', function(err, reservation6) {
    // reservationModel.showAll('5e8ae6ef4ba13b4160ff8a7b', function(err, reservation7) {
    // reservationModel.showAll('5e8ae6ef4ba13b4160ff8a7b', function(err, reservation8) {

    // COMING SOON ROW 1
    movieModel.showAll('5e86a7a31c9d440000ec3b0a', function(err, movie9) {
    movieModel.showAll('5e86a99a1c9d440000ec3b0b', function(err, movie10) {
    movieModel.showAll('5e86ab4a1c9d440000ec3b0c', function(err, movie11) {
    movieModel.showAll('5e86ad0a1c9d440000ec3b0d', function(err, movie12) {
    // COMING SOON ROW 2
    movieModel.showAll('5e86ae8c1c9d440000ec3b0e', function(err, movie13) {
    movieModel.showAll('5e86b0e61c9d440000ec3b0f', function(err, movie14) {
    
    res.render('admin-home', {
      layout: 'main-admin',
      title: 'W&Js Cinemas',
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
      // cinemaModel numbers
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

      reservations: reservations

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

  }); // reservation
//   });
//   });
//   });
//   });
//   });
//   });
//   });
  

  }); // movie 9
  }); // movie 10
  }); // movie 11
  }); // movie 12
  }); // movie 13
  }); // movie 14

};

// myaccount (Regular) route 
exports.showMyAccount = function(req, res) {
    // RESERVATIONS
    reservationModel.getAllUser({name:1}, req.session.user, function(reservations) {
        res.render('myaccount', {
            layout: 'main-regular',
            title: 'My Account',
            uname: req.session.uname,
            fname: req.session.fname,
            lname: req.session.lname,
            mnum: req.session.mnum,
            email: req.session.email, 
            reservations: reservations
          })
    });
    
};

