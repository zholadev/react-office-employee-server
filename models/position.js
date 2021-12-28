const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
  position: {
    type: String
  },
  employee: {
    type: String
  },
  salary: {
    type: Number
  },
  category: {
    type: Number
  },
  discharge: {
    type: Number
  }
}, { timestamps: true })

module.exports = mongoose.model('Position', PositionSchema);