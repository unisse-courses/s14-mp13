const mongoose = require('./connection');

const SeatsSchema = new mongoose.Schema(
  {
    reservation: {type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', required: true},
    seatNumber: {type: String, required: true},
  }
);


const seatsModel = mongoose.model('Seats', SeatsSchema);

exports.showAll = function(_id, next) {
  seatsModel.findById(_id, next);
};

exports.getAllSeats = function(sort, reservation, next) {
  seatsModel.find({reservation: reservation}).sort(sort).exec(function(err, result) {
    if (err) throw err;
    var seatsObjects = [];

    result.forEach(function(doc) {
      seatsObjects.push(doc.toObject());
    });

    next(seatsObjects);
  });
};

