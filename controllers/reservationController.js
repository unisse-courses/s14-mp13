const seatsModel = require('../models/seats');
const screeningModel = require('../models/screening');
const movieModel = require('../models/movie');
const cinemaModel = require('../models/cinema');
const reservationModel = require('../models/reservation');

var generatedSeatNumber = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
    'A11', 'A12', 'A13', 'A14', 'A15', 
    'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
    'B11', 'B12', 'B13', 'B14', 'B15',
    'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
    'C11', 'C12', 'C13', 'C14', 'C15',
    'D1', 'D2', 'D3','D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10',
    'D11', 'D12', 'D13', 'D14', 'D15',
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6','E7', 'E8', 'E9', 'E10',
    'E11', 'E12', 'E13', 'E14', 'E15',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
    'F11', 'F12', 'F13','F14', 'F15',
    'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10',
    'G11', 'G12', 'G13', 'G14', 'G15',
    'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10',
    'H11', 'H12', 'H13', 'H14', 'H15',
    'I1', 'I2', 'I3','I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10',
    'I11', 'I12', 'I13', 'I14', 'I15',
    'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10',
    'J11', 'J12', 'J13', 'J14', 'J15'];


/*============================RESERVE ROUTES============================*/ 

// START OF 1917
// ---------------------------------------------------------------------------------------------- //
//1917 reserve screen timeslot 1
exports.show1917 = function(req, res) {
    const seatNumber = ['A1', 'J2'];
    //var count = generatedSeatNumber.push();

    //Reserved seats #1
    seatsModel.getAllSeats({reservation:1}, '5ebbc75512d724208c6d365b', function(seats0) {
    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, t1Screening1) {
    screeningModel.showAll('5eb8caf24944bc6057e6b834', function(err, t2Screening1) {
    screeningModel.showAll('5eb8cd644944bc6057e6b835', function(err, t3Screening1) {
    screeningModel.showAll('5eb8cdc14944bc6057e6b836', function(err, t4Screening1) {
    movieModel.showAll(t1Screening1.movie, function(err, _1917) {
    cinemaModel.showAll(t1Screening1.cinema, function(err, cinema1) {
        res.render('reserve',{
            layout: 'main-regular',
            title: '1917 Reservation',
            generatedSeatNumber: generatedSeatNumber,
            seatNumber0: seats0[0].seatNumber,
            seatNumber1: seats0[1].seatNumber,
            seatNumber2: seats0[2].seatNumber,
            movieTitle: _1917.name,
            cinema: cinema1.cinemanum,
            details: _1917.shortdesc,
            timeslot: t1Screening1.timeslot,
            timeslot2: t2Screening1.timeslot,
            timeslot3: t3Screening1.timeslot,
            timeslot4: t4Screening1.timeslot,
            date: t1Screening1.date,
            reserve1: '/reserve/1917/t1',
            reserve2: '/reserve/1917/t2',
            reserve3: '/reserve/1917/t3',
            reserve4: '/reserve/1917/t4',
            post_url: '/reserve/1917/t1/screening01'
        })
    });
    });
    });
    });
    });
    });

    });
};


//1917 reserve timeslot 1
exports.reserve1917 = function(req, res) {
    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, screening1) {
    movieModel.showAll(screening1.movie, function(err, _1917) {
    cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
     
        const  screening = screening1._id;
        const  movie = _1917.name;
        const  cinema = cinema1.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening1.date;
        const  time_chosen = screening1.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = _1917.price * count;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen,
            movie,
            cinema,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/1917/t1');
              } else {                
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/1917/t1/screening01/tickets');
      
              }
        });
      
    });
    });
    });
};

// 1917 tickets screen timeslot 1
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


//1917 reserve screen timeslot 2
exports.show1917t2 = function(req, res) {
    const seatNumber = ['A4', 'J5'];
    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, t1Screening1) {
    screeningModel.showAll('5eb8caf24944bc6057e6b834', function(err, t2Screening1) {
    screeningModel.showAll('5eb8cd644944bc6057e6b835', function(err, t3Screening1) {
    screeningModel.showAll('5eb8cdc14944bc6057e6b836', function(err, t4Screening1) {
    movieModel.showAll(t1Screening1.movie, function(err, _1917) {
    cinemaModel.showAll(t1Screening1.cinema, function(err, cinema1) {
        res.render('reserve',{
            layout: 'main-regular',
            title: '1917 Reservation',
            generatedSeatNumber: generatedSeatNumber,
           // seatNumber: seatNumber[0],
            movieTitle: _1917.name,
            cinema: cinema1.cinemanum,
            details: _1917.shortdesc,
            timeslot: t2Screening1.timeslot,
            timeslot2: t1Screening1.timeslot,
            timeslot3: t3Screening1.timeslot,
            timeslot4: t4Screening1.timeslot,
            date: t2Screening1.date,
            reserve1: '/reserve/1917/t2',
            reserve2: '/reserve/1917/t1',
            reserve3: '/reserve/1917/t3',
            reserve4: '/reserve/1917/t4',
            post_url: '/reserve/1917/t2/screening01'
        })
    });
    });
    });
    });
    });
    });
};

//1917 reserve timeslot 2
exports.reserve1917t2 = function(req, res) {
    screeningModel.showAll('5eb8caf24944bc6057e6b834', function(err, screening1) {
    movieModel.showAll(screening1.movie, function(err, _1917) {
    cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
     
        const  screening = screening1._id;
        const  movie = _1917.name;
        const  cinema = cinema1.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening1.date;
        const  time_chosen = screening1.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = _1917.price * count;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen,
            movie,
            cinema,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/1917/t2');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/1917/t2/screening01/tickets');
      
              }
        });
      
    });
    });
    });
};

// 1917 tickets screen timeslot 2
exports.tickets1917t2 = function(req, res) {
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

//1917 reserve screen timeslot 3
exports.show1917t3 = function(req, res) {

    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, t1Screening1) {
    screeningModel.showAll('5eb8caf24944bc6057e6b834', function(err, t2Screening1) {
    screeningModel.showAll('5eb8cd644944bc6057e6b835', function(err, t3Screening1) {
    screeningModel.showAll('5eb8cdc14944bc6057e6b836', function(err, t4Screening1) {
    movieModel.showAll(t1Screening1.movie, function(err, _1917) {
    cinemaModel.showAll(t1Screening1.cinema, function(err, cinema1) {
        res.render('reserve',{
            layout: 'main-regular',
            title: '1917 Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: _1917.name,
            cinema: cinema1.cinemanum,
            details: _1917.shortdesc,
            timeslot: t3Screening1.timeslot,
            timeslot2: t1Screening1.timeslot,
            timeslot3: t2Screening1.timeslot,
            timeslot4: t4Screening1.timeslot,
            date: t3Screening1.date,
            reserve1: '/reserve/1917/t3',
            reserve2: '/reserve/1917/t1',
            reserve3: '/reserve/1917/t2',
            reserve4: '/reserve/1917/t4',
            post_url: '/reserve/1917/t3/screening01'
        })
    });
    });
    });
    });
    });
    });
};

//1917 reserve timeslot 3
exports.reserve1917t3 = function(req, res) {
    screeningModel.showAll('5eb8cd644944bc6057e6b835', function(err, screening1) {
    movieModel.showAll(screening1.movie, function(err, _1917) {
    cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
     
        const  screening = screening1._id;
        const  movie = _1917.name;
        const  cinema = cinema1.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening1.date;
        const  time_chosen = screening1.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = _1917.price * count;

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen,
            movie,
            cinema,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/1917/t3');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/1917/t3/screening01/tickets');
      
              }
        });
      
    });
    });
    });
};

// 1917 tickets screen timeslot 3
exports.tickets1917t3 = function(req, res) {
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

//1917 reserve screen timeslot 4
exports.show1917t4 = function(req, res) {
    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, t1Screening1) {
    screeningModel.showAll('5eb8caf24944bc6057e6b834', function(err, t2Screening1) {
    screeningModel.showAll('5eb8cd644944bc6057e6b835', function(err, t3Screening1) {
    screeningModel.showAll('5eb8cdc14944bc6057e6b836', function(err, t4Screening1) {
    movieModel.showAll(t1Screening1.movie, function(err, _1917) {
    cinemaModel.showAll(t1Screening1.cinema, function(err, cinema1) {
        res.render('reserve',{
            layout: 'main-regular',
            title: '1917 Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: _1917.name,
            cinema: cinema1.cinemanum,
            details: _1917.shortdesc,
            timeslot: t4Screening1.timeslot,
            timeslot2: t1Screening1.timeslot,
            timeslot3: t2Screening1.timeslot,
            timeslot4: t3Screening1.timeslot,
            date: t4Screening1.date,
            reserve1: '/reserve/1917/t4',
            reserve2: '/reserve/1917/t1',
            reserve3: '/reserve/1917/t2',
            reserve4: '/reserve/1917/t3',
            post_url: '/reserve/1917/t4/screening01'
        })
    });
    });
    });
    });
    });
    });
};

