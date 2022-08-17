import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Expenses = db.define("expenses", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cost: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

export default Expenses;
