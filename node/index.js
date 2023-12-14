import express from "express";
import userRoutes from "./routes/users.js";
import storesRoutes from "./routes/stores.js";
import productsRoutes from "./routes/products.js";
import receivablesRoutes from "./routes/receivables.js";

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Users
app.use("/", userRoutes);

// Lojas
app.use("/", storesRoutes);

// Produtos
app.use("/", productsRoutes);

// Contas a receber
app.use("/", receivablesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
