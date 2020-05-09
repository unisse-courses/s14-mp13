const mongoose = require('./connection');

const ScreeningSchema = new mongoose.Schema(
  {
    screeningid: {type: String, required: true},
    movie: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true},
    cinema: {type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true},
    timeslots: [{type: String, required: true}],
    dates: [{type: String, required: true}]
  }

);


const screeningModel = mongoose.model('Screening', ScreeningSchema);

exports.showAll = function(_id, next) {
  screeningModel.findById(_id, next);
};


