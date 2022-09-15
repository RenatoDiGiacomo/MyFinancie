import Person from "../models/person.model.js";

const getPeople = async (req, res) => {
  try {
    const people = await Person.findAll();
    res.json(people);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const createPerson = async (req, res) => {
  try {
    await Person.create(req.body);
    res.json("Usuário Criado com sucesso");
  } catch (err) {
    res.json({ message: err.message });
  }
};

const getPerson = async (req, res) => {
  try {
    const people = await Person.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(people);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updatePerson = async (req, res) => {
  try {
    const person = await Person.update({
      where: {
        id: req.params.id,
      },
    });
    res.json(person);
    res.json("Usuário Alterado com sucesso");
  } catch (err) {
    res.json({ message: err.message });
  }
};
const deletePerson = async (req, res) => {
  try {
    const person = await Person.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(person);
    res.json("Dados de pessoa Apagado com sucesso");
  } catch (err) {}
};

export { getPeople, createPerson, getPerson, updatePerson, deletePerson };
