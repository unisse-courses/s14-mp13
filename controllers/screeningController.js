const screeningModel = require('../models/screening');
const movieModel = require('../models/movie');
const cinemaModel = require('../models/cinema');

exports.showAllScreenings = function(req, res) {
        // SCREENING 1
        screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, screening1) {
        movieModel.showAll(screening1.movie, function(err, _1917) {
        cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
        // SCREENING 2
        screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, screening2) {
        movieModel.showAll(screening2.movie, function(err, parasite) {
        cinemaModel.showAll(screening2.cinema, function(err, cinema2) {
        // SCREENING 3
        screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
        movieModel.showAll(screening3.movie, function(err, sonic) {
        cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
        // SCREENING 4
        screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, screening4) {
        movieModel.showAll(screening4.movie, function(err, bop) {
        cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
        // SCREENING 5
        screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
        movieModel.showAll(screening5.movie, function(err, bbsforlife) {
        cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
        // SCREENING 6
        screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, screening6) {
        movieModel.showAll(screening6.movie, function(err, dolittle) {
        cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
        // SCREENING 7
        screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
        movieModel.showAll(screening7.movie, function(err, tnc) {
        cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
        // SCREENING 7
        screeningModel.showAll('5e87005f1c9d440000ec3b21', function(err, screening8) {
        movieModel.showAll(screening8.movie, function(err, tcwild) {
        cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
            
        res.render('schedules', {
          title: 'W&Js Cinemas Schedules',
          titledesc: 'Reserve seats based on your preferred schedule.',
    
          // SCREENING 1
          img_url: _1917.img_url,
          name: _1917.name,
          rating: _1917.rating,
          cinema: cinema1.cinemanum,
          price: _1917.price,
          date: screening1.dates,
          timeslots: screening1.timeslots,
    
          //SCREENING 2
          img_url2: parasite.img_url,
          name2: parasite.name,
          rating2: parasite.rating,
          cinema2: cinema2.cinemanum,
          price2: parasite.price,
          date2: screening2.dates,
          timeslots2: screening2.timeslots,
    
          //SCREENING 3
          img_url3: sonic.img_url,
          name3: sonic.name,
          rating3: sonic.rating,
          cinema3: cinema3.cinemanum,
          price3: sonic.price,
          date3: screening3.dates,
          timeslots3: screening3.timeslots,
    
          //SCREENING 4
          img_url4: bop.img_url,
          name4: bop.name,
          rating4: bop.rating,
          cinema4: cinema4.cinemanum,
          price4: bop.price,
          date4: screening4.dates,
          timeslots4: screening4.timeslots,
    
          //SCREENING 5
          img_url5: bbsforlife.img_url,
          name5: bbsforlife.name,
          rating5: bbsforlife.rating,
          cinema5: cinema5.cinemanum,
          price5: bbsforlife.price,
          date5: screening5.dates,
          timeslots5: screening5.timeslots,
    
          //SCREENING 6
          img_url6: dolittle.img_url,
          name6: dolittle.name,
          rating6: dolittle.rating,
          cinema6: cinema6.cinemanum,
          price6: dolittle.price,
          date6: screening6.dates,
          timeslots6: screening6.timeslots,
    
          //SCREENING 7
          img_url7: tnc.img_url,
          name7: tnc.name,
          rating7: tnc.rating,
          cinema7: cinema7.cinemanum,
          price7: tnc.price,
          date7: screening7.dates,
          timeslots7: screening7.timeslots,
    
          //SCREENING 8
          img_url8: tcwild.img_url,
          name8: tcwild.name,
          rating8: tcwild.rating,
          cinema8: cinema8.cinemanum,
          price8: tcwild.price,
          date8: screening8.dates,
          timeslots8: screening8.timeslots
        })
    
        }); // screening 1
        }); // _1917
        }); // cinema 1
    
        }); // screening 2
        }); // parasite
        }); // cinema 2
    
        }); // screening 3
        }); // sonic
        }); // cinema 3
    
        }); // screening 4
        }); // bop
        }); // cinema 4
    
        }); // screening 5
        }); // bbsforlife
        }); // cinema 5
    
        }); // screening 6
        }); // dolittle
        }); // cinema 6
    
        }); // screening 7
        }); // tnc
        }); // cinema 7
    
        }); // screening 8
        }); // tcwild
        }); // cinema 8
};

