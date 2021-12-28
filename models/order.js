const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const OrderSchema = new mongoose.Schema({
  order: {
    type: String,
    enum: [
      'жұмысқа орналасуы',
      'жұмыстан шығуы',
      'демалысқа шығуы'
    ]
  },
  employee: {
    type: String
  },
  countNumber: {
    type: Number,
    default: Math.floor(Math.random() * 10000).toFixed()
  },
  date: {
    type: Date,
    default: Date.now()
  }
}, { timestamps: true })

module.exports = mongoose.model('Order', OrderSchema);