//1917 reserve timeslot 4
exports.reserve1917t4 = function(req, res) {
    screeningModel.showAll('5eb8cdc14944bc6057e6b836', function(err, screening1) {
    movieModel.showAll(screening1.movie, function(err, _1917) {
    cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
     
        const  screening = screening1._id;
        const  movie = _1917.name;
        const  cinema = cinema1.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening1.date;
        const  time_chosen = screening1.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = _1917.price * count;
        

        const newReservation = {
            screening, 
            movie,
            reserved_seats,
            date_chosen,
            time_chosen,
            movie,
            cinema,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/1917/t4');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/1917/t4/screening01/tickets');
      
              }
        });
      
    });
    });
    });
};

// 1917 tickets screen timeslot 4
exports.tickets1917t4 = function(req, res) {
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
// ---------------------------------------------------------------------------------------------- //
// END OF 1917


// START OF PARASITE
// ---------------------------------------------------------------------------------------------- //
//Parasite reserve screen timeslot 1
exports.showParasite = function(req, res) {
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, t1Screening2) {
    screeningModel.showAll('5eb8d8fa4944bc6057e6b837', function(err, t2Screening2) {
    screeningModel.showAll('5eb8d9264944bc6057e6b838', function(err, t3Screening2) {
    screeningModel.showAll('5eb8d9514944bc6057e6b839', function(err, t4Screening2) {
    movieModel.showAll(t1Screening2.movie, function(err, parasite) {
    cinemaModel.showAll(t1Screening2.cinema, function(err, cinema2) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Parasite Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: parasite.name,
            cinema: cinema2.cinemanum,
            details: parasite.shortdesc,
            timeslot: t1Screening2.timeslot,
            timeslot2: t2Screening2.timeslot,
            timeslot3: t3Screening2.timeslot,
            timeslot4: t4Screening2.timeslot,
            date: t1Screening2.date,
            reserve1: '/reserve/parasite/t1',
            reserve2: '/reserve/parasite/t2',
            reserve3: '/reserve/parasite/t3',
            reserve4: '/reserve/parasite/t4',
            post_url: '/reserve/parasite/t1/screening02'
        })
    });
    });
    });
    });
    });
    });
};

//Parasite reserve timeslot 1
exports.reserveParasite = function(req, res) {
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, t1Screening2) {
    movieModel.showAll(t1Screening2.movie, function(err, parasite) {
    cinemaModel.showAll(t1Screening2.cinema, function(err, cinema2) {
     
        const  screening = t1Screening2._id;
        const  movie = parasite.name;
        const  cinema = cinema2.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = t1Screening2.date;
        const  time_chosen = t1Screening2.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = parasite.price * count;
        

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/parasite/t1');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/parasite/t1/screening02/tickets');
      
              }
        });
      
    });
    });
    });
};

// Parasite tickets screen timeslot 1
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

//Parasite reserve screen timeslot 2
exports.showParasitet2 = function(req, res) {
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, t1Screening2) {
    screeningModel.showAll('5eb8d8fa4944bc6057e6b837', function(err, t2Screening2) {
    screeningModel.showAll('5eb8d9264944bc6057e6b838', function(err, t3Screening2) {
    screeningModel.showAll('5eb8d9514944bc6057e6b839', function(err, t4Screening2) {
    movieModel.showAll(t1Screening2.movie, function(err, parasite) {
    cinemaModel.showAll(t1Screening2.cinema, function(err, cinema2) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Parasite Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: parasite.name,
            cinema: cinema2.cinemanum,
            details: parasite.shortdesc,
            timeslot: t2Screening2.timeslot,
            timeslot2: t1Screening2.timeslot,
            timeslot3: t3Screening2.timeslot,
            timeslot4: t4Screening2.timeslot,
            date: t1Screening2.date,
            reserve1: '/reserve/parasite/t2',
            reserve2: '/reserve/parasite/t1',
            reserve3: '/reserve/parasite/t3',
            reserve4: '/reserve/parasite/t4',
            post_url: '/reserve/parasite/t2/screening02'
        })
    });
    });
    });
    });
    });
    });
};

//Parasite reserve timeslot 2
exports.reserveParasitet2 = function(req, res) {
    screeningModel.showAll('5eb8d8fa4944bc6057e6b837', function(err, t2Screening2) {
    movieModel.showAll(t2Screening2.movie, function(err, parasite) {
    cinemaModel.showAll(t2Screening2.cinema, function(err, cinema2) {
     
        const  screening = t2Screening2._id;
        const  movie = parasite.name;
        const  cinema = cinema2.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = t2Screening2.date;
        const  time_chosen = t2Screening2.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = parasite.price * count;
        

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/parasite/t2');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/parasite/t2/screening02/tickets');
      
              }
        });
      
    });
    });
    });
};

// Parasite tickets screen timeslot 2
exports.ticketsParasitet2 = function(req, res) {
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

//Parasite reserve screen timeslot 3
exports.showParasitet3 = function(req, res) {
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, t1Screening2) {
    screeningModel.showAll('5eb8d8fa4944bc6057e6b837', function(err, t2Screening2) {
    screeningModel.showAll('5eb8d9264944bc6057e6b838', function(err, t3Screening2) {
    screeningModel.showAll('5eb8d9514944bc6057e6b839', function(err, t4Screening2) {
    movieModel.showAll(t1Screening2.movie, function(err, parasite) {
    cinemaModel.showAll(t1Screening2.cinema, function(err, cinema2) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Parasite Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: parasite.name,
            cinema: cinema2.cinemanum,
            details: parasite.shortdesc,
            timeslot: t3Screening2.timeslot,
            timeslot2: t1Screening2.timeslot,
            timeslot3: t2Screening2.timeslot,
            timeslot4: t4Screening2.timeslot,
            date: t1Screening2.date,
            reserve1: '/reserve/parasite/t3',
            reserve2: '/reserve/parasite/t1',
            reserve3: '/reserve/parasite/t2',
            reserve4: '/reserve/parasite/t4',
            post_url: '/reserve/parasite/t3/screening02'
        })
    });
    });
    });
    });
    });
    });
};

//Parasite reserve timeslot 3
exports.reserveParasitet3 = function(req, res) {
    screeningModel.showAll('5eb8d9264944bc6057e6b838', function(err, t3Screening2) {
    movieModel.showAll(t3Screening2.movie, function(err, parasite) {
    cinemaModel.showAll(t3Screening2.cinema, function(err, cinema2) {
     
        const  screening = t3Screening2._id;
        const  movie = parasite.name;
        const  cinema = cinema2.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = t3Screening2.date;
        const  time_chosen = t3Screening2.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = parasite.price * count;
        

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/parasite/t3');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/parasite/t3/screening02/tickets');
      
              }
        });
      
    });
    });
    });
};

// Parasite tickets screen timeslot 3
exports.ticketsParasitet3 = function(req, res) {
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

//Parasite reserve screen timeslot 4
exports.showParasitet4 = function(req, res) {
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, t1Screening2) {
    screeningModel.showAll('5eb8d8fa4944bc6057e6b837', function(err, t2Screening2) {
    screeningModel.showAll('5eb8d9264944bc6057e6b838', function(err, t3Screening2) {
    screeningModel.showAll('5eb8d9514944bc6057e6b839', function(err, t4Screening2) {
    movieModel.showAll(t1Screening2.movie, function(err, parasite) {
    cinemaModel.showAll(t1Screening2.cinema, function(err, cinema2) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Parasite Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: parasite.name,
            cinema: cinema2.cinemanum,
            details: parasite.shortdesc,
            timeslot: t4Screening2.timeslot,
            timeslot2: t1Screening2.timeslot,
            timeslot3: t2Screening2.timeslot,
            timeslot4: t3Screening2.timeslot,
            date: t1Screening2.date,
            reserve1: '/reserve/parasite/t4',
            reserve2: '/reserve/parasite/t1',
            reserve3: '/reserve/parasite/t2',
            reserve4: '/reserve/parasite/t3',
            post_url: '/reserve/parasite/t4/screening02'
        })
    });
    });
    });
    });
    });
    });
};

//Parasite reserve timeslot 4
exports.reserveParasitet4 = function(req, res) {
    screeningModel.showAll('5eb8d9514944bc6057e6b839', function(err, t4Screening2) {
    movieModel.showAll(t4Screening2.movie, function(err, parasite) {
    cinemaModel.showAll(t4Screening2.cinema, function(err, cinema2) {
     
        const  screening = t4Screening2._id;
        const  movie = parasite.name;
        const  cinema = cinema2.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = t4Screening2.date;
        const  time_chosen = t4Screening2.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = parasite.price * count;
        

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/parasite/t4');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/parasite/t4/screening02/tickets');
      
              }
        });
      
    });
    });
    });
};


// Parasite tickets screen timeslot 4
exports.ticketsParasitet4 = function(req, res) {
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

// ---------------------------------------------------------------------------------------------- //
// END OF PARASITE

// SONIC
// ---------------------------------------------------------------------------------------------- //
//Sonic reserve screen timeslot 1
exports.showSonic = function(req, res) {
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, t1Screening3) {
    screeningModel.showAll('5eb8dba94944bc6057e6b83a', function(err, t2Screening3) {
    screeningModel.showAll('5eb8dbec4944bc6057e6b83b', function(err, t3Screening3) {
    screeningModel.showAll('5eb8dc1a4944bc6057e6b83c', function(err, t4Screening3) {
    movieModel.showAll(t1Screening3.movie, function(err, sonic) {
    cinemaModel.showAll(t1Screening3.cinema, function(err, cinema3) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Sonic the Hedgehog Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: sonic.name,
            cinema: cinema3.cinemanum,
            details: sonic.shortdesc,
            timeslot: t1Screening3.timeslot,
            timeslot2: t2Screening3.timeslot,
            timeslot3: t3Screening3.timeslot,
            timeslot4: t4Screening3.timeslot,
            date: t1Screening3.date,
            reserve1: '/reserve/sonic/t1',
            reserve2: '/reserve/sonic/t2',
            reserve3: '/reserve/sonic/t3',
            reserve4: '/reserve/sonic/t4',
            post_url: '/reserve/sonic/t1/screening03'
        })
    });
    });
    });
    });
    });
    });
};

