const mongoose = require('./connection');

const CinemaSchema = new mongoose.Schema(
  {
    cinemaid: {type: String, required: true},
    cinemanum: {type: String, required: true},
    numseats: {type: Number, required: true}
  }

);


const cinemaModel = mongoose.model('Cinema', CinemaSchema);

exports.showAll = function(_id, next) {
  cinemaModel.findById(_id, next);
};
