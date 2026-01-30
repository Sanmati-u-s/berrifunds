const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const ExpenseController = require("../controllers/ExpenseController");

const router = express.Router();

router.post("/", authMiddleware, ExpenseController.addExpense);
router.get("/", authMiddleware, ExpenseController.getExpenses);

module.exports = router;
