// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

// Creates the express application
const app = express();
const port = 9090;

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

// Home route
app.get('/', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('home', {
      title: 'W&Js Cinemas',
      img: 'img/penny.jpg'
    })
});

// Profile route
app.get('/schedules', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('schedules', {
      title: 'Schedules',
    })
  });

// Academics route
app.get('/academics', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('academics', {
      title: 'Courses Taken',
      // Frosh
      froshT1: [
        {
            ccode: 'BASMATH',
            faculty: 'Ms. April Say-Awen'
        },

        {
            ccode: 'CCICOMP',
            faculty: 'Mr. Fritz Flores'
        },

        {
            ccode: 'CCPROG1',
            faculty: 'Mr. Florante Salvador'
        },

        {
            ccode: 'ISFOUND',
            faculty: 'Mr. Oliver Malabanan'
        },

        {
            ccode: 'GEPCOMM',
            faculty: 'N/A'
        },

        {
            ccode: 'NSTP101',
            faculty: 'N/A'
        },

        {
            ccode: 'SAS1000',
            faculty: 'N/A'
        },
        ],

        froshT2: [
            {
                ccode: 'CCPROG2',
                faculty: 'Ms. Tessie Limoanco'
            },
    
            {
                ccode: 'CCDSTRU',
                faculty: 'Ms. Pauline Rivera'
            },
    
            {
                ccode: 'ITISORG',
                faculty: 'Mr. Renato Molano'
            },
    
            {
                ccode: 'GEUSELF',
                faculty: 'N/A'
            },
    
            {
                ccode: 'GEMATMW',
                faculty: 'N/A'
            },
    
            {
                ccode: 'LCLSONE',
                faculty: 'Ms. Ivory Sison'
            },
    
            {
                ccode: 'LASARE1',
                faculty: 'N/A'
            }
        ],

        froshT3: [
            {
                ccode: 'BASSTAT',
                faculty: 'N/A'
            },
    
            {
                ccode: 'CCPROG3',
                faculty: 'Ms. Unisse Chua'
            },
    
            {
                ccode: 'ISBISPR',
                faculty: 'Ms. Jane Arcilla'
            },
    
            {
                ccode: 'GEFILI1',
                faculty: 'N/A'
            },
    
            {
                ccode: 'LCFAITH',
                faculty: 'N/A'
            },
    
            {
                ccode: 'GEFTWEL',
                faculty: 'N/A'
            },
    
            {
                ccode: 'NSTP-01',
                faculty: 'N/A'
            }
        ],

        // Sophomore
        sophomoreT1: [
            {
                ccode: 'CCINFOM',
                faculty: 'Mr. Oliver Malabanan'
            },
    
            {
                ccode: 'CCDSALG',
                faculty: 'Ms. Tessie Limoanco'
            },
    
            {
                ccode: 'ISFINMA',
                faculty: 'Ms. Jane Arcilla'
            },
    
            {
                ccode: 'ISOPRES',
                faculty: 'Mr. Renato Molano'
            },
    
            {
                ccode: 'GEFILI2',
                faculty: 'N/A'
            },
    
            {
                ccode: 'GEPETWO',
                faculty: 'N/A'
            },
    
            {
                ccode: 'NSTP-02',
                faculty: 'N/A'
            },
            ],
    
            sophomoreT2: [
                {
                    ccode: 'CCAPDEV',
                    faculty: 'Ms. Unisse Chua'
                },
        
                {
                    ccode: 'ISINFOM',
                    faculty: 'Mr. Oliver Malabanan'
                },
        
                {
                    ccode: 'ITISHCI',
                    faculty: 'Ms. Jane Arcilla'
                },
        
                {
                    ccode: 'ISBUSPE',
                    faculty: 'Mr. Glenn Sipin'
                },
        
                {
                    ccode: 'GERPHIS',
                    faculty: 'Mr. Arleigh Dela Cruz'
                },
        
                {
                    ccode: 'GESPORT',
                    faculty: 'Ms. Carol Rodriguez'
                },
        
                {
                    ccode: 'LCLSTWO',
                    faculty: 'Mr. Adrian Yrigan'
                },
                {
                    ccode: 'LASARE2',
                    faculty: 'N/A'
                }
            ]
    })
  });

// Activities route
app.get('/activities', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('activities', {
      title: 'Extra Curricular Activities',
      org: [
        {
            orgname: 'La Salle Computer Society',
            position: 'AVP Corporate Relations'
        },

        {
            orgname: 'Hult Prize at De La Salle University',
            position: 'Strategic Partnerships Head'
        },

        {
            orgname: 'CCS Week 2019',
            position: 'Corporate Relations Committee Head'
        }
      ]
    })
  });

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
  