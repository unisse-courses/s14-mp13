const mongoose = require('./connection');

const ReservationSchema = new mongoose.Schema(
  {
    reserved_seats: [{type: String, required: true}],
    screening: {type: mongoose.Schema.Types.ObjectId, ref: 'Screening', required: true},
    cinema: {type: String, required: true},
    movie: {type: String, required: true},
    date_reserved: {type: Date, default: Date.now},
    date_cancelled: {type: Date},
    date_chosen: {type: String, required: true},
    time_chosen: {type: String, required: true},
    status: {type: String, required: true, default: "Reserved"},
    totalprice: {type: Number, required: true},
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


exports.getAll = function(sort, next) {
  reservationModel.find({}).sort(sort).exec(function(err, result) {
    if (err) throw err;
    var reservationObjects = [];

    result.forEach(function(doc) {
      reservationObjects.push(doc.toObject());
    });

    next(reservationObjects);
  });
};

exports.getAllUser = function(sort, user, next) {
  reservationModel.find({user: user}).sort(sort).exec(function(err, result) {
    if (err) throw err;
    var reservationObjects = [];

    result.forEach(function(doc) {
      reservationObjects.push(doc.toObject());
    });

    next(reservationObjects);
  });
};

exports.cancelReservation = function(_id, next) {
  reservationModel.deleteOne({_id: _id}, next);
};