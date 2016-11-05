const mongoose = require('mongoose')
const { Schema } = mongoose;


const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rated: { type: String, required: true },
  released: { type: String },
  plot: { type: String },
  warnings: [{ type: Schema.Types.ObjectId, ref: 'Warning' }]
})


const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;
