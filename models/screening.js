const mongoose = require('mongoose');
const databaseURL = 'mongodb+srv://user:12345@wjscinemas-zjk11.mongodb.net/wjscinemas?retryWrites=true&w=majority';

const options = { useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false };

mongoose.connect(databaseURL, options);

const ScreeningSchema = new mongoose.Schema(
  {
    screeningid: {type: String, required: true},
    movie: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true},
    cinema: {type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true},
    timeslots: [{type: String, required: true}],
    timeslotsCAT1: {type: String, required: true},
    timeslotsCAT2: {type: String},
    date: {type: String, required: true}
  }

);

module.exports = mongoose.model('Screening', ScreeningSchema);
