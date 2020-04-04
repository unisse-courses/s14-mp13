const mongoose = require('mongoose');

const databaseURL = 'mongodb+srv://user:12345@wjscinemas-zjk11.mongodb.net/wjscinemas?retryWrites=true&w=majority';

/** README **
  We need to set useFindAndModify to false because mongoose's findOneAndUpdate
  is using a deprecated function: findAndModify.
  This will suppress the warning.
**/
const options = { useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false };

mongoose.connect(databaseURL, options);

const UserSchema = new mongoose.Schema({
    utype: { type: String, required: [true, "No Usertype provided"] },
    uname: { type: String, required: [true, "No Username provided"] },
    fname: { type: String, required: [true, "No First Name provided"] },
    lname: { type: String, required: [true, "No Last Name provided"] },
    mnum: { type: String, required: [true, "No Mobile Number provided"]},
    email: { type: String, required: [true, "No Email Address provided"]},
    pword: { type: String, required: [true, "No Password provided"]},
    reservations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'}]
  }
  /** README **
    Virtuals are other fields that do not persist in mongodb.
    By setting virtuals: true for toObject and toJSON, this makes all the
    Document.toObject() function include any virtuals value available.
    For our case, we don't have any.
  **/
  // }, {
  //   toObject: {
  //     virtuals: true,
  //   },
  //   toJSON: {
  //     virtuals: true,
  //   }
  // }
);

/** README **
  Export the model as the main content of this module.
**/
module.exports = mongoose.model('User', UserSchema);