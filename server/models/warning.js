const mongoose = require('mongoose');
const { Schema } = mongoose;

const warningSchema = new mongoose.Schema({
  name: { type: String, required: true },
  timestamps: { type: Array, default: [] },
  counter: { type: Number, default: 1 }
})

const Warning = mongoose.model('Warning', warningSchema);

module.exports = Warning;
