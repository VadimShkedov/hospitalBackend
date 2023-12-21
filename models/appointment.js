const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
  fio: {
    type: String,
    required: true
  },
  doctorList: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = Token = model("Appointment", appointmentSchema);