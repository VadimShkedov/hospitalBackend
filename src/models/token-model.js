const { Schema, model } = require('mongoose');

const tokenSchema = new Schema({
  token: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    unique: true
  }
});

module.exports = Token = model("Tokens", tokenSchema);