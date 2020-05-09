const mongoose = require('./connection');

const ReservationSchema = new mongoose.Schema(
  {
    reserved_seats: [{type: String, required: true}],
    screening: {type: mongoose.Schema.Types.ObjectId, ref: 'Screening', required: true},
    date_reserved: {type: Date, default: Date.now},
    date_cancelled: {type: Date},
    date_chosen: {type: String, required: true},
    time_chosen: {type: String, required: true},
    status: {type: String, required: true, default: "Reserved"},
    totalprice: {type: Number, required: true, default: 300},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
  }

);

const reservationModel = mongoose.model('Reservation', ReservationSchema);

exports.showAll = function(_id, next) {
  reservationModel.findById(_id, next);
};

// Saving a reservation given the validated object
exports.reserve = function(obj, next) {
  const reservation = new reservationModel(obj);
  
  reservation.save(function(err, reservation) {
    next(err, reservation);
  });
};

exports.showTickets = function(next) {
  reservationModel.findOne(next).sort({$natural: -1}).limit(1);
};