//Sonic reserve timeslot 1
exports.reserveSonic = function(req, res) {
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
    movieModel.showAll(screening3.movie, function(err, sonic) {
    cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
     
        const  screening = screening3._id;
        const  movie = sonic.name;
        const  cinema = cinema3.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening3.date;
        const  time_chosen = screening3.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = sonic.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/sonic/t1/screening03');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/sonic/t1/screening03/tickets');
      
              }
        });
      
    });
    });
    });
};

// Sonic tickets screen timeslot 1
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

//Sonic reserve screen timeslot 2
exports.showSonict2 = function(req, res) {
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, t1Screening3) {
    screeningModel.showAll('5eb8dba94944bc6057e6b83a', function(err, t2Screening3) {
    screeningModel.showAll('5eb8dbec4944bc6057e6b83b', function(err, t3Screening3) {
    screeningModel.showAll('5eb8dc1a4944bc6057e6b83c', function(err, t4Screening3) {
    movieModel.showAll(t1Screening3.movie, function(err, sonic) {
    cinemaModel.showAll(t1Screening3.cinema, function(err, cinema3) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Sonic the Hedgehog Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: sonic.name,
            cinema: cinema3.cinemanum,
            details: sonic.shortdesc,
            timeslot: t2Screening3.timeslot,
            timeslot2: t1Screening3.timeslot,
            timeslot3: t3Screening3.timeslot,
            timeslot4: t4Screening3.timeslot,
            date: t1Screening3.date,
            reserve1: '/reserve/sonic/t2',
            reserve2: '/reserve/sonic/t1',
            reserve3: '/reserve/sonic/t3',
            reserve4: '/reserve/sonic/t4',
            post_url: '/reserve/sonic/t2/screening03'
        })
    });
    });
    });
    });
    });
    });
};

//Sonic reserve timeslot 2
exports.reserveSonict2 = function(req, res) {
    screeningModel.showAll('5eb8dba94944bc6057e6b83a', function(err, screening3) {
    movieModel.showAll(screening3.movie, function(err, sonic) {
    cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
     
        const  screening = screening3._id;
        const  movie = sonic.name;
        const  cinema = cinema3.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening3.date;
        const  time_chosen = screening3.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = sonic.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/sonic/t2/screening03');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/sonic/t2/screening03/tickets');
      
              }
        });
      
    });
    });
    });
};

// Sonic tickets screen timeslot 2
exports.ticketsSonict2 = function(req, res) {
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

//Sonic reserve screen timeslot 3
exports.showSonict3 = function(req, res) {
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, t1Screening3) {
    screeningModel.showAll('5eb8dba94944bc6057e6b83a', function(err, t2Screening3) {
    screeningModel.showAll('5eb8dbec4944bc6057e6b83b', function(err, t3Screening3) {
    screeningModel.showAll('5eb8dc1a4944bc6057e6b83c', function(err, t4Screening3) {
    movieModel.showAll(t1Screening3.movie, function(err, sonic) {
    cinemaModel.showAll(t1Screening3.cinema, function(err, cinema3) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Sonic the Hedgehog Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: sonic.name,
            cinema: cinema3.cinemanum,
            details: sonic.shortdesc,
            timeslot: t3Screening3.timeslot,
            timeslot2: t1Screening3.timeslot,
            timeslot3: t2Screening3.timeslot,
            timeslot4: t4Screening3.timeslot,
            date: t1Screening3.date,
            reserve1: '/reserve/sonic/t3',
            reserve2: '/reserve/sonic/t1',
            reserve3: '/reserve/sonic/t2',
            reserve4: '/reserve/sonic/t4',
            post_url: '/reserve/sonic/t3/screening03'
        })
    });
    });
    });
    });
    });
    });
};

//Sonic reserve timeslot 3
exports.reserveSonict3 = function(req, res) {
    screeningModel.showAll('5eb8dbec4944bc6057e6b83b', function(err, screening3) {
    movieModel.showAll(screening3.movie, function(err, sonic) {
    cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
     
        const  screening = screening3._id;
        const  movie = sonic.name;
        const  cinema = cinema3.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening3.date;
        const  time_chosen = screening3.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = sonic.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/sonic/t3/screening03');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/sonic/t3/screening03/tickets');
      
              }
        });
      
    });
    });
    });
};

// Sonic tickets screen timeslot 3
exports.ticketsSonict3 = function(req, res) {
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

//Sonic reserve screen timeslot 4
exports.showSonict4 = function(req, res) {
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, t1Screening3) {
    screeningModel.showAll('5eb8dba94944bc6057e6b83a', function(err, t2Screening3) {
    screeningModel.showAll('5eb8dbec4944bc6057e6b83b', function(err, t3Screening3) {
    screeningModel.showAll('5eb8dc1a4944bc6057e6b83c', function(err, t4Screening3) {
    movieModel.showAll(t1Screening3.movie, function(err, sonic) {
    cinemaModel.showAll(t1Screening3.cinema, function(err, cinema3) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Sonic the Hedgehog Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: sonic.name,
            cinema: cinema3.cinemanum,
            details: sonic.shortdesc,
            timeslot: t4Screening3.timeslot,
            timeslot2: t1Screening3.timeslot,
            timeslot3: t2Screening3.timeslot,
            timeslot4: t3Screening3.timeslot,
            date: t1Screening3.date,
            reserve1: '/reserve/sonic/t4',
            reserve2: '/reserve/sonic/t1',
            reserve3: '/reserve/sonic/t2',
            reserve4: '/reserve/sonic/t3',
            post_url: '/reserve/sonic/t4/screening03'
        })
    });
    });
    });
    });
    });
    });
};

//Sonic reserve timeslot 4
exports.reserveSonict4 = function(req, res) {
    screeningModel.showAll('5eb8dc1a4944bc6057e6b83c', function(err, screening3) {
    movieModel.showAll(screening3.movie, function(err, sonic) {
    cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
     
        const  screening = screening3._id;
        const  movie = sonic.name;
        const  cinema = cinema3.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening3.date;
        const  time_chosen = screening3.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = sonic.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen, 
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/sonic/t4/screening03');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/sonic/t4/screening03/tickets');
      
              }
        });
      
    });
    });
    });
};

// Sonic tickets screen timeslot 4
exports.ticketsSonict4 = function(req, res) {
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

// ---------------------------------------------------------------------------------------------- //
// END OF SONIC

// BOP
// ---------------------------------------------------------------------------------------------- //
//BOP reserve screen timeslot 1
exports.showBOP = function(req, res) {
    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, t1Screening4) {
    screeningModel.showAll('5eb8de494944bc6057e6b83d', function(err, t2Screening4) {
    screeningModel.showAll('5eb8de884944bc6057e6b83e', function(err, t3Screening4) {
    screeningModel.showAll('5eb8deed4944bc6057e6b83f', function(err, t4Screening4) {
    movieModel.showAll(t1Screening4.movie, function(err, bop) {
    cinemaModel.showAll(t1Screening4.cinema, function(err, cinema4) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Birds of Prey Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: bop.name,
            cinema: cinema4.cinemanum,
            details: bop.shortdesc,
            timeslot:  t1Screening4.timeslot,
            timeslot2: t2Screening4.timeslot,
            timeslot3: t3Screening4.timeslot,
            timeslot4: t4Screening4.timeslot,
            date: t1Screening4.date,
            reserve1: '/reserve/birdsofprey/t1',
            reserve2: '/reserve/birdsofprey/t2',
            reserve3: '/reserve/birdsofprey/t3',
            reserve4: '/reserve/birdsofprey/t4',
            post_url: '/reserve/birdsofprey/t1/screening04'
        })
    });
    });
    });
    });
    });
    });
};

//BOP reserve timeslot 1
exports.reserveBOP = function(req, res) {
    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, screening4) {
    movieModel.showAll(screening4.movie, function(err, bop) {
    cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
     
        const  screening = screening4._id;
        const  movie = bop.name;
        const  cinema = cinema4.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening4.date;
        const  time_chosen = screening4.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = bop.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/birdsofprey/t1/screening04');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/birdsofprey/t1/screening04/tickets');
      
              }
        });
      
    });
    });
    });
};

// BOP tickets screen timeslot 1
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

