import Users from "../models/user.model.js";

const getAllUsers = async (req, res) =>{
  try{
    const users = await Users.findAll();
    res.json(users)
  } catch (err){
    res.json({message: err.message})
  }
}