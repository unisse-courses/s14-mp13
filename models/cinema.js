const mongoose = require('./connection');

const CinemaSchema = new mongoose.Schema(
  {
    cinemanum: {type: String, required: true}
  }

);


const cinemaModel = mongoose.model('Cinema', CinemaSchema);

exports.showAll = function(_id, next) {
  cinemaModel.findById(_id, next);
};
