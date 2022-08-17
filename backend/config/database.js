import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.DATABASE, process.env.ROOT_USER, process.env.ROOT_PW, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
});

export default db;
