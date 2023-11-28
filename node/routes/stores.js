import express from "express";

const router = express.Router();

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

router.get("/lojas", (req, res) => {
  res.json(lojas);
});

router.get("/loja/:id", (req, res) => {
  const loja = lojas.find((loja) => loja.id === req.params.id);
  res.json(loja);
});

router.get("/lojas/faturamento", (req, res) => {
  const faturamentoPorLojas = [];
  for (const loja of lojas) {
    faturamentoPorLojas.push({
      [loja.nome]: loja.faturamento,
    });
  }
  res.json(faturamentoPorLojas);
});

router.post("/loja", (req, res) => {
  lojas.push(req.body);
  res.json(lojas);
});

router.delete("/loja/:id", (req, res) => {
  lojas.splice(req.params.id - 1, 1);
  res.json(lojas);
});

router.patch("/loja/:id", (req, res) => {
  const index = req.params.id - 1;
  lojas.splice(index, 1, {
    ...lojas[index],
    ...req.body,
  });
  res.json(lojas);
});

export default router;
