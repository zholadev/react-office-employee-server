const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  employee: {
    type: String
  },
  countNumber: {
    type: Number
  },
  workIn: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now()
  },
  outWork: {
    type: Number
  },
  output: {
    type: Number
  },
  holiday: {
    type: Number
  },
  sick: {
    type: Number
  }
}, { timestamps: true })

module.exports = mongoose.model('Report', ReportSchema);