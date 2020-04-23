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
    totalprice: {type: Number, required: true, default: 300}
  }

);

module.exports = mongoose.model('Reservation', ReservationSchema);
