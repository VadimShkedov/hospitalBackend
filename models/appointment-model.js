const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  userFio: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  complaint: {
    type: String,
    required: true
  }
});

module.exports = Appointment = model("Appointments", appointmentSchema);