//BOP reserve screen timeslot 2
exports.showBOPt2 = function(req, res) {


    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, t1Screening4) {
    screeningModel.showAll('5eb8de494944bc6057e6b83d', function(err, t2Screening4) {
    screeningModel.showAll('5eb8de884944bc6057e6b83e', function(err, t3Screening4) {
    screeningModel.showAll('5eb8deed4944bc6057e6b83f', function(err, t4Screening4) {
    movieModel.showAll(t1Screening4.movie, function(err, bop) {
    cinemaModel.showAll(t1Screening4.cinema, function(err, cinema4) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Birds of Prey Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: bop.name,
            cinema: cinema4.cinemanum,
            details: bop.shortdesc,
            timeslot:  t2Screening4.timeslot,
            timeslot2: t1Screening4.timeslot,
            timeslot3: t3Screening4.timeslot,
            timeslot4: t4Screening4.timeslot,
            date: t1Screening4.date,
            reserve1: '/reserve/birdsofprey/t2',
            reserve2: '/reserve/birdsofprey/t1',
            reserve3: '/reserve/birdsofprey/t3',
            reserve4: '/reserve/birdsofprey/t4',
            post_url: '/reserve/birdsofprey/t2/screening04'
        })
    });
    });
    });
    });
    });
    });
};

//BOP reserve timeslot 2
exports.reserveBOPt2 = function(req, res) {
    screeningModel.showAll('5eb8de494944bc6057e6b83d', function(err, screening4) {
    movieModel.showAll(screening4.movie, function(err, bop) {
    cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
     
        const  screening = screening4._id;
        const  movie = bop.name;
        const  cinema = cinema4.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening4.date;
        const  time_chosen = screening4.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = bop.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/birdsofprey/t2/screening04');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/birdsofprey/t2/screening04/tickets');
      
              }
        });
      
    });
    });
    });
};

// BOP tickets screen timeslot 2
exports.ticketsBOPt2 = function(req, res) {
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

//BOP reserve screen timeslot 3
exports.showBOPt3 = function(req, res) {
    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, t1Screening4) {
    screeningModel.showAll('5eb8de494944bc6057e6b83d', function(err, t2Screening4) {
    screeningModel.showAll('5eb8de884944bc6057e6b83e', function(err, t3Screening4) {
    screeningModel.showAll('5eb8deed4944bc6057e6b83f', function(err, t4Screening4) {
    movieModel.showAll(t1Screening4.movie, function(err, bop) {
    cinemaModel.showAll(t1Screening4.cinema, function(err, cinema4) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Birds of Prey Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: bop.name,
            cinema: cinema4.cinemanum,
            details: bop.shortdesc,
            timeslot:  t3Screening4.timeslot,
            timeslot2: t1Screening4.timeslot,
            timeslot3: t2Screening4.timeslot,
            timeslot4: t4Screening4.timeslot,
            date: t1Screening4.date,
            reserve1: '/reserve/birdsofprey/t3',
            reserve2: '/reserve/birdsofprey/t1',
            reserve3: '/reserve/birdsofprey/t2',
            reserve4: '/reserve/birdsofprey/t4',
            post_url: '/reserve/birdsofprey/t3/screening04'
        })
    });
    });
    });
    });
    });
    });
};

//BOP reserve timeslot 3
exports.reserveBOPt3 = function(req, res) {
    screeningModel.showAll('5eb8de884944bc6057e6b83e', function(err, screening4) {
    movieModel.showAll(screening4.movie, function(err, bop) {
    cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
     
        const  screening = screening4._id;
        const  movie = bop.name;
        const  cinema = cinema4.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening4.date;
        const  time_chosen = screening4.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = bop.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/birdsofprey/t3/screening04');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/birdsofprey/t3/screening04/tickets');
      
              }
        });
      
    });
    });
    });
};

// BOP tickets screen timeslot 3
exports.ticketsBOPt3 = function(req, res) {
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

//BOP reserve screen timeslot 4
exports.showBOPt4 = function(req, res) {
    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, t1Screening4) {
    screeningModel.showAll('5eb8de494944bc6057e6b83d', function(err, t2Screening4) {
    screeningModel.showAll('5eb8de884944bc6057e6b83e', function(err, t3Screening4) {
    screeningModel.showAll('5eb8deed4944bc6057e6b83f', function(err, t4Screening4) {
    movieModel.showAll(t1Screening4.movie, function(err, bop) {
    cinemaModel.showAll(t1Screening4.cinema, function(err, cinema4) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Birds of Prey Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: bop.name,
            cinema: cinema4.cinemanum,
            details: bop.shortdesc,
            timeslot:  t4Screening4.timeslot,
            timeslot2: t1Screening4.timeslot,
            timeslot3: t2Screening4.timeslot,
            timeslot4: t3Screening4.timeslot,
            date: t1Screening4.date,
            reserve1: '/reserve/birdsofprey/t4',
            reserve2: '/reserve/birdsofprey/t1',
            reserve3: '/reserve/birdsofprey/t2',
            reserve4: '/reserve/birdsofprey/t3',
            post_url: '/reserve/birdsofprey/t4/screening04'
        })
    });
    });
    });
    });
    });
    });
};

//BOP reserve timeslot 4
exports.reserveBOPt4 = function(req, res) {
    screeningModel.showAll('5eb8deed4944bc6057e6b83f', function(err, screening4) {
    movieModel.showAll(screening4.movie, function(err, bop) {
    cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
     
        const  screening = screening4._id;
        const  movie = bop.name;
        const  cinema = cinema4.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening4.date;
        const  time_chosen = screening4.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = bop.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/birdsofprey/t4/screening04');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/birdsofprey/t4/screening04/tickets');
      
              }
        });
      
    });
    });
    });
};

// BOP tickets screen timeslot 4
exports.ticketsBOPt4 = function(req, res) {
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

// ---------------------------------------------------------------------------------------------- //
// END OF BOP

// BAD BOYS
// ---------------------------------------------------------------------------------------------- //
//Bad Boys for Life reserve screen timeslot 1
exports.showBadBoys = function(req, res) {
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, t1Screening5) {
    screeningModel.showAll('5eb8e0904944bc6057e6b840', function(err, t2Screening5) {
    screeningModel.showAll('5eb8e0d94944bc6057e6b841', function(err, t3Screening5) {
    screeningModel.showAll('5eb8e1024944bc6057e6b842', function(err, t4Screening5) {
    movieModel.showAll(t1Screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(t1Screening5.cinema, function(err, cinema5) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Bad Boys for Life Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: bb4life.name,
            cinema: cinema5.cinemanum,
            details: bb4life.shortdesc,
            timeslot:  t1Screening5.timeslot,
            timeslot2: t2Screening5.timeslot,
            timeslot3: t3Screening5.timeslot,
            timeslot4: t4Screening5.timeslot,
            date: t1Screening5.date,
            reserve1: '/reserve/badboysforlife/t1',
            reserve2: '/reserve/badboysforlife/t2',
            reserve3: '/reserve/badboysforlife/t3',
            reserve4: '/reserve/badboysforlife/t4',
            post_url: '/reserve/badboysforlife/t1/screening05'
        })
    });
    });
    });
    });
    });
    });
};

//Bad Boys for Life reserve timeslot 1
exports.reserveBadBoys = function(req, res) {
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
    movieModel.showAll(screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
     
        const  screening = screening5._id;
        const  movie = bb4life.name;
        const  cinema = cinema5.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening5.date;
        const  time_chosen = screening5.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = bb4life.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/badboysforlife/t1/screening05');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/badboysforlife/t1/screening05/tickets');
      
              }
        });
      
    });
    });
    });
};




// Bad Boys for Life tickets screen timeslot 1
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

//Bad Boys for Life reserve screen timeslot 2
exports.showBadBoyst2 = function(req, res) {
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, t1Screening5) {
    screeningModel.showAll('5eb8e0904944bc6057e6b840', function(err, t2Screening5) {
    screeningModel.showAll('5eb8e0d94944bc6057e6b841', function(err, t3Screening5) {
    screeningModel.showAll('5eb8e1024944bc6057e6b842', function(err, t4Screening5) {
    movieModel.showAll(t1Screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(t1Screening5.cinema, function(err, cinema5) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Bad Boys for Life Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: bb4life.name,
            cinema: cinema5.cinemanum,
            details: bb4life.shortdesc,
            timeslot:  t2Screening5.timeslot,
            timeslot2: t1Screening5.timeslot,
            timeslot3: t3Screening5.timeslot,
            timeslot4: t4Screening5.timeslot,
            date: t1Screening5.date,
            reserve1: '/reserve/badboysforlife/t2',
            reserve2: '/reserve/badboysforlife/t1',
            reserve3: '/reserve/badboysforlife/t3',
            reserve4: '/reserve/badboysforlife/t4',
            post_url: '/reserve/badboysforlife/t2/screening05'
        })
    });
    });
    });
    });
    });
    });
};

//Bad Boys for Life reserve timeslot 2
exports.reserveBadBoyst2 = function(req, res) {
    screeningModel.showAll('5eb8e0904944bc6057e6b840', function(err, screening5) {
    movieModel.showAll(screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
     
        const  screening = screening5._id;
        const  movie = bb4life.name;
        const  cinema = cinema5.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening5.date;
        const  time_chosen = screening5.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = bb4life.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/badboysforlife/t2/screening05');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/badboysforlife/t2/screening05/tickets');
      
              }
        });
      
    });
    });
    });
};

