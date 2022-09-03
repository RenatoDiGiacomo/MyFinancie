import Users from "../models/user.model.js";


const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    await Users.create(req.body);
    res.json("Usuário Criado com sucesso");
  } catch (err) {
    res.json({ message: err.message });
  }
};

const GetUserFinance = async (req, res) => {
  try {
    const finance = await Users.findAll({
      where: {
        id: req.params.id,
      },
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export { getAllUsers,createUser, GetUserFinance };
