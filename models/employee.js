const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  tel: {
    type: Number
  },
  IIN: {
    type: Number
  },
  birth: {
    type: String
  },
  gender: {
    type: String,
    enum: ['Еркек', 'Әйел']
  },
  familyStatus: {
    type: String,
    enum: [
      'Бойдақ. Балалар жоқ',
      'Үйленген. Бала, 15 жаста',
      'Үйленген. 12 және 16 жастағы балалар.',
      'Тұрмыс құрмаған. Балалар жоқ.',
      'Үйленген. Бала, 4 жаста.'
    ]
  },
  workExperience: {
    type: Number
  },
  educationLevel: {
    type: String,
    enum: [
      'орта кәсіптік білім',
      'жоғары білім - бакалавр дәрежесі',
      'жоғары білім - мамандық, магистратура'
    ]

  },
  address: {
    type: String
  }

}, { timestamps: true })

module.exports = mongoose.model('Employee', EmployeeSchema);