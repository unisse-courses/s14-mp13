const movieModel = require('../models/movie');

exports.showAllMovies = function(req, res) {
        // NOW SHOWING ROW 1
        movieModel.showAll('5e85aa5d1c9d440000d85c62', function(err, _1917) {
        movieModel.showAll('5e85acac1c9d440000d85c63', function(err, parasite) {
        movieModel.showAll('5e8690bc1c9d440000ec3b03', function(err, sonic) {
        movieModel.showAll('5e8693081c9d440000ec3b04', function(err, bop) {
        // NOW SHOWING ROW 2
        movieModel.showAll('5e8695691c9d440000ec3b06', function(err, bbsforlife) {
        movieModel.showAll('5e8698471c9d440000ec3b07', function(err, dolittle) {
        movieModel.showAll('5e86a43b1c9d440000ec3b08', function(err, tnc) {
        movieModel.showAll('5e86a5f01c9d440000ec3b09', function(err, tcwild) {
        // COMING SOON ROW 1
        movieModel.showAll('5e86a7a31c9d440000ec3b0a', function(err, aqp2) {
        movieModel.showAll('5e86a99a1c9d440000ec3b0b', function(err, mulan) {
        movieModel.showAll('5e86ab4a1c9d440000ec3b0c', function(err, gunsatkimbo) {
        movieModel.showAll('5e86ad0a1c9d440000ec3b0d', function(err, bloodshot) {
        // COMING SOON ROW 2
        movieModel.showAll('5e86ae8c1c9d440000ec3b0e', function(err, onward) {
        movieModel.showAll('5e86b0e61c9d440000ec3b0f', function(err, pofsaint) {
        
        res.render('home', {
  
          title: 'W&Js Cinemas',
         
          // NOW SHOWING ROW 1
          name: _1917.name,
          shortdesc: _1917.shortdesc,
          price: _1917.price,
          directors: _1917.directors,
          cast: _1917.cast, 
          trailer_url: _1917.trailer_url, 
          img_url: _1917.img_url, 
          synopsis: _1917.synopsis,
        
  
          name2: parasite.name,
          shortdesc2: parasite.shortdesc,
          price2: parasite.price,
          directors2: parasite.directors,
          cast2: parasite.cast, 
          trailer_url2: parasite.trailer_url, 
          img_url2: parasite.img_url, 
          synopsis2: parasite.synopsis,
  
          name3: sonic.name,
          shortdesc3: sonic.shortdesc,
          price3: sonic.price,
          directors3: sonic.directors,
          cast3: sonic.cast, 
          trailer_url3: sonic.trailer_url, 
          img_url3: sonic.img_url, 
          synopsis3: sonic.synopsis,
  
          name4: bop.name,
          shortdesc4: bop.shortdesc,
          price4: bop.price,
          directors4: bop.directors,
          cast4: bop.cast, 
          trailer_url4: bop.trailer_url, 
          img_url4: bop.img_url, 
          synopsis4: bop.synopsis,
  
          //NOW SHOWING ROW 2
          name5: bbsforlife.name,
          shortdesc5: bbsforlife.shortdesc,
          price5: bbsforlife.price,
          directors5: bbsforlife.directors,
          cast5: bbsforlife.cast, 
          trailer_url5: bbsforlife.trailer_url, 
          img_url5: bbsforlife.img_url, 
          synopsis5: bbsforlife.synopsis,
  
          name6: dolittle.name,
          shortdesc6: dolittle.shortdesc,
          price6: dolittle.price,
          directors6: dolittle.directors,
          cast6: dolittle.cast, 
          trailer_url6: dolittle.trailer_url, 
          img_url6: dolittle.img_url, 
          synopsis6: dolittle.synopsis,
  
          name7: tnc.name,
          shortdesc7: tnc.shortdesc,
          price7: tnc.price,
          directors7: tnc.directors,
          cast7: tnc.cast, 
          trailer_url7: tnc.trailer_url, 
          img_url7: tnc.img_url, 
          synopsis7: tnc.synopsis,
  
          name8: tcwild.name,
          shortdesc8: tcwild.shortdesc,
          price8: tcwild.price,
          directors8: tcwild.directors,
          cast8: tcwild.cast, 
          trailer_url8: tcwild.trailer_url, 
          img_url8: tcwild.img_url, 
          synopsis8: tcwild.synopsis,
  
          //COMING SOON ROW 1
          name9: aqp2.name,
          shortdesc9: aqp2.shortdesc,
          price9: aqp2.price,
          directors9: aqp2.directors,
          cast9: aqp2.cast, 
          trailer_url9: aqp2.trailer_url, 
          img_url9: aqp2.img_url, 
          synopsis9: aqp2.synopsis,
  
          name10: mulan.name,
          shortdesc10: mulan.shortdesc,
          price10: mulan.price,
          directors10: mulan.directors,
          cast10: mulan.cast, 
          trailer_url10: mulan.trailer_url, 
          img_url10: mulan.img_url, 
          synopsis10: mulan.synopsis,
  
          name11: gunsatkimbo.name,
          shortdesc11: gunsatkimbo.shortdesc,
          price11: gunsatkimbo.price,
          directors11: gunsatkimbo.directors,
          cast11: gunsatkimbo.cast, 
          trailer_url11: gunsatkimbo.trailer_url, 
          img_url11: gunsatkimbo.img_url, 
          synopsis11: gunsatkimbo.synopsis,
  
          name12: bloodshot.name,
          shortdesc12: bloodshot.shortdesc,
          price12: bloodshot.price,
          directors12: bloodshot.directors,
          cast12: bloodshot.cast, 
          trailer_url12: bloodshot.trailer_url, 
          img_url12: bloodshot.img_url, 
          synopsis12: bloodshot.synopsis,
  
          // COMING SOON ROW 2
          name13: onward.name,
          shortdesc13: onward.shortdesc,
          price13: onward.price,
          directors13: onward.directors,
          cast13: onward.cast, 
          trailer_url13: onward.trailer_url, 
          img_url13: onward.img_url, 
          synopsis13: onward.synopsis,
  
          name14: pofsaint.name,
          shortdesc14: pofsaint.shortdesc,
          price14: pofsaint.price,
          directors14: pofsaint.directors,
          cast14: pofsaint.cast, 
          trailer_url14: pofsaint.trailer_url, 
          img_url14: pofsaint.img_url, 
          synopsis14: pofsaint.synopsis
        });
  
        }); // _1917
        }); // parasite
        }); // sonic
        }); // bop
        }); // bbsforlife
        }); // dolittle
        }); // tnc
        }); // tcwild
        }); // aqp2
        }); // mulan
        }); // gunsatkimbo
        }); // bloodshot
        }); // onward
        }); // pofsaint
};

