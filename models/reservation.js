const mongoose = require('mongoose');
const databaseURL = 'mongodb+srv://user:12345@wjscinemas-zjk11.mongodb.net/wjscinemas?retryWrites=true&w=majority';

const options = { useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false };

mongoose.connect(databaseURL, options);

const ReservationSchema = new mongoose.Schema(
  {
    reserved_seats: [{type: String, required: true}],
    screening: {type: mongoose.Schema.Types.ObjectId, ref: 'Screening', required: true},
    date_reserved: {type: Date, default: Date.now},
    date_cancelled: {type: Date},
    status: {type: String, required: true, default: "Reserved"}
  }

);

module.exports = mongoose.model('Reservation', ReservationSchema);
