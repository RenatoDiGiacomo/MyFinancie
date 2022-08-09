import express from "express";

import {
  createGastos,
  deleteGastos,
  getAllGastos,
  getGastosById,
  updateGastos,
} from "../controllers/Gastos.js";

const router = express.Router();

router.get("/gastos", getAllGastos);
router.get("/gastos/:id", getGastosById);
router.post("/gastos", createGastos);
router.patch("/gastos/:id", updateGastos);
router.delete("/gastos/:id", deleteGastos);

export default router;
