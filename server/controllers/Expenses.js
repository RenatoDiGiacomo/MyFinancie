import Expenses from "../models/expenses.model.js";

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.findAll();
    res.json(expenses);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const getExpensesById = async (req, res) => {
  try {
    const expenses = await Expenses.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(expenses[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const createExpenses = async (req, res) => {
  try {
    await Expenses.create(req.body);
    res.json({
      message: "Gasto Resgistrado com sucesso",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateExpenses = async (req, res) => {
  try {
    await Expenses.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Gasto Atualizado com sucesso" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteExpenses = async (req, res) => {
  try {
    await Expenses.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Gasto Apagado com sucesso" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export { getAllExpenses, getExpensesById, createExpenses, updateExpenses, deleteExpenses };
