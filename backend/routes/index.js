import express from "express";

import {
  getAllExpenses,
  getExpensesById,
  createExpenses,
  updateExpenses,
  deleteExpenses,
} from "../controllers/Expenses.js";

const router = express.Router();

router.get("/gastos", getAllExpenses);
router.get("/gastos/:id", getExpensesById);
router.post("/gastos", createExpenses);
router.patch("/gastos/:id", updateExpenses);
router.delete("/gastos/:id", deleteExpenses);

export default router;
