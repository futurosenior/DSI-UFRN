const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/:dados", (req, res) => {
  console.log("Recebendo dados: " + req.params.dados);
  res.send("Dados recebidos com sucesso!");
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
