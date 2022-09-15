import express from "express";

import {
  getAllExpenses,
  getExpensesById,
  createExpenses,
  updateExpenses,
  deleteExpenses,
} from "../controllers/Expenses.js";

import {
  getPeople,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} from "../controllers/Person.js";

const router = express.Router();

router.get("/gastos", getAllExpenses);
router.get("/gastos/:id", getExpensesById);
router.post("/gastos", createExpenses);
router.patch("/gastos/:id", updateExpenses);
router.delete("/gastos/:id", deleteExpenses);

router.get("/pessoas", getPeople);
router.get("/pessoas:/:id", getPerson);
router.post("/pessoas", createPerson);
router.patch("/pessoas/:id", updatePerson);
router.delete("/pessoas/:id", deletePerson);


export default router;