// Bad Boys for Life tickets screen timeslot 2
exports.ticketsBadBoyst2 = function(req, res) {
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

//Bad Boys for Life reserve screen timeslot 3
exports.showBadBoyst3 = function(req, res) {
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, t1Screening5) {
    screeningModel.showAll('5eb8e0904944bc6057e6b840', function(err, t2Screening5) {
    screeningModel.showAll('5eb8e0d94944bc6057e6b841', function(err, t3Screening5) {
    screeningModel.showAll('5eb8e1024944bc6057e6b842', function(err, t4Screening5) {
    movieModel.showAll(t1Screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(t1Screening5.cinema, function(err, cinema5) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Bad Boys for Life Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: bb4life.name,
            cinema: cinema5.cinemanum,
            details: bb4life.shortdesc,
            timeslot:  t3Screening5.timeslot,
            timeslot2: t1Screening5.timeslot,
            timeslot3: t2Screening5.timeslot,
            timeslot4: t4Screening5.timeslot,
            date: t1Screening5.date,
            reserve1: '/reserve/badboysforlife/t3',
            reserve2: '/reserve/badboysforlife/t1',
            reserve3: '/reserve/badboysforlife/t2',
            reserve4: '/reserve/badboysforlife/t4',
            post_url: '/reserve/badboysforlife/t3/screening05'
        })
    });
    });
    });
    });
    });
    });
};

//Bad Boys for Life reserve timeslot 3
exports.reserveBadBoyst3 = function(req, res) {
    screeningModel.showAll('5eb8e0d94944bc6057e6b841', function(err, screening5) {
    movieModel.showAll(screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
     
        const  screening = screening5._id;
        const  movie = bb4life.name;
        const  cinema = cinema5.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening5.date;
        const  time_chosen = screening5.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = bb4life.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/badboysforlife/t3/screening05');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/badboysforlife/t3/screening05/tickets');
      
              }
        });
      
    });
    });
    });
};

// Bad Boys for Life tickets screen timeslot 3
exports.ticketsBadBoyst3 = function(req, res) {
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

//Bad Boys for Life reserve screen timeslot 4
exports.showBadBoyst4 = function(req, res) {
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, t1Screening5) {
    screeningModel.showAll('5eb8e0904944bc6057e6b840', function(err, t2Screening5) {
    screeningModel.showAll('5eb8e0d94944bc6057e6b841', function(err, t3Screening5) {
    screeningModel.showAll('5eb8e1024944bc6057e6b842', function(err, t4Screening5) {
    movieModel.showAll(t1Screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(t1Screening5.cinema, function(err, cinema5) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'Bad Boys for Life Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: bb4life.name,
            cinema: cinema5.cinemanum,
            details: bb4life.shortdesc,
            timeslot:  t4Screening5.timeslot,
            timeslot2: t1Screening5.timeslot,
            timeslot3: t2Screening5.timeslot,
            timeslot4: t3Screening5.timeslot,
            date: t1Screening5.date,
            reserve1: '/reserve/badboysforlife/t4',
            reserve2: '/reserve/badboysforlife/t1',
            reserve3: '/reserve/badboysforlife/t2',
            reserve4: '/reserve/badboysforlife/t3',
            post_url: '/reserve/badboysforlife/t4/screening05'
        })
    });
    });
    });
    });
    });
    });
};

//Bad Boys for Life reserve timeslot 4
exports.reserveBadBoyst4 = function(req, res) {
    screeningModel.showAll('5eb8e1024944bc6057e6b842', function(err, screening5) {
    movieModel.showAll(screening5.movie, function(err, bb4life) {
    cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
     
        const  screening = screening5._id;
        const  movie = bb4life.name;
        const  cinema = cinema5.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening5.date;
        const  time_chosen = screening5.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = bb4life.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/badboysforlife/t4/screening05');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/badboysforlife/t4/screening05/tickets');
      
              }
        });
      
    });
    });
    });
};

// Bad Boys for Life tickets screen timeslot 4
exports.ticketsBadBoyst4 = function(req, res) {
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

// ---------------------------------------------------------------------------------------------- //
// END OF BAD BOYS

// DOLITTLE
// ---------------------------------------------------------------------------------------------- //
//DoLittle reserve screen timeslot 1
exports.showDoLittle = function(req, res) {
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, t1Screening6) {
    screeningModel.showAll('5eb8e25d4944bc6057e6b843', function(err, t2Screening6) {
    screeningModel.showAll('5eb8e29f4944bc6057e6b844', function(err, t3Screening6) {
    screeningModel.showAll('5eb8e2de4944bc6057e6b845', function(err, t4Screening6) {
    movieModel.showAll(t1Screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(t1Screening6.cinema, function(err, cinema6) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'DoLittle Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: dolittle.name,
            cinema: cinema6.cinemanum,
            details: dolittle.shortdesc,
            timeslot:  t1Screening6.timeslot,
            timeslot2: t2Screening6.timeslot,
            timeslot3: t3Screening6.timeslot,
            timeslot4: t4Screening6.timeslot,
            date: t1Screening6.date,
            reserve1: '/reserve/dolittle/t1',
            reserve2: '/reserve/dolittle/t2',
            reserve3: '/reserve/dolittle/t3',
            reserve4: '/reserve/dolittle/t4',
            post_url: '/reserve/dolittle/t1/screening06'
        })
    });
    });
    });
    });
    });
    });
};

//DoLittle reserve timeslot 1
exports.reserveDoLittle = function(req, res) {
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, screening6) {
    movieModel.showAll(screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
     
        const  screening = screening6._id;
        const  movie = dolittle.name;
        const  cinema = cinema6.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening6.date;
        const  time_chosen = screening6.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = dolittle.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/dolittle/t1/screening06');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/dolittle/t1/screening06/tickets');
      
              }
        });
      
    });
    });
    });
};

// DoLittle tickets screen timeslot 1
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

//DoLittle reserve screen timeslot 2
exports.showDoLittlet2 = function(req, res) {
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, t1Screening6) {
    screeningModel.showAll('5eb8e25d4944bc6057e6b843', function(err, t2Screening6) {
    screeningModel.showAll('5eb8e29f4944bc6057e6b844', function(err, t3Screening6) {
    screeningModel.showAll('5eb8e2de4944bc6057e6b845', function(err, t4Screening6) {
    movieModel.showAll(t1Screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(t1Screening6.cinema, function(err, cinema6) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'DoLittle Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: dolittle.name,
            cinema: cinema6.cinemanum,
            details: dolittle.shortdesc,
            timeslot:  t2Screening6.timeslot,
            timeslot2: t1Screening6.timeslot,
            timeslot3: t3Screening6.timeslot,
            timeslot4: t4Screening6.timeslot,
            date: t1Screening6.date,
            reserve1: '/reserve/dolittle/t2',
            reserve2: '/reserve/dolittle/t1',
            reserve3: '/reserve/dolittle/t3',
            reserve4: '/reserve/dolittle/t4',
            post_url: '/reserve/dolittle/t2/screening06'
        })
    });
    });
    });
    });
    });
    });
};

//DoLittle reserve timeslot 2
exports.reserveDoLittlet2 = function(req, res) {
    screeningModel.showAll('5eb8e25d4944bc6057e6b843', function(err, screening6) {
    movieModel.showAll(screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
     
        const  screening = screening6._id;
        const  movie = dolittle.name;
        const  cinema = cinema6.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening6.date;
        const  time_chosen = screening6.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = dolittle.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/dolittle/t2/screening06');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/dolittle/t2/screening06/tickets');
      
              }
        });
      
    });
    });
    });
};

// DoLittle tickets screen timeslot 2
exports.ticketsDoLittlet2 = function(req, res) {
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

//DoLittle reserve screen timeslot 3
exports.showDoLittlet3 = function(req, res) {
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, t1Screening6) {
    screeningModel.showAll('5eb8e25d4944bc6057e6b843', function(err, t2Screening6) {
    screeningModel.showAll('5eb8e29f4944bc6057e6b844', function(err, t3Screening6) {
    screeningModel.showAll('5eb8e2de4944bc6057e6b845', function(err, t4Screening6) {
    movieModel.showAll(t1Screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(t1Screening6.cinema, function(err, cinema6) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'DoLittle Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: dolittle.name,
            cinema: cinema6.cinemanum,
            details: dolittle.shortdesc,
            timeslot:  t3Screening6.timeslot,
            timeslot2: t1Screening6.timeslot,
            timeslot3: t2Screening6.timeslot,
            timeslot4: t4Screening6.timeslot,
            date: t1Screening6.date,
            reserve1: '/reserve/dolittle/t3',
            reserve2: '/reserve/dolittle/t1',
            reserve3: '/reserve/dolittle/t2',
            reserve4: '/reserve/dolittle/t4',
            post_url: '/reserve/dolittle/t3/screening06'
        })
    });
    });
    });
    });
    });
    });
};

//DoLittle reserve timeslot 3
exports.reserveDoLittlet3 = function(req, res) {
    screeningModel.showAll('5eb8e29f4944bc6057e6b844', function(err, screening6) {
    movieModel.showAll(screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
     
        const  screening = screening6._id;
        const  movie = dolittle.name;
        const  cinema = cinema6.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening6.date;
        const  time_chosen = screening6.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = dolittle.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/dolittle/t3/screening06');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/dolittle/t3/screening06/tickets');
      
              }
        });
      
    });
    });
    });
};

