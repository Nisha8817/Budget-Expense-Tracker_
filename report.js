const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');

exports.getAIReport = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const budgets = await Budget.find();

    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const budgetUsage = budgets.map(b => {
      const spent = transactions
        .filter(t => t.type === 'expense' && t.category === b.category)
        .reduce((sum, t) => sum + t.amount, 0);

      const percentage = b.amount > 0 ? Math.min((spent / b.amount) * 100, 100) : 0;
      return { category: b.category, budgeted: b.amount, spent, usage: percentage };
    });

    const savings = totalIncome - totalExpense;

    const insights = [];

    if (savings < 0) insights.push('You are spending more than you earn!');
    if (budgetUsage.some(b => b.usage > 90)) insights.push('Some budgets are almost full!');

    res.json({
      totalIncome,
      totalExpense,
      savings,
      budgetUsage,
      insights
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
