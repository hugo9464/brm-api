const mongoose = require('mongoose');

const weighingSchema = mongoose.Schema({
  weight: { type: Number, required: true },
  type: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: Date, required: true}
});

module.exports = mongoose.model('Weighing', weighingSchema);