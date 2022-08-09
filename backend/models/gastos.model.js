import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Gastos = db.define(
  "gastos",
  {
    title: {
      type: DataTypes.STRING,
    },
    textproduct: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Gastos;