exports.showAllMoviesUser = function(req, res) {
  // NOW SHOWING ROW 1
  movieModel.showAll('5e85aa5d1c9d440000d85c62', function(err, _1917) {
  movieModel.showAll('5e85acac1c9d440000d85c63', function(err, parasite) {
  movieModel.showAll('5e8690bc1c9d440000ec3b03', function(err, sonic) {
  movieModel.showAll('5e8693081c9d440000ec3b04', function(err, bop) {
  // NOW SHOWING ROW 2
  movieModel.showAll('5e8695691c9d440000ec3b06', function(err, bbsforlife) {
  movieModel.showAll('5e8698471c9d440000ec3b07', function(err, dolittle) {
  movieModel.showAll('5e86a43b1c9d440000ec3b08', function(err, tnc) {
  movieModel.showAll('5e86a5f01c9d440000ec3b09', function(err, tcwild) {
  // COMING SOON ROW 1
  movieModel.showAll('5e86a7a31c9d440000ec3b0a', function(err, aqp2) {
  movieModel.showAll('5e86a99a1c9d440000ec3b0b', function(err, mulan) {
  movieModel.showAll('5e86ab4a1c9d440000ec3b0c', function(err, gunsatkimbo) {
  movieModel.showAll('5e86ad0a1c9d440000ec3b0d', function(err, bloodshot) {
  // COMING SOON ROW 2
  movieModel.showAll('5e86ae8c1c9d440000ec3b0e', function(err, onward) {
  movieModel.showAll('5e86b0e61c9d440000ec3b0f', function(err, pofsaint) {
  
  res.render('regular-home', {
    layout: 'main-regular',
    title: 'W&Js Cinemas',
   
    // NOW SHOWING ROW 1
    name: _1917.name,
    shortdesc: _1917.shortdesc,
    price: _1917.price,
    directors: _1917.directors,
    cast: _1917.cast, 
    trailer_url: _1917.trailer_url, 
    img_url: _1917.img_url, 
    synopsis: _1917.synopsis,
  

    name2: parasite.name,
    shortdesc2: parasite.shortdesc,
    price2: parasite.price,
    directors2: parasite.directors,
    cast2: parasite.cast, 
    trailer_url2: parasite.trailer_url, 
    img_url2: parasite.img_url, 
    synopsis2: parasite.synopsis,

    name3: sonic.name,
    shortdesc3: sonic.shortdesc,
    price3: sonic.price,
    directors3: sonic.directors,
    cast3: sonic.cast, 
    trailer_url3: sonic.trailer_url, 
    img_url3: sonic.img_url, 
    synopsis3: sonic.synopsis,

    name4: bop.name,
    shortdesc4: bop.shortdesc,
    price4: bop.price,
    directors4: bop.directors,
    cast4: bop.cast, 
    trailer_url4: bop.trailer_url, 
    img_url4: bop.img_url, 
    synopsis4: bop.synopsis,

    //NOW SHOWING ROW 2
    name5: bbsforlife.name,
    shortdesc5: bbsforlife.shortdesc,
    price5: bbsforlife.price,
    directors5: bbsforlife.directors,
    cast5: bbsforlife.cast, 
    trailer_url5: bbsforlife.trailer_url, 
    img_url5: bbsforlife.img_url, 
    synopsis5: bbsforlife.synopsis,

    name6: dolittle.name,
    shortdesc6: dolittle.shortdesc,
    price6: dolittle.price,
    directors6: dolittle.directors,
    cast6: dolittle.cast, 
    trailer_url6: dolittle.trailer_url, 
    img_url6: dolittle.img_url, 
    synopsis6: dolittle.synopsis,

    name7: tnc.name,
    shortdesc7: tnc.shortdesc,
    price7: tnc.price,
    directors7: tnc.directors,
    cast7: tnc.cast, 
    trailer_url7: tnc.trailer_url, 
    img_url7: tnc.img_url, 
    synopsis7: tnc.synopsis,

    name8: tcwild.name,
    shortdesc8: tcwild.shortdesc,
    price8: tcwild.price,
    directors8: tcwild.directors,
    cast8: tcwild.cast, 
    trailer_url8: tcwild.trailer_url, 
    img_url8: tcwild.img_url, 
    synopsis8: tcwild.synopsis,

    //COMING SOON ROW 1
    name9: aqp2.name,
    shortdesc9: aqp2.shortdesc,
    price9: aqp2.price,
    directors9: aqp2.directors,
    cast9: aqp2.cast, 
    trailer_url9: aqp2.trailer_url, 
    img_url9: aqp2.img_url, 
    synopsis9: aqp2.synopsis,

    name10: mulan.name,
    shortdesc10: mulan.shortdesc,
    price10: mulan.price,
    directors10: mulan.directors,
    cast10: mulan.cast, 
    trailer_url10: mulan.trailer_url, 
    img_url10: mulan.img_url, 
    synopsis10: mulan.synopsis,

    name11: gunsatkimbo.name,
    shortdesc11: gunsatkimbo.shortdesc,
    price11: gunsatkimbo.price,
    directors11: gunsatkimbo.directors,
    cast11: gunsatkimbo.cast, 
    trailer_url11: gunsatkimbo.trailer_url, 
    img_url11: gunsatkimbo.img_url, 
    synopsis11: gunsatkimbo.synopsis,

    name12: bloodshot.name,
    shortdesc12: bloodshot.shortdesc,
    price12: bloodshot.price,
    directors12: bloodshot.directors,
    cast12: bloodshot.cast, 
    trailer_url12: bloodshot.trailer_url, 
    img_url12: bloodshot.img_url, 
    synopsis12: bloodshot.synopsis,

    // COMING SOON ROW 2
    name13: onward.name,
    shortdesc13: onward.shortdesc,
    price13: onward.price,
    directors13: onward.directors,
    cast13: onward.cast, 
    trailer_url13: onward.trailer_url, 
    img_url13: onward.img_url, 
    synopsis13: onward.synopsis,

    name14: pofsaint.name,
    shortdesc14: pofsaint.shortdesc,
    price14: pofsaint.price,
    directors14: pofsaint.directors,
    cast14: pofsaint.cast, 
    trailer_url14: pofsaint.trailer_url, 
    img_url14: pofsaint.img_url, 
    synopsis14: pofsaint.synopsis
  });

  }); // _1917
  }); // parasite
  }); // sonic
  }); // bop
  }); // bbsforlife
  }); // dolittle
  }); // tnc
  }); // tcwild
  }); // aqp2
  }); // mulan
  }); // gunsatkimbo
  }); // bloodshot
  }); // onward
  }); // pofsaint
};

