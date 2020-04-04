const mongoose = require('mongoose');
const databaseURL = 'mongodb+srv://user:12345@wjscinemas-zjk11.mongodb.net/wjscinemas?retryWrites=true&w=majority';

const options = { useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false };

mongoose.connect(databaseURL, options);

const MovieSchema = new mongoose.Schema(
  {
    movieid: {type: String, required: true},
    name: {type: String, required: true},
    shortdesc: {type: String, required: true},
    price: {type: Number, required: true},
    directors: {type: String, required: true},
    cast: {type: String, required: true},
    trailer_url: {type: String, required: true},
    img_url: {type: String, required: true},
    date_start: {type: Date, default: Date.now},
    date_end: {type: Date},
    status: {type: String, required: true},
    synopsis: {type: String, required: true},
    rating: {type: String, required: true}
  }

);

module.exports = mongoose.model('Movie', MovieSchema);
