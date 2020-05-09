const mongoose = require('./connection');

const UserSchema = new mongoose.Schema({
    utype: { type: String, required: [true, "No Usertype provided"] },
    uname: { type: String, required: [true, "No Username provided"] },
    fname: { type: String, required: [true, "No First Name provided"] },
    lname: { type: String, required: [true, "No Last Name provided"] },
    mnum: { type: String, required: [true, "No Mobile Number provided"]},
    email: { type: String, required: [true, "No Email Address provided"]},
    pword: { type: String, required: [true, "No Password provided"]}
    //reservations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'}]
  }
);

const userModel = mongoose.model('users', UserSchema);


// Saving a user given the validated object
exports.register = function(obj, next) {
  const user = new userModel(obj);
  
  user.save(function(err, user) {
    next(err, user);
  });
}

// Retrieving a user based on ID
exports.getById = function(id, next) {
  userModel.findById(id, function(err, user) {
    next(err, user);
  });
};

// Retrieving just ONE user based on a query (first one)
exports.getOne = function(query, next) {
  userModel.findOne(query, function(err, user) {
    next(err, user);
  });
};