const ExpenseService = require("../services/ExpenseService");

const addExpense = async (req, res) => {
  try {
    const expense = await ExpenseService.addExpense(req.user.id, req.body);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseService.listExpenses(req.user.id);
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addExpense,
  getExpenses,
};
