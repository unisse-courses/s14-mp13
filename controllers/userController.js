const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const { validationResult } = require('express-validator');

// exports.register = function(req, res) {
//     var user = {
//     utype: req.body.utype,
//     uname: req.body.uname,
//     fname: req.body.fname,
//     lname: req.body.lname,
//     mnum: req.body.mnum,
//     email: req.body.email,
//     pword: req.body.pword
    
//     };
    
//     userModel.register(user, function(err, user) {
//         var result;

//         if (err) {
//         console.log(err.errors);

//         result = { success: false, message: "User was not created!" }
//         res.send(result);
//         } else {
//         console.log("Successfully added user!");
//         console.log(user);

//         result = { success: true, message: "User created!" }

//         res.send(result);
//         }
//     });
//   };

  exports.register = (req, res) => {
    // 1. Validate request
  
    // 2. If VALID, find if email exists in users
    //      NEW USER (no results retrieved)
    //        a. Hash password
    //        b. Create user
    //        c. Redirect to login page
    //      EXISTING USER (match retrieved)
    //        a. Redirect user to login page with error message.
  
    // 3. If INVALID, redirect to register page with errors
    const errors = validationResult(req);

    const { utype, uname, fname, lname, mnum, email, pword } = req.body;
      
      if (errors.isEmpty()) {      
      userModel.getOne({ uname: uname }, (err, result) => {
        if (result) {
          console.log("Username already taken!");
          // found a match, return to login with error
        req.flash('error_msg', 'Username already taken.');
        //   req.session.save( function(){ res.redirect('/'); })
        res.redirect('/');

        } else {
          const saltRounds = 10;
  
          // Hash password
          bcrypt.hash(pword, saltRounds, (err, hashed) => {
            const newUser = {
              utype,
              uname,
              fname,
              lname,
              mnum,
              email,
              pword: hashed
            };
          
            userModel.register(newUser, (err, user) => {
              if (err) {
                req.flash('error_msg', 'Could not create user. Please try again.');
                console.log(err.errors);
                result = { success: false, message: "User was not created!" }
                //res.send(result); this causes an error LOL :<
                res.redirect('/');
     
              } else {
                console.log("Successfully added user!");
                console.log(user);
                result = { success: true, message: "User created!" }
                //res.send(result); this causes an error LOL :<

                req.flash('success_msg', 'You are now registered.');
                res.redirect('/');
              }
            });
          });
        }
      });
    } 
    else {
      const messages = errors.array().map((item) => item.msg);
  
      req.flash('error_msg', messages.join(' '));
      res.redirect('/contactus'); // making this redirect to / makes req.flash not appear
    }
  };

  exports.login = (req, res) => {
    // 1. Validate request
  
    // 2. If VALID, find if email exists in users
    //      EXISTING USER (match retrieved)
    //        a. Check if password matches hashed password in database
    //        b. If MATCH, save info to session and redirect to home
    //        c. If NOT equal, redirect to login page with error
    //      UNREGISTERED USER (no results retrieved)
    //        a. Redirect to login page with error message
  
    // 3. If INVALID, redirect to login page with errors
    const errors = validationResult(req);
  
    if (errors.isEmpty()) {
      const {
        uname_login,
        pword_login
      } = req.body;
  
      userModel.getOne({ uname: uname_login }, (err, user) => {
        if (err) {
          // Database error occurred...
          req.flash('error_msg', 'Something happened! Please try again.');
          res.redirect('/');
        } else {
          // Successful query
          if (user) {
            // User found!
      
            // Check password with hashed value in the database
            bcrypt.compare(pword_login, user.pword, (err, result) => {
              // passwords match (result == true)
              if (result) {
                // Update session object once matched!
                req.session.user = user._id;
                req.session.utype = user.utype;
                req.session.uname = user.uname;
                req.session.fname = user.fname; 
                req.session.lname = user.lname;
                req.session.mnum = user.mnum;
                req.session.email = user.email;
  
                console.log(req.session);
  
                res.redirect('/home');
              } else {
                // passwords don't match
                req.flash('error_msg', 'Incorrect password.');
                res.redirect('/');
              }
            });
          } else {
            // No user found
            req.flash('error_msg', 'Username is not registered.');
            res.redirect('/');
          }
        }
      });
    } else {
      const messages = errors.array().map((item) => item.msg);
  
      req.flash('error_msg', messages.join(' '));
      res.redirect('/');
    }
    };
  
    exports.logout = (req, res) => {
      if (req.session) {
        req.session.destroy(() => {
          res.clearCookie('connect.sid');
          res.redirect('/');
        });
      }
    };
