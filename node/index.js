import express from "express";
import userRoutes from "./routes/users.js";
import storesRoutes from "./routes/stores.js";
import productsRoutes from "./routes/products.js";

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Users
app.use("/", userRoutes);

// Produtos
app.use("/", storesRoutes);

// Lojas
app.use("/", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/**
 * Array de objetos
 * -> 5 produtos
 *  {
 *    id: "1",
 *    nome: "Nome do produto",
 *    quantidade: 10,
 *    valorUnit: 150,
 *  }
 * 1º Um endpoint que mostre todos os produtos
 * 2º Um endpoint que mostre um produto específico
 * 3º Um endpoint que mostre o valor total do estoque por produto
 * 4º Um endpoint que cadastre um novo produto
 *
 */
