const Expense = require("../models/Expense");

const createExpense = (expenseData) => {
  return Expense.create(expenseData);
};

const getExpensesByUser = (userId) => {
  return Expense.find({ userId }).sort({ date: -1 });
};

module.exports = {
  createExpense,
  getExpensesByUser,
};
