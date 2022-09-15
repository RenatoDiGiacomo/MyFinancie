import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Person = db.define("people", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gains: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paidDate1:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  paidDate2:{
    type: DataTypes.DATE,
    allowNull: true,
  }
});

Person.sync();
export default Person;
