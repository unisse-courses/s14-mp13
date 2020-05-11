const screeningModel = require('../models/screening');
const movieModel = require('../models/movie');
const cinemaModel = require('../models/cinema');

exports.showAllScreenings = function(req, res) {

        // SCREENING 1
        screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, t1Screening1) {
        screeningModel.showAll('5eb8caf24944bc6057e6b834', function(err, t2Screening1) {
        screeningModel.showAll('5eb8cd644944bc6057e6b835', function(err, t3Screening1) {
        screeningModel.showAll('5eb8cdc14944bc6057e6b836', function(err, t4Screening1) {
        movieModel.showAll(t1Screening1.movie, function(err, _1917) {
        cinemaModel.showAll(t1Screening1.cinema, function(err, cinema1) {
        // SCREENING 2
        screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, t1Screening2) {
        screeningModel.showAll('5eb8d8fa4944bc6057e6b837', function(err, t2Screening2) {
        screeningModel.showAll('5eb8d9264944bc6057e6b838', function(err, t3Screening2) {
        screeningModel.showAll('5eb8d9514944bc6057e6b839', function(err, t4Screening2) {
        movieModel.showAll(t1Screening2.movie, function(err, parasite) {
        cinemaModel.showAll(t1Screening2.cinema, function(err, cinema2) {
        // SCREENING 3
        screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, t1Screening3) {
        screeningModel.showAll('5eb8dba94944bc6057e6b83a', function(err, t2Screening3) {
        screeningModel.showAll('5eb8dbec4944bc6057e6b83b', function(err, t3Screening3) {
        screeningModel.showAll('5eb8dc1a4944bc6057e6b83c', function(err, t4Screening3) {
        movieModel.showAll(t1Screening3.movie, function(err, sonic) {
        cinemaModel.showAll(t1Screening3.cinema, function(err, cinema3) {
        // SCREENING 4
        screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, t1Screening4) {
        screeningModel.showAll('5eb8de494944bc6057e6b83d', function(err, t2Screening4) {
        screeningModel.showAll('5eb8de884944bc6057e6b83e', function(err, t3Screening4) {
        screeningModel.showAll('5eb8deed4944bc6057e6b83f', function(err, t4Screening4) {
        movieModel.showAll(t1Screening4.movie, function(err, bop) {
        cinemaModel.showAll(t1Screening4.cinema, function(err, cinema4) {
        // SCREENING 5
        screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, t1Screening5) {
        screeningModel.showAll('5eb8e0904944bc6057e6b840', function(err, t2Screening5) {
        screeningModel.showAll('5eb8e0d94944bc6057e6b841', function(err, t3Screening5) {
        screeningModel.showAll('5eb8e1024944bc6057e6b842', function(err, t4Screening5) {
        movieModel.showAll(t1Screening5.movie, function(err, bbsforlife) {
        cinemaModel.showAll(t1Screening5.cinema, function(err, cinema5) {
        // SCREENING 6
        screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, t1Screening6) {
        screeningModel.showAll('5eb8e25d4944bc6057e6b843', function(err, t2Screening6) {
        screeningModel.showAll('5eb8e29f4944bc6057e6b844', function(err, t3Screening6) {
        screeningModel.showAll('5eb8e2de4944bc6057e6b845', function(err, t4Screening6) {
        movieModel.showAll(t1Screening6.movie, function(err, dolittle) {
        cinemaModel.showAll(t1Screening6.cinema, function(err, cinema6) {
        // SCREENING 7
        screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, t1Screening7) {
        screeningModel.showAll('5eb8e44322e58f3caf356d65', function(err, t2Screening7) {
        screeningModel.showAll('5eb8e45c22e58f3caf356d66', function(err, t3Screening7) {
        screeningModel.showAll('5eb8e46a22e58f3caf356d67', function(err, t4Screening7) {
        movieModel.showAll(t1Screening7.movie, function(err, tnc) {
        cinemaModel.showAll(t1Screening7.cinema, function(err, cinema7) {
        // SCREENING 8
        screeningModel.showAll('5eb8e55122e58f3caf356d68', function(err, t1Screening8) {
        screeningModel.showAll('5eb8e600df7d525ab5728f50', function(err, t2Screening8) {
        screeningModel.showAll('5eb8e60fdf7d525ab5728f51', function(err, t3Screening8) {
        screeningModel.showAll('5eb8e61bdf7d525ab5728f52', function(err, t4Screening8) {
        movieModel.showAll(t1Screening8.movie, function(err, tcwild) {
        cinemaModel.showAll(t1Screening8.cinema, function(err, cinema8) {
            
        res.render('schedules', {
          title: 'W&Js Cinemas Schedules',
          titledesc: 'Reserve seats based on your preferred schedule.',
    
          // SCREENING 1
          img_url: _1917.img_url,
          name: _1917.name,
          rating: _1917.rating,
          cinema: cinema1.cinemanum,
          price: _1917.price,
          date: t1Screening1.date,
          timeslot: t1Screening1.timeslot,
          t2Timeslot: t2Screening1.timeslot,
          t3Timeslot: t3Screening1.timeslot,
          t4Timeslot: t4Screening1.timeslot,
    
          //SCREENING 2
          img_url2: parasite.img_url,
          name2: parasite.name,
          rating2: parasite.rating,
          cinema2: cinema2.cinemanum,
          price2: parasite.price,
          date2: t2Screening2.date,
          timeslot2: t2Screening2.timeslot,
          t2Timeslot2: t2Screening2.timeslot,
          t3Timeslot2: t3Screening2.timeslot,
          t4Timeslot2: t4Screening2.timeslot,
    
          //SCREENING 3
          img_url3: sonic.img_url,
          name3: sonic.name,
          rating3: sonic.rating,
          cinema3: cinema3.cinemanum,
          price3: sonic.price,
          date3: t1Screening3.date,
          timeslot3: t1Screening3.timeslot,
          t2Timeslot3: t2Screening3.timeslot,
          t3Timeslot3: t3Screening3.timeslot,
          t4Timeslot3: t4Screening3.timeslot,
    
          //SCREENING 4
          img_url4: bop.img_url,
          name4: bop.name,
          rating4: bop.rating,
          cinema4: cinema4.cinemanum,
          price4: bop.price,
          date4: t1Screening4.date,
          timeslot4: t1Screening4.timeslot,
          t2Timeslot4: t2Screening4.timeslot,
          t3Timeslot4: t3Screening4.timeslot,
          t4Timeslot4: t4Screening4.timeslot,
    
          //SCREENING 5
          img_url5: bbsforlife.img_url,
          name5: bbsforlife.name,
          rating5: bbsforlife.rating,
          cinema5: cinema5.cinemanum,
          price5: bbsforlife.price,
          date5: t1Screening5.date,
          timeslot5: t1Screening5.timeslot,
          t2Timeslot5: t2Screening5.timeslot,
          t3Timeslot5: t3Screening5.timeslot,
          t4Timeslot5: t4Screening5.timeslot,
    
          //SCREENING 6
          img_url6: dolittle.img_url,
          name6: dolittle.name,
          rating6: dolittle.rating,
          cinema6: cinema6.cinemanum,
          price6: dolittle.price,
          date6: t1Screening6.date,
          timeslot6: t1Screening6.timeslot,
          t2Timeslot6: t2Screening6.timeslot,
          t3Timeslot6: t3Screening6.timeslot,
          t4Timeslot6: t4Screening6.timeslot,
    
    
          //SCREENING 7
          img_url7: tnc.img_url,
          name7: tnc.name,
          rating7: tnc.rating,
          cinema7: cinema7.cinemanum,
          price7: tnc.price,
          date7: t1Screening7.date,
          timeslot7: t1Screening7.timeslot,
          t2Timeslot7: t2Screening7.timeslot,
          t3Timeslot7: t3Screening7.timeslot,
          t4Timeslot7: t4Screening7.timeslot,
          //SCREENING 8
          img_url8: tcwild.img_url,
          name8: tcwild.name,
          rating8: tcwild.rating,
          cinema8: cinema8.cinemanum,
          price8: tcwild.price,
          date8: t1Screening8.date,
          timeslot8: t1Screening8.timeslot,
          t2Timeslot8: t2Screening8.timeslot,
          t3Timeslot8: t3Screening8.timeslot,
          t4Timeslot8: t4Screening8.timeslot,
        })
    
        }); // screening 1 timeslot 1
        }); // screening 1 timeslot 2
        }); // screening 1 timeslot 3
        }); // screening 1 timeslot 4
        }); // _1917
        }); // cinema 1
    
        }); // screening 2 timeslot 1
        }); // screening 2 timeslot 2
        }); // screening 2 timeslot 3
        }); // screening 2 timeslot 4
        }); // parasite
        }); // cinema 2
    
        }); // screening 3 timeslot 1
        }); // screening 3 timeslot 2
        }); // screening 3 timeslot 3
        }); // screening 3 timeslot 4
        }); // sonic
        }); // cinema 3
    
        }); // screening 4 timeslot 1
        }); // screening 4 timeslot 2
        }); // screening 4 timeslot 3
        }); // screening 4 timeslot 4
        }); // bop
        }); // cinema 4
    
        }); // screening 5 timeslot 1
        }); // screening 5 timeslot 2
        }); // screening 5 timeslot 3
        }); // screening 5 timeslot 4
        }); // bbsforlife
        }); // cinema 5
    
        }); // screening 6 timeslot 1
        }); // screening 6 timeslot 2
        }); // screening 6 timeslot 3
        }); // screening 6 timeslot 4
        }); // dolittle
        }); // cinema 6
    
        }); // screening 7 timeslot 1
        }); // screening 7 timeslot 2
        }); // screening 7 timeslot 3
        }); // screening 7 timeslot 4
        }); // tnc
        }); // cinema 7
    
        }); // screening 8 timeslot 1
        }); // screening 8 timeslot 2
        }); // screening 8 timeslot 3
        }); // screening 8 timeslot 4
        }); // tcwild
        }); // cinema 8
};

