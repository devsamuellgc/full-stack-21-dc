import express from "express";

const router = express.Router();

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

router.get("/produtos", (req, res) => {
  res.json(produtos);
});

router.get("/produto/:id", (req, res) => {
  const produto = produtos.find((produto) => produto.id === req.params.id);
  res.json(produto);
});

router.get("/produtos/total-estoque", (req, res) => {
  const estoqueProdutos = produtos.map((produto) => {
    return {
      [produto.nome]: produto.quantidade * produto.valorUnit,
    };
  });
  res.json(estoqueProdutos);
});

router.post("/produto", (req, res) => {
  produtos.push(req.body);
  res.json(produtos);
});

router.delete("/produto/:id", (req, res) => {
  produtos.splice(req.params.id - 1, 1);
  res.json(produtos);
});

router.patch("/produto/:id", (req, res) => {
  const index = req.params.id - 1;
  produtos.splice(index, 1, {
    ...produtos[index],
    ...req.body,
  });
  res.json(produtos);
});

export default router;
