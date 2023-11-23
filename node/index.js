import express from "express";

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const produtos = [
  {
    id: "1",
    nome: "Teclado",
    quantidade: 15,
    valorUnit: 19,
  },
  {
    id: "2",
    nome: "Monitor",
    quantidade: 6,
    valorUnit: 200,
  },
  {
    id: "3",
    nome: "Pen drive",
    quantidade: 100,
    valorUnit: 32,
  },
  {
    id: "4",
    nome: "Cadeira",
    quantidade: 3,
    valorUnit: 900,
  },
  {
    id: "5",
    nome: "Notebook",
    quantidade: 4,
    valorUnit: 3200,
  },
];

const users = [
  {
    name: "Samuel",
    lastName: "Lopes",
    id: "1",
  },
  {
    name: "Samuel",
    lastName: "Lopes",
    id: "2",
  },
  {
    name: "Samuel",
    lastName: "Lopes",
    id: "3",
  },
];

const lojas = [
  {
    id: "1",
    nome: "Loja 1",
    faturamento: 1500,
  },
  {
    id: "2",
    nome: "Loja 2",
    faturamento: 3000,
  },
  {
    id: "3",
    nome: "Loja 3",
    faturamento: 10000,
  },
  {
    id: "4",
    nome: "Loja 4",
    faturamento: 800,
  },
  {
    id: "5",
    nome: "Loja 5",
    faturamento: 100000,
  },
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/user/:id", (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.send(`Usuário ${req.params.id} não encontrado`);
  }
});

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produto/:id", (req, res) => {
  const produto = produtos.find((produto) => produto.id === req.params.id);
  res.json(produto);
});

app.get("/produtos/total-estoque", (req, res) => {
  const estoqueProdutos = produtos.map((produto) => {
    return {
      [produto.nome]: produto.quantidade * produto.valorUnit,
    };
  });
  res.json(estoqueProdutos);
});

app.post("/produto", (req, res) => {
  produtos.push(req.body);
  res.json(produtos);
});

// Lojas

app.get("/lojas", (req, res) => {
  res.json(lojas);
});

app.get("/loja/:id", (req, res) => {
  const loja = lojas.find((loja) => loja.id === req.params.id);
  res.json(loja);
});

app.get("/lojas/faturamento", (req, res) => {
  const faturamentoPorLojas = [];
  for (const loja of lojas) {
    faturamentoPorLojas.push({
      [loja.nome]: loja.faturamento,
    });
  }
  res.json(faturamentoPorLojas);
});

app.post("/loja", (req, res) => {
  lojas.push(req.body);
  res.json(lojas);
});

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
