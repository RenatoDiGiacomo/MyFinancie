import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Expenses = db.define("expenses", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(255),
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
  },
  dueDate: {
    type: DataTypes.DATE,
  },
  paidOut: {
    type: DataTypes.BOOLEAN,
  },
});
Expenses.sync();
export default Expenses;