exports.showAllScreeningsUser = function(req, res) {
  // SCREENING 1
  screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, screening1) {
  movieModel.showAll(screening1.movie, function(err, _1917) {
  cinemaModel.showAll(screening1.cinema, function(err, cinema1) {
  // SCREENING 2
  screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, screening2) {
  movieModel.showAll(screening2.movie, function(err, parasite) {
  cinemaModel.showAll(screening2.cinema, function(err, cinema2) {
  // SCREENING 3
  screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, screening3) {
  movieModel.showAll(screening3.movie, function(err, sonic) {
  cinemaModel.showAll(screening3.cinema, function(err, cinema3) {
  // SCREENING 4
  screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, screening4) {
  movieModel.showAll(screening4.movie, function(err, bop) {
  cinemaModel.showAll(screening4.cinema, function(err, cinema4) {
  // SCREENING 5
  screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, screening5) {
  movieModel.showAll(screening5.movie, function(err, bbsforlife) {
  cinemaModel.showAll(screening5.cinema, function(err, cinema5) {
  // SCREENING 6
  screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, screening6) {
  movieModel.showAll(screening6.movie, function(err, dolittle) {
  cinemaModel.showAll(screening6.cinema, function(err, cinema6) {
  // SCREENING 7
  screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, screening7) {
  movieModel.showAll(screening7.movie, function(err, tnc) {
  cinemaModel.showAll(screening7.cinema, function(err, cinema7) {
  // SCREENING 7
  screeningModel.showAll('5e87005f1c9d440000ec3b21', function(err, screening8) {
  movieModel.showAll(screening8.movie, function(err, tcwild) {
  cinemaModel.showAll(screening8.cinema, function(err, cinema8) {
      
  res.render('schedules-regular', {
    layout: 'main-regular',
    title: 'W&Js Cinemas Schedules',
    titledesc: 'Reserve seats based on your preferred schedule.',

    // SCREENING 1
    img_url: _1917.img_url,
    name: _1917.name,
    rating: _1917.rating,
    cinema: cinema1.cinemanum,
    price: _1917.price,
    date: screening1.dates,
    timeslots: screening1.timeslots,

    //SCREENING 2
    img_url2: parasite.img_url,
    name2: parasite.name,
    rating2: parasite.rating,
    cinema2: cinema2.cinemanum,
    price2: parasite.price,
    date2: screening2.dates,
    timeslots2: screening2.timeslots,

    //SCREENING 3
    img_url3: sonic.img_url,
    name3: sonic.name,
    rating3: sonic.rating,
    cinema3: cinema3.cinemanum,
    price3: sonic.price,
    date3: screening3.dates,
    timeslots3: screening3.timeslots,

    //SCREENING 4
    img_url4: bop.img_url,
    name4: bop.name,
    rating4: bop.rating,
    cinema4: cinema4.cinemanum,
    price4: bop.price,
    date4: screening4.dates,
    timeslots4: screening4.timeslots,

    //SCREENING 5
    img_url5: bbsforlife.img_url,
    name5: bbsforlife.name,
    rating5: bbsforlife.rating,
    cinema5: cinema5.cinemanum,
    price5: bbsforlife.price,
    date5: screening5.dates,
    timeslots5: screening5.timeslots,

    //SCREENING 6
    img_url6: dolittle.img_url,
    name6: dolittle.name,
    rating6: dolittle.rating,
    cinema6: cinema6.cinemanum,
    price6: dolittle.price,
    date6: screening6.dates,
    timeslots6: screening6.timeslots,

    //SCREENING 7
    img_url7: tnc.img_url,
    name7: tnc.name,
    rating7: tnc.rating,
    cinema7: cinema7.cinemanum,
    price7: tnc.price,
    date7: screening7.dates,
    timeslots7: screening7.timeslots,

    //SCREENING 8
    img_url8: tcwild.img_url,
    name8: tcwild.name,
    rating8: tcwild.rating,
    cinema8: cinema8.cinemanum,
    price8: tcwild.price,
    date8: screening8.dates,
    timeslots8: screening8.timeslots
  })

  }); // screening 1
  }); // _1917
  }); // cinema 1

  }); // screening 2
  }); // parasite
  }); // cinema 2

  }); // screening 3
  }); // sonic
  }); // cinema 3

  }); // screening 4
  }); // bop
  }); // cinema 4

  }); // screening 5
  }); // bbsforlife
  }); // cinema 5

  }); // screening 6
  }); // dolittle
  }); // cinema 6

  }); // screening 7
  }); // tnc
  }); // cinema 7

  }); // screening 8
  }); // tcwild
  }); // cinema 8
};
