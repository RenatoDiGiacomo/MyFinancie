import Gastos from "../models/gastos.model.js";

export const getAllGastos = async (req, res) => {
  console.log(req);
  try {
    const gastos = await Gastos.findAll();
    res.json(gastos);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getGastosById = async (req, res) => {
  try {
    const gastos = await Gastos.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(gastos[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createGastos = async (req, res) => {
  try {
    await Gastos.create(req.body);
    res.json({
      message: "Gasto Resgistrado com sucesso",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const updateGastos = async (req, res) => {
  try {
    await Gastos.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Gasto Atualizado com sucesso" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const deleteGastos = async (req, res) => {
  try {
    await Gastos.destroy({
      where: {
        id: id.params.id,
      },
    });
    res.json({ message: "Gasto Apagado com sucesso" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
