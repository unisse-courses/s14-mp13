const mongoose = require('mongoose');
const databaseURL = 'mongodb+srv://user:12345@wjscinemas-zjk11.mongodb.net/wjscinemas?retryWrites=true&w=majority';

const options = { useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false };

mongoose.connect(databaseURL, options);

const CinemaSchema = new mongoose.Schema(
  {
    cinemaid: {type: String, required: true},
    cinemanum: {type: String, required: true},
    numseats: {type: Number, required: true}
  }

);

module.exports = mongoose.model('Cinema', CinemaSchema);
