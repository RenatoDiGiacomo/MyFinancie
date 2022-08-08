import { Sequelize } from "sequelize";

const db = new Sequelize("myfinancie", "root", "tester", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
