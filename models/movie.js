const mongoose = require('./connection');

const MovieSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    shortdesc: {type: String, required: true},
    price: {type: Number, required: true, default: 300},
    directors: {type: String, required: true},
    cast: {type: String, required: true},
    trailer_url: {type: String, required: true},
    img_url: {type: String, required: true},
   // date_start: {type: Date, default: Date.now},
   // date_end: {type: Date},
    status: {type: String, required: true},
    synopsis: {type: String, required: true},
    rating: {type: String, required: true}
  }

);

const movieModel = mongoose.model('Movie', MovieSchema);

exports.showAll = function(_id, next) {
  movieModel.findById(_id, next);
};

exports.update = function(_id, query, next) {
  movieModel.findByIdAndUpdate(_id, query, next);
}