// DoLittle tickets screen timeslot 3
exports.ticketsDoLittlet3 = function(req, res) {
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

//DoLittle reserve screen timeslot 4
exports.showDoLittlet4 = function(req, res) {
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, t1Screening6) {
    screeningModel.showAll('5eb8e25d4944bc6057e6b843', function(err, t2Screening6) {
    screeningModel.showAll('5eb8e29f4944bc6057e6b844', function(err, t3Screening6) {
    screeningModel.showAll('5eb8e2de4944bc6057e6b845', function(err, t4Screening6) {
    movieModel.showAll(t1Screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(t1Screening6.cinema, function(err, cinema6) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'DoLittle Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: dolittle.name,
            cinema: cinema6.cinemanum,
            details: dolittle.shortdesc,
            timeslot:  t4Screening6.timeslot,
            timeslot2: t1Screening6.timeslot,
            timeslot3: t2Screening6.timeslot,
            timeslot4: t3Screening6.timeslot,
            date: t1Screening6.date,
            reserve1: '/reserve/dolittle/t4',
            reserve2: '/reserve/dolittle/t1',
            reserve3: '/reserve/dolittle/t2',
            reserve4: '/reserve/dolittle/t3',
            post_url: '/reserve/dolittle/t4/screening06'
        })
    });
    });
    });
    });
    });
    });
};

//DoLittle reserve timeslot 4
exports.reserveDoLittlet4 = function(req, res) {
    screeningModel.showAll('5eb8e2de4944bc6057e6b845', function(err, screening6) {
    movieModel.showAll(screening6.movie, function(err, dolittle) {
    cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
     
        const  screening = screening6._id;
        const  movie = dolittle.name;
        const  cinema = cinema6.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening6.date;
        const  time_chosen = screening6.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = dolittle.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/dolittle/t4/screening06');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/dolittle/t4/screening06/tickets');
      
              }
        });
      
    });
    });
    });
};

// DoLittle tickets screen timeslot 4
exports.ticketsDoLittlet4 = function(req, res) {
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

// ---------------------------------------------------------------------------------------------- //
// END OF DOLITTLE

// TNC
// ---------------------------------------------------------------------------------------------- //
//TNC reserve screen timeslot 1
exports.showTNC = function(req, res) {
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, t1Screening7) {
    screeningModel.showAll('5eb8e44322e58f3caf356d65', function(err, t2Screening7) {
    screeningModel.showAll('5eb8e45c22e58f3caf356d66', function(err, t3Screening7) {
    screeningModel.showAll('5eb8e46a22e58f3caf356d67', function(err, t4Screening7) {
    movieModel.showAll(t1Screening7.movie, function(err, tnc) {
    cinemaModel.showAll(t1Screening7.cinema, function(err, cinema7) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Night Clerk Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: tnc.name,
            cinema: cinema7.cinemanum,
            details: tnc.shortdesc,
            timeslot:  t1Screening7.timeslot,
            timeslot2: t2Screening7.timeslot,
            timeslot3: t3Screening7.timeslot,
            timeslot4: t4Screening7.timeslot,
            date: t1Screening7.date,
            reserve1: '/reserve/thenightclerk/t1',
            reserve2: '/reserve/thenightclerk/t2',
            reserve3: '/reserve/thenightclerk/t3',
            reserve4: '/reserve/thenightclerk/t4',
            post_url: '/reserve/thenightclerk/t1/screening07'
        })
    });
    });
    });
    });
    });
    });
};

//TNC reserve timeslot 1
exports.reserveTNC = function(req, res) {
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
    movieModel.showAll(screening7.movie, function(err, tnc) {
    cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
     
        const  screening = screening7._id;
        const  movie = tnc.name;
        const  cinema = cinema7.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening7.date;
        const  time_chosen = screening7.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = tnc.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thenightclerk/t1/screening07');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thenightclerk/t1/screening07/tickets');
      
              }
        });
      
    });
    });
    });
};

// TNC tickets screen timeslot 1
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

//TNC reserve screen timeslot 2
exports.showTNCt2 = function(req, res) {
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, t1Screening7) {
    screeningModel.showAll('5eb8e44322e58f3caf356d65', function(err, t2Screening7) {
    screeningModel.showAll('5eb8e45c22e58f3caf356d66', function(err, t3Screening7) {
    screeningModel.showAll('5eb8e46a22e58f3caf356d67', function(err, t4Screening7) {
    movieModel.showAll(t1Screening7.movie, function(err, tnc) {
    cinemaModel.showAll(t1Screening7.cinema, function(err, cinema7) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Night Clerk Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: tnc.name,
            cinema: cinema7.cinemanum,
            details: tnc.shortdesc,
            timeslot:  t2Screening7.timeslot,
            timeslot2: t1Screening7.timeslot,
            timeslot3: t3Screening7.timeslot,
            timeslot4: t4Screening7.timeslot,
            date: t1Screening7.date,
            reserve1: '/reserve/thenightclerk/t2',
            reserve2: '/reserve/thenightclerk/t1',
            reserve3: '/reserve/thenightclerk/t3',
            reserve4: '/reserve/thenightclerk/t4',
            post_url: '/reserve/thenightclerk/t2/screening07'
        })
    });
    });
    });
    });
    });
    });
};

//TNC reserve timeslot 2
exports.reserveTNCt2 = function(req, res) {
    screeningModel.showAll('5eb8e44322e58f3caf356d65', function(err, screening7) {
    movieModel.showAll(screening7.movie, function(err, tnc) {
    cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
     
        const  screening = screening7._id;
        const  movie = tnc.name;
        const  cinema = cinema7.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening7.date;
        const  time_chosen = screening7.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = tnc.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thenightclerk/t2/screening07');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thenightclerk/t2/screening07/tickets');
      
              }
        });
      
    });
    });
    });
};

// TNC tickets screen timeslot 2
exports.ticketsTNCt2 = function(req, res) {
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

//TNC reserve screen timeslot 3
exports.showTNCt3 = function(req, res) {
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, t1Screening7) {
    screeningModel.showAll('5eb8e44322e58f3caf356d65', function(err, t2Screening7) {
    screeningModel.showAll('5eb8e45c22e58f3caf356d66', function(err, t3Screening7) {
    screeningModel.showAll('5eb8e46a22e58f3caf356d67', function(err, t4Screening7) {
    movieModel.showAll(t1Screening7.movie, function(err, tnc) {
    cinemaModel.showAll(t1Screening7.cinema, function(err, cinema7) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Night Clerk Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: tnc.name,
            cinema: cinema7.cinemanum,
            details: tnc.shortdesc,
            timeslot:  t3Screening7.timeslot,
            timeslot2: t1Screening7.timeslot,
            timeslot3: t2Screening7.timeslot,
            timeslot4: t4Screening7.timeslot,
            date: t1Screening7.date,
            reserve1: '/reserve/thenightclerk/t3',
            reserve2: '/reserve/thenightclerk/t1',
            reserve3: '/reserve/thenightclerk/t2',
            reserve4: '/reserve/thenightclerk/t4',
            post_url: '/reserve/thenightclerk/t3/screening07'
        })
    });
    });
    });
    });
    });
    });
};

//TNC reserve timeslot 3
exports.reserveTNCt3 = function(req, res) {
    screeningModel.showAll('5eb8e45c22e58f3caf356d66', function(err, screening7) {
    movieModel.showAll(screening7.movie, function(err, tnc) {
    cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
     
        const  screening = screening7._id;
        const  movie = tnc.name;
        const  cinema = cinema7.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening7.date;
        const  time_chosen = screening7.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = tnc.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thenightclerk/t3/screening07');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thenightclerk/t3/screening07/tickets');
      
              }
        });
      
    });
    });
    });
};

// TNC tickets screen timeslot 3
exports.ticketsTNCt3 = function(req, res) {
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

//TNC reserve screen timeslot 4
exports.showTNCt4 = function(req, res) {
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, t1Screening7) {
    screeningModel.showAll('5eb8e44322e58f3caf356d65', function(err, t2Screening7) {
    screeningModel.showAll('5eb8e45c22e58f3caf356d66', function(err, t3Screening7) {
    screeningModel.showAll('5eb8e46a22e58f3caf356d67', function(err, t4Screening7) {
    movieModel.showAll(t1Screening7.movie, function(err, tnc) {
    cinemaModel.showAll(t1Screening7.cinema, function(err, cinema7) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Night Clerk Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: tnc.name,
            cinema: cinema7.cinemanum,
            details: tnc.shortdesc,
            timeslot:  t4Screening7.timeslot,
            timeslot2: t1Screening7.timeslot,
            timeslot3: t2Screening7.timeslot,
            timeslot4: t3Screening7.timeslot,
            date: t1Screening7.date,
            reserve1: '/reserve/thenightclerk/t4',
            reserve2: '/reserve/thenightclerk/t1',
            reserve3: '/reserve/thenightclerk/t2',
            reserve4: '/reserve/thenightclerk/t3',
            post_url: '/reserve/thenightclerk/t4/screening07'
        })
    });
    });
    });
    });
    });
    });
};

//TNC reserve timeslot 4
exports.reserveTNCt4 = function(req, res) {
    screeningModel.showAll('5eb8e46a22e58f3caf356d67', function(err, screening7) {
    movieModel.showAll(screening7.movie, function(err, tnc) {
    cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
     
        const  screening = screening7._id;
        const  movie = tnc.name;
        const  cinema = cinema7.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening7.date;
        const  time_chosen = screening7.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = tnc.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thenightclerk/t4/screening07');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thenightclerk/t4/screening07/tickets');
      
              }
        });
      
    });
    });
    });
};

