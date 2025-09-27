const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  savedAmount: { type: Number, default: 0 },
  dueDate: { type: Date, required: true },
});

module.exports = mongoose.model('Goal', GoalSchema);
