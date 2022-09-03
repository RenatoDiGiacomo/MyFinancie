import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";


const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
console.log(Sequelize.)
// User.sync({ alter: true });
export default User;