exports.showAllScreeningsUser = function(req, res) {
        // SCREENING 1
        screeningModel.showAll('5e86f3c71c9d440000ec3b19', function(err, t1Screening1) {
        screeningModel.showAll('5eb8caf24944bc6057e6b834', function(err, t2Screening1) {
        screeningModel.showAll('5eb8cd644944bc6057e6b835', function(err, t3Screening1) {
        screeningModel.showAll('5eb8cdc14944bc6057e6b836', function(err, t4Screening1) {
        movieModel.showAll(t1Screening1.movie, function(err, _1917) {
        cinemaModel.showAll(t1Screening1.cinema, function(err, cinema1) {
        // SCREENING 2
        screeningModel.showAll('5e86fd761c9d440000ec3b1a', function(err, t1Screening2) {
        screeningModel.showAll('5eb8d8fa4944bc6057e6b837', function(err, t2Screening2) {
        screeningModel.showAll('5eb8d9264944bc6057e6b838', function(err, t3Screening2) {
        screeningModel.showAll('5eb8d9514944bc6057e6b839', function(err, t4Screening2) {
        movieModel.showAll(t1Screening2.movie, function(err, parasite) {
        cinemaModel.showAll(t1Screening2.cinema, function(err, cinema2) {
        // SCREENING 3
        screeningModel.showAll('5e86fdc71c9d440000ec3b1b', function(err, t1Screening3) {
        screeningModel.showAll('5eb8dba94944bc6057e6b83a', function(err, t2Screening3) {
        screeningModel.showAll('5eb8dbec4944bc6057e6b83b', function(err, t3Screening3) {
        screeningModel.showAll('5eb8dc1a4944bc6057e6b83c', function(err, t4Screening3) {
        movieModel.showAll(t1Screening3.movie, function(err, sonic) {
        cinemaModel.showAll(t1Screening3.cinema, function(err, cinema3) {
        // SCREENING 4
        screeningModel.showAll('5e86fe201c9d440000ec3b1c', function(err, t1Screening4) {
        screeningModel.showAll('5eb8de494944bc6057e6b83d', function(err, t2Screening4) {
        screeningModel.showAll('5eb8de884944bc6057e6b83e', function(err, t3Screening4) {
        screeningModel.showAll('5eb8deed4944bc6057e6b83f', function(err, t4Screening4) {
        movieModel.showAll(t1Screening4.movie, function(err, bop) {
        cinemaModel.showAll(t1Screening4.cinema, function(err, cinema4) {
        // SCREENING 5
        screeningModel.showAll('5e86fe7e1c9d440000ec3b1d', function(err, t1Screening5) {
        screeningModel.showAll('5eb8e0904944bc6057e6b840', function(err, t2Screening5) {
        screeningModel.showAll('5eb8e0d94944bc6057e6b841', function(err, t3Screening5) {
        screeningModel.showAll('5eb8e1024944bc6057e6b842', function(err, t4Screening5) {
        movieModel.showAll(t1Screening5.movie, function(err, bbsforlife) {
        cinemaModel.showAll(t1Screening5.cinema, function(err, cinema5) {
        // SCREENING 6
        screeningModel.showAll('5e8698471c9d440000ec3b07', function(err, t1Screening6) {
        screeningModel.showAll('5eb8e25d4944bc6057e6b843', function(err, t2Screening6) {
        screeningModel.showAll('5eb8e29f4944bc6057e6b844', function(err, t3Screening6) {
        screeningModel.showAll('5eb8e2de4944bc6057e6b845', function(err, t4Screening6) {
        movieModel.showAll(t1Screening6.movie, function(err, dolittle) {
        cinemaModel.showAll(t1Screening6.cinema, function(err, cinema6) {
        // SCREENING 7
        screeningModel.showAll('5e86ff9e1c9d440000ec3b20', function(err, t1Screening7) {
        screeningModel.showAll('5eb8e44322e58f3caf356d65', function(err, t2Screening7) {
        screeningModel.showAll('5eb8e45c22e58f3caf356d66', function(err, t3Screening7) {
        screeningModel.showAll('5eb8e46a22e58f3caf356d67', function(err, t4Screening7) {
        movieModel.showAll(t1Screening7.movie, function(err, tnc) {
        cinemaModel.showAll(t1Screening7.cinema, function(err, cinema7) {
        // SCREENING 8
        screeningModel.showAll('5eb8e55122e58f3caf356d68', function(err, t1Screening8) {
        screeningModel.showAll('5eb8e600df7d525ab5728f50', function(err, t2Screening8) {
        screeningModel.showAll('5eb8e60fdf7d525ab5728f51', function(err, t3Screening8) {
        screeningModel.showAll('5eb8e61bdf7d525ab5728f52', function(err, t4Screening8) {
        movieModel.showAll(t1Screening8.movie, function(err, tcwild) {
        cinemaModel.showAll(t1Screening8.cinema, function(err, cinema8) {
            
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
          date: t1Screening1.date,
          timeslot: t1Screening1.timeslot,
          t2Timeslot: t2Screening1.timeslot,
          t3Timeslot: t3Screening1.timeslot,
          t4Timeslot: t4Screening1.timeslot,
    
          //SCREENING 2
          img_url2: parasite.img_url,
          name2: parasite.name,
          rating2: parasite.rating,
          cinema2: cinema2.cinemanum,
          price2: parasite.price,
          date2: t2Screening2.date,
          timeslot2: t2Screening2.timeslot,
          t2Timeslot2: t2Screening2.timeslot,
          t3Timeslot2: t3Screening2.timeslot,
          t4Timeslot2: t4Screening2.timeslot,
    
          //SCREENING 3
          img_url3: sonic.img_url,
          name3: sonic.name,
          rating3: sonic.rating,
          cinema3: cinema3.cinemanum,
          price3: sonic.price,
          date3: t1Screening3.date,
          timeslot3: t1Screening3.timeslot,
          t2Timeslot3: t2Screening3.timeslot,
          t3Timeslot3: t3Screening3.timeslot,
          t4Timeslot3: t4Screening3.timeslot,
    
          //SCREENING 4
          img_url4: bop.img_url,
          name4: bop.name,
          rating4: bop.rating,
          cinema4: cinema4.cinemanum,
          price4: bop.price,
          date4: t1Screening4.date,
          timeslot4: t1Screening4.timeslot,
          t2Timeslot4: t2Screening4.timeslot,
          t3Timeslot4: t3Screening4.timeslot,
          t4Timeslot4: t4Screening4.timeslot,
    
          //SCREENING 5
          img_url5: bbsforlife.img_url,
          name5: bbsforlife.name,
          rating5: bbsforlife.rating,
          cinema5: cinema5.cinemanum,
          price5: bbsforlife.price,
          date5: t1Screening5.date,
          timeslot5: t1Screening5.timeslot,
          t2Timeslot5: t2Screening5.timeslot,
          t3Timeslot5: t3Screening5.timeslot,
          t4Timeslot5: t4Screening5.timeslot,
    
          //SCREENING 6
          img_url6: dolittle.img_url,
          name6: dolittle.name,
          rating6: dolittle.rating,
          cinema6: cinema6.cinemanum,
          price6: dolittle.price,
          date6: t1Screening6.date,
          timeslot6: t1Screening6.timeslot,
          t2Timeslot6: t2Screening6.timeslot,
          t3Timeslot6: t3Screening6.timeslot,
          t4Timeslot6: t4Screening6.timeslot,
    
    
          //SCREENING 7
          img_url7: tnc.img_url,
          name7: tnc.name,
          rating7: tnc.rating,
          cinema7: cinema7.cinemanum,
          price7: tnc.price,
          date7: t1Screening7.date,
          timeslot7: t1Screening7.timeslot,
          t2Timeslot7: t2Screening7.timeslot,
          t3Timeslot7: t3Screening7.timeslot,
          t4Timeslot7: t4Screening7.timeslot,
          //SCREENING 8
          img_url8: tcwild.img_url,
          name8: tcwild.name,
          rating8: tcwild.rating,
          cinema8: cinema8.cinemanum,
          price8: tcwild.price,
          date8: t1Screening8.date,
          timeslot8: t1Screening8.timeslot,
          t2Timeslot8: t2Screening8.timeslot,
          t3Timeslot8: t3Screening8.timeslot,
          t4Timeslot8: t4Screening8.timeslot,
        })
    
        }); // screening 1 timeslot 1
        }); // screening 1 timeslot 2
        }); // screening 1 timeslot 3
        }); // screening 1 timeslot 4
        }); // _1917
        }); // cinema 1
    
        }); // screening 2 timeslot 1
        }); // screening 2 timeslot 2
        }); // screening 2 timeslot 3
        }); // screening 2 timeslot 4
        }); // parasite
        }); // cinema 2
    
        }); // screening 3 timeslot 1
        }); // screening 3 timeslot 2
        }); // screening 3 timeslot 3
        }); // screening 3 timeslot 4
        }); // sonic
        }); // cinema 3
    
        }); // screening 4 timeslot 1
        }); // screening 4 timeslot 2
        }); // screening 4 timeslot 3
        }); // screening 4 timeslot 4
        }); // bop
        }); // cinema 4
    
        }); // screening 5 timeslot 1
        }); // screening 5 timeslot 2
        }); // screening 5 timeslot 3
        }); // screening 5 timeslot 4
        }); // bbsforlife
        }); // cinema 5
    
        }); // screening 6 timeslot 1
        }); // screening 6 timeslot 2
        }); // screening 6 timeslot 3
        }); // screening 6 timeslot 4
        }); // dolittle
        }); // cinema 6
    
        }); // screening 7 timeslot 1
        }); // screening 7 timeslot 2
        }); // screening 7 timeslot 3
        }); // screening 7 timeslot 4
        }); // tnc
        }); // cinema 7
    
        }); // screening 8 timeslot 1
        }); // screening 8 timeslot 2
        }); // screening 8 timeslot 3
        }); // screening 8 timeslot 4
        }); // tcwild
        }); // cinema 8
};
