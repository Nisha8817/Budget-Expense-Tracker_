const Budget = require('../models/Budget');

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addBudget = async (req, res) => {
  try {
    const budget = new Budget(req.body);
    await budget.save();
    res.json(budget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(budget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBudget = async (req, res) => {
  try {
    await Budget.findByIdAndDelete(req.params.id);
    res.json({ message: 'Budget deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
