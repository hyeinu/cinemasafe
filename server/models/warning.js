const mongoose = require('mongoose');
const { Schema } = mongoose;

const warningSchema = new mongoose.Schema({
  name: { type: String, required: true },
  timestamps: { type: Array, default: [] },
})

const Warning = mongoose.model('Warning', warningSchema);

module.exports = Warning;
