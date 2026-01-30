const ExpenseRepository = require("../repositories/ExpenseRepository");

const addExpense = async (userId, data) => {
  return ExpenseRepository.createExpense({
    userId,
    amount: data.amount,
    category: data.category,
    note: data.note,
  });
};

const listExpenses = async (userId) => {
  return ExpenseRepository.getExpensesByUser(userId);
};

module.exports = {
  addExpense,
  listExpenses,
};
