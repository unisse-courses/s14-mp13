const { body } = require('express-validator');

const registerValidation = [
  // utype should not be empty
  body('utype').not().isEmpty().withMessage("Usertype is required."),

   // uname should not be empty
   body('uname').not().isEmpty().withMessage("Username is required."),

   // fname should not be empty
   body('fname').not().isEmpty().withMessage("First name is required."),

   // lname should not be empty
   body('lname').not().isEmpty().withMessage("Last name is required."),
   
   // mnum should not be empty
   body('mnum').not().isEmpty().withMessage("Mobile Number is required."),

  // Email should not be empty and must be a valid email
  body('email').not().isEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Please provide a valid email."),

  // Password should not be empty
  body('pword').not().isEmpty().withMessage("Password is required"),

  // Confirm Password needs to be min 6 chars AND must match the req.body.password field
  body('cpword').not().isEmpty().withMessage("Password is required.")
    .custom((value, { req }) => {
      if (value !== req.body.pword) {
        throw new Error("Passwords must match.");
      }
      return true;
    })
];

const loginValidation = [
   // uname should not be empty
   body('uname_login').not().isEmpty().withMessage("Username is required."),
    // Password should not be empty
    body('pword_login').not().isEmpty().withMessage("Password is required")
  ];
  
// update exports
module.exports = { registerValidation, loginValidation };