// TNC tickets screen timeslot 4
exports.ticketsTNCt4 = function(req, res) {
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
// ---------------------------------------------------------------------------------------------- //
// END OF TNC

// THE CALL OF THE WILD
// ---------------------------------------------------------------------------------------------- //
//The Call of the Wild reserve screen timeslot 1
exports.showCallofWild = function(req, res) {
    screeningModel.showAll('5eb8e55122e58f3caf356d68', function(err, t1Screening8) {
    screeningModel.showAll('5eb8e600df7d525ab5728f50', function(err, t2Screening8) {
    screeningModel.showAll('5eb8e60fdf7d525ab5728f51', function(err, t3Screening8) {
    screeningModel.showAll('5eb8e61bdf7d525ab5728f52', function(err, t4Screening8) {
    movieModel.showAll(t1Screening8.movie, function(err, cow) {
    cinemaModel.showAll(t1Screening8.cinema, function(err, cinema8) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Call of the Wild Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: cow.name,
            cinema: cinema8.cinemanum,
            details: cow.shortdesc,
            timeslot:  t1Screening8.timeslot,
            timeslot2: t2Screening8.timeslot,
            timeslot3: t3Screening8.timeslot,
            timeslot4: t4Screening8.timeslot,
            date: t1Screening8.date,
            reserve1: '/reserve/thecallofthewild/t1',
            reserve2: '/reserve/thecallofthewild/t2',
            reserve3: '/reserve/thecallofthewild/t3',
            reserve4: '/reserve/thecallofthewild/t4',
            post_url: '/reserve/thecallofthewild/t1/screening08'
        })
    });
    });
    });
    });
    });
    });
};

//The Call of the Wild reserve timeslot 1
exports.reserveCallofWild = function(req, res) {
    screeningModel.showAll('5eb8e55122e58f3caf356d68', function(err, screening8) {
    movieModel.showAll(screening8.movie, function(err, cow) {
    cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
     
        const  screening = screening8._id;
        const  movie = cow.name;
        const  cinema = cinema8.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening8.date;
        const  time_chosen = screening8.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = cow.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thecallofthewild/t1/screening08');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thecallofthewild/t1/screening08/tickets');
      
              }
        });
      
    });
    });
    });
};

// The Call of the Wild tickets screen timeslot 1
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

//The Call of the Wild reserve screen timeslot 2
exports.showCallofWildt2 = function(req, res) {
    screeningModel.showAll('5eb8e55122e58f3caf356d68', function(err, t1Screening8) {
    screeningModel.showAll('5eb8e600df7d525ab5728f50', function(err, t2Screening8) {
    screeningModel.showAll('5eb8e60fdf7d525ab5728f51', function(err, t3Screening8) {
    screeningModel.showAll('5eb8e61bdf7d525ab5728f52', function(err, t4Screening8) {
    movieModel.showAll(t1Screening8.movie, function(err, cow) {
    cinemaModel.showAll(t1Screening8.cinema, function(err, cinema8) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Call of the Wild Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: cow.name,
            cinema: cinema8.cinemanum,
            details: cow.shortdesc,
            timeslot:  t2Screening8.timeslot,
            timeslot2: t1Screening8.timeslot,
            timeslot3: t3Screening8.timeslot,
            timeslot4: t4Screening8.timeslot,
            date: t1Screening8.date,
            reserve1: '/reserve/thecallofthewild/t2',
            reserve2: '/reserve/thecallofthewild/t1',
            reserve3: '/reserve/thecallofthewild/t3',
            reserve4: '/reserve/thecallofthewild/t4',
            post_url: '/reserve/thecallofthewild/t2/screening08'
        })
    });
    });
    });
    });
    });
    });
};

//The Call of the Wild reserve timeslot 2
exports.reserveCallofWildt2 = function(req, res) {
    screeningModel.showAll('5eb8e600df7d525ab5728f50', function(err, screening8) {
    movieModel.showAll(screening8.movie, function(err, cow) {
    cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
     
        const  screening = screening8._id;
        const  movie = cow.name;
        const  cinema = cinema8.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening8.date;
        const  time_chosen = screening8.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = cow.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thecallofthewild/t2/screening08');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thecallofthewild/t2/screening08/tickets');
      
              }
        });
      
    });
    });
    });
};

// The Call of the Wild tickets screen timeslot 2
exports.ticketsCallofWildt2 = function(req, res) {
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

//The Call of the Wild reserve screen timeslot 3
exports.showCallofWildt3 = function(req, res) {
    screeningModel.showAll('5eb8e55122e58f3caf356d68', function(err, t1Screening8) {
    screeningModel.showAll('5eb8e600df7d525ab5728f50', function(err, t2Screening8) {
    screeningModel.showAll('5eb8e60fdf7d525ab5728f51', function(err, t3Screening8) {
    screeningModel.showAll('5eb8e61bdf7d525ab5728f52', function(err, t4Screening8) {
    movieModel.showAll(t1Screening8.movie, function(err, cow) {
    cinemaModel.showAll(t1Screening8.cinema, function(err, cinema8) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Call of the Wild Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: cow.name,
            cinema: cinema8.cinemanum,
            details: cow.shortdesc,
            timeslot:  t3Screening8.timeslot,
            timeslot2: t1Screening8.timeslot,
            timeslot3: t2Screening8.timeslot,
            timeslot4: t4Screening8.timeslot,
            date: t1Screening8.date,
            reserve1: '/reserve/thecallofthewild/t3',
            reserve2: '/reserve/thecallofthewild/t1',
            reserve3: '/reserve/thecallofthewild/t2',
            reserve4: '/reserve/thecallofthewild/t4',
            post_url: '/reserve/thecallofthewild/t3/screening08'
        })
    });
    });
    });
    });
    });
    });
};

//The Call of the Wild reserve timeslot 3
exports.reserveCallofWildt3 = function(req, res) {
    screeningModel.showAll('5eb8e60fdf7d525ab5728f51', function(err, screening8) {
    movieModel.showAll(screening8.movie, function(err, cow) {
    cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
     
        const  screening = screening8._id;
        const  movie = cow.name;
        const  cinema = cinema8.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening8.date;
        const  time_chosen = screening8.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = cow.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thecallofthewild/t3/screening08');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thecallofthewild/t3/screening08/tickets');
      
              }
        });
      
    });
    });
    });
};

// The Call of the Wild tickets screen timeslot 3
exports.ticketsCallofWildt3 = function(req, res) {
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

//The Call of the Wild reserve screen timeslot 4
exports.showCallofWildt4 = function(req, res) {
    screeningModel.showAll('5eb8e55122e58f3caf356d68', function(err, t1Screening8) {
    screeningModel.showAll('5eb8e600df7d525ab5728f50', function(err, t2Screening8) {
    screeningModel.showAll('5eb8e60fdf7d525ab5728f51', function(err, t3Screening8) {
    screeningModel.showAll('5eb8e61bdf7d525ab5728f52', function(err, t4Screening8) {
    movieModel.showAll(t1Screening8.movie, function(err, cow) {
    cinemaModel.showAll(t1Screening8.cinema, function(err, cinema8) {
        res.render('reserve',{
            layout: 'main-regular',
            title: 'The Call of the Wild Reservation',
            generatedSeatNumber: generatedSeatNumber,
            movieTitle: cow.name,
            cinema: cinema8.cinemanum,
            details: cow.shortdesc,
            timeslot:  t4Screening8.timeslot,
            timeslot2: t1Screening8.timeslot,
            timeslot3: t2Screening8.timeslot,
            timeslot4: t3Screening8.timeslot,
            date: t1Screening8.date,
            reserve1: '/reserve/thecallofthewild/t4',
            reserve2: '/reserve/thecallofthewild/t1',
            reserve3: '/reserve/thecallofthewild/t2',
            reserve4: '/reserve/thecallofthewild/t3',
            post_url: '/reserve/thecallofthewild/t4/screening08'
        })
    });
    });
    });
    });
    });
    });
};

//The Call of the Wild reserve timeslot 4
exports.reserveCallofWildt4 = function(req, res) {
    screeningModel.showAll('5eb8e61bdf7d525ab5728f52', function(err, screening8) {
    movieModel.showAll(screening8.movie, function(err, cow) {
    cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
     
        const  screening = screening8._id;
        const  movie = cow.name;
        const  cinema = cinema8.cinemanum;
        const  reserved_seats = req.body.seats;
        const  date_chosen = screening8.date;
        const  time_chosen = screening8.timeslot;
        const  user = req.session.user;
        var count = 0;
        var totalprice = 0;

        count = reserved_seats.length;

        if (count == 2 && reserved_seats[1] != "") // && reserved_seats[1] == "" does not work
            totalprice = 300; 

        else                     
            totalprice = cow.price * count;

        const newReservation = {
            screening, 
            movie,
            cinema,
            reserved_seats,
            date_chosen,
            time_chosen,
            user,
            totalprice
        };

        reservationModel.reserve(newReservation, (err, reservation) => {
            if (err) {
                req.flash('error_msg', 'Reservation could not be created!');
                //console.log(err.errors);
          
                result = { success: false, message: "Reservation was not created!" }
                //res.send(result);
                // throw err; // This is commented so that the server won't be killed.
                res.redirect('/reserve/thecallofthewild/t4/screening08');
              } else {
                console.log("Successfully added reservation!");
                console.log(reservation); // Check out the logs and see there's a new __v attribute!
          
                // Let's create a custom response that the user was created successfully
               // result = { success: true, message: "Reservation created!" }
          
                // Sending the result as is to handle it the "AJAX-way".
               // res.send(result);
               res.redirect('/reserve/thecallofthewild/t4/screening08/tickets');
      
              }
        });
      
    });
    });
    });
};

