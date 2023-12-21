const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Token = model("User", userSchema);