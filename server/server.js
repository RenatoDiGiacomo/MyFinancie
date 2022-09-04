import express from "express";
import db from "./config/database.js";
import Routes from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 8080;

const corsConfig = {
  origin: true,
  credentials: true,
};

try {
  await db.authenticate();
  console.log("Autenticado no Banco de Dados...");
} catch (err) {
  console.error("Erro de Conexão ao DB:", err);
}
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(express.json());
app.use("/", Routes);

app.listen(port, () => console.log(`Servidor Rodando na porta: ${port}`));