// The Call of the Wild tickets screen timeslot 4
exports.ticketsCallofWildt4 = function(req, res) {
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
// ---------------------------------------------------------------------------------------------- //
// END OF THE CALL OF THE WILD
  
/*================================================================*/

// Admin home
 // admin home account (logged in) route
exports.showHome = function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template

    // NOW SHOWING ROW 1
    // SCREENING 1
    screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, t1Screening1) {
    screeningModel.showAll('5eb8caf24944bc6057e6b834', function(err, t2Screening1) {
    screeningModel.showAll('5eb8cd644944bc6057e6b835', function(err, t3Screening1) {
    screeningModel.showAll('5eb8cdc14944bc6057e6b836', function(err, t4Screening1) {
    movieModel.showAll(t1Screening1.movie, function(err, movie1) {
    cinemaModel.showAll(t1Screening1.cinema, function(err, cinema1) {
    // SCREENING 2
    screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, t1Screening2) {
    screeningModel.showAll('5eb8d8fa4944bc6057e6b837', function(err, t2Screening2) {
    screeningModel.showAll('5eb8d9264944bc6057e6b838', function(err, t3Screening2) {
    screeningModel.showAll('5eb8d9514944bc6057e6b839', function(err, t4Screening2) {
    movieModel.showAll(t1Screening2.movie, function(err, movie2) {
    cinemaModel.showAll(t1Screening2.cinema, function(err, cinema2) {
    // SCREENING 3
    screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, t1Screening3) {
    screeningModel.showAll('5eb8dba94944bc6057e6b83a', function(err, t2Screening3) {
    screeningModel.showAll('5eb8dbec4944bc6057e6b83b', function(err, t3Screening3) {
    screeningModel.showAll('5eb8dc1a4944bc6057e6b83c', function(err, t4Screening3) {
    movieModel.showAll(t1Screening3.movie, function(err, movie3) {
    cinemaModel.showAll(t1Screening3.cinema, function(err, cinema3) {
    // SCREENING 4
    screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, t1Screening4) {
    screeningModel.showAll('5eb8de494944bc6057e6b83d', function(err, t2Screening4) {
    screeningModel.showAll('5eb8de884944bc6057e6b83e', function(err, t3Screening4) {
    screeningModel.showAll('5eb8deed4944bc6057e6b83f', function(err, t4Screening4) {
    movieModel.showAll(t1Screening4.movie, function(err, movie4) {
    cinemaModel.showAll(t1Screening4.cinema, function(err, cinema4) {
    // SCREENING 5
    screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, t1Screening5) {
    screeningModel.showAll('5eb8e0904944bc6057e6b840', function(err, t2Screening5) {
    screeningModel.showAll('5eb8e0d94944bc6057e6b841', function(err, t3Screening5) {
    screeningModel.showAll('5eb8e1024944bc6057e6b842', function(err, t4Screening5) {
    movieModel.showAll(t1Screening5.movie, function(err, movie5) {
    cinemaModel.showAll(t1Screening5.cinema, function(err, cinema5) {
    // SCREENING 6
    screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, t1Screening6) {
    screeningModel.showAll('5eb8e25d4944bc6057e6b843', function(err, t2Screening6) {
    screeningModel.showAll('5eb8e29f4944bc6057e6b844', function(err, t3Screening6) {
    screeningModel.showAll('5eb8e2de4944bc6057e6b845', function(err, t4Screening6) {
    movieModel.showAll(t1Screening6.movie, function(err, movie6) {
    cinemaModel.showAll(t1Screening6.cinema, function(err, cinema6) {
    // SCREENING 7
    screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, t1Screening7) {
    screeningModel.showAll('5eb8e44322e58f3caf356d65', function(err, t2Screening7) {
    screeningModel.showAll('5eb8e45c22e58f3caf356d66', function(err, t3Screening7) {
    screeningModel.showAll('5eb8e46a22e58f3caf356d67', function(err, t4Screening7) {
    movieModel.showAll(t1Screening7.movie, function(err, movie7) {
    cinemaModel.showAll(t1Screening7.cinema, function(err, cinema7) {
    // SCREENING 8
    screeningModel.showAll('5eb8e55122e58f3caf356d68', function(err, t1Screening8) {
    screeningModel.showAll('5eb8e600df7d525ab5728f50', function(err, t2Screening8) {
    screeningModel.showAll('5eb8e60fdf7d525ab5728f51', function(err, t3Screening8) {
    screeningModel.showAll('5eb8e61bdf7d525ab5728f52', function(err, t4Screening8) {
    movieModel.showAll(t1Screening8.movie, function(err, movie8) {
    cinemaModel.showAll(t1Screening8.cinema, function(err, cinema8) {

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
      date1start: t1Screening1.date,
      date1end: 'May 18, 2020',
      date2start: t1Screening2.date,
      date2end: 'May 18, 2020',
      date3start: t1Screening3.date,
      date3end: 'May 18, 2020',
      date4start: t1Screening4.date,
      date4end: 'May 18, 2020',
      date5start: t1Screening5.date,
      date5end: 'May 18, 2020',
      date6start: t1Screening6.date,
      date6end: 'May 18, 2020',
      date7start: t1Screening7.date,
      date7end: 'May 18, 2020',
      date8start: t1Screening8.date,
      date8end: 'May 18, 2020',
     
      // timeslots
      s1timeslot1: t1Screening1.timeslot,
      s1timeslot2: t2Screening1.timeslot,
      s1timeslot3: t3Screening1.timeslot,
      s1timeslot4: t4Screening1.timeslot,

      s2timeslot1: t1Screening2.timeslot,
      s2timeslot2: t2Screening2.timeslot,
      s2timeslot3: t3Screening2.timeslot,
      s2timeslot4: t4Screening2.timeslot,

      s3timeslot1: t1Screening3.timeslot,
      s3timeslot2: t2Screening3.timeslot,
      s3timeslot3: t3Screening3.timeslot,
      s3timeslot4: t4Screening3.timeslot,

      s4timeslot1: t1Screening4.timeslot,
      s4timeslot2: t2Screening4.timeslot,
      s4timeslot3: t3Screening4.timeslot,
      s4timeslot4: t4Screening4.timeslot,
      
      s5timeslot1: t1Screening5.timeslot,
      s5timeslot2: t2Screening5.timeslot,
      s5timeslot3: t3Screening5.timeslot,
      s5timeslot4: t4Screening5.timeslot,

      s6timeslot1: t1Screening6.timeslot,
      s6timeslot2: t2Screening6.timeslot,
      s6timeslot3: t3Screening6.timeslot,
      s6timeslot4: t4Screening6.timeslot,

      s7timeslot1: t1Screening7.timeslot,
      s7timeslot2: t2Screening7.timeslot,
      s7timeslot3: t3Screening7.timeslot,
      s7timeslot4: t4Screening7.timeslot,

      s8timeslot1: t1Screening8.timeslot,
      s8timeslot2: t2Screening8.timeslot,
      s8timeslot3: t3Screening8.timeslot,
      s8timeslot4: t4Screening8.timeslot,

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

  }); // screening 1 timeslot 1
  }); // screening 1 timeslot 2
  }); // screening 1 timeslot 3
  }); // screening 1 timeslot 4
  }); // movie 1
  }); // cinema 1

  }); // screening 2 timeslot 1
  }); // screening 2 timeslot 2
  }); // screening 2 timeslot 3
  }); // screening 2 timeslot 4
  }); // movie 2
  }); // cinema 2

  }); // screening 3 timeslot 1
  }); // screening 3 timeslot 2
  }); // screening 3 timeslot 3
  }); // screening 3 timeslot 4
  }); // movie 3
  }); // cinema 3

  }); // screening 4 timeslot 1
  }); // screening 4 timeslot 2
  }); // screening 4 timeslot 3
  }); // screening 4 timeslot 4
  }); // movie 4
  }); // cinema 4

  }); // screening 5 timeslot 1
  }); // screening 5 timeslot 2
  }); // screening 5 timeslot 3
  }); // screening 5 timeslot 4
  }); // movie 5
  }); // cinema 5

  }); // screening 6 timeslot 1
  }); // screening 6 timeslot 2
  }); // screening 6 timeslot 3
  }); // screening 6 timeslot 4
  }); // movie 6
  }); // cinema 6

  }); // screening 7 timeslot 1
  }); // screening 7 timeslot 2
  }); // screening 7 timeslot 3
  }); // screening 7 timeslot 4
  }); // movie 7
  }); // cinema 7

  }); // screening 8 timeslot 1
  }); // screening 8 timeslot 2
  }); // screening 8 timeslot 3
  }); // screening 8 timeslot 4
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

