import express from "express";
import db from "./config/database.js";
import Routes from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 8080;

const corsOps = {
  origin: "http://localhost:8080/gastos",
  crendentials: true,
  optionSucessStatus:200,
  allowedHeaders: ["Content-Type", "Authorization"],
};

try {
  await db.authenticate();
  console.log("Autenticado no Banco de Dados...");
} catch (err) {
  console.error("Erro de Conexão ao DB:", err);
}
console.log(process.env.REACT_APP_BACKEND);
app.use(cors(corsOps));
app.use(express.json());
app.use("/", Routes);

app.listen(port, () => console.log(`Servidor Rodando na porta: ${port}`));
