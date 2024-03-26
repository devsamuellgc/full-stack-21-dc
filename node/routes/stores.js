import express from "express";
import { validarAutenticacao } from "../middlewares/validarAutenticacao.js";
import { validarPermissaoAdmin } from "../middlewares/validarPermissaoAdmin.js";
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

router.get("/lojas", validarAutenticacao, validarPermissaoAdmin, (req, res) => {
  return res.status(200).json({
    data: lojas,
    mensagem: "Lojas encontradas com sucesso!",
    pagination: {
      page: 1,
      perPage: 10,
    },
  });
});

router.get(
  "/loja/:id",
  validarAutenticacao,
  validarPermissaoAdmin,
  (req, res) => {
    const loja = lojas.find((loja) => loja.id === req.params.id);

    if (!loja) {
      return res.status(400).json({ message: "Loja não encontrada!" });
    }

    return res.status(200).json(loja);
  }
);

router.get(
  "/lojas/faturamento",
  validarAutenticacao,
  validarPermissaoAdmin,
  (req, res) => {
    if (lojas.length < 1) {
      return res.status(200).json({ message: "Não há lojas cadastradas!" });
    }

    const faturamentoPorLojas = [];
    for (const loja of lojas) {
      faturamentoPorLojas.push({
        [loja.nome]: loja.faturamento,
      });
    }

    return res.status(200).json(faturamentoPorLojas);
  }
);

router.post("/loja", validarAutenticacao, validarPermissaoAdmin, (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({ mensagem: "Id não identificado!" });
  }

  const loja = lojas.find((loja) => loja.id === req.body.id);

  if (loja) {
    return res.status(400).json({ mensagem: "ID já cadastrado!" });
  }

  if (!req.body.nome) {
    return res.status(400).json({ mensagem: "O nome da loja é obrigatório!" });
  }

  if (typeof req.body.faturamento === "string") {
    return res
      .status(400)
      .json({ mensagem: "O faturamento precisa ser número!" });
  }

  let lojaPropriedades = req.body;

  if (!req.body.faturamento) {
    lojaPropriedades = {
      ...req.body,
      faturamento: 0,
    };
  }

  lojas.push(lojaPropriedades);

  return res.status(201).json(lojaPropriedades);
});

router.delete(
  "/loja/:id",
  validarAutenticacao,
  validarPermissaoAdmin,
  (req, res) => {
    const loja = lojas.find((loja) => loja.id === req.body.id);

    if (!loja) {
      return res.status(400).json({ mensagem: "Loja não existe!" });
    }

    const produtoDeletado = lojas.splice(req.params.id - 1, 1);

    return res.status(200).json(produtoDeletado[0].id);
  }
);

router.patch(
  "/loja/:id",
  validarAutenticacao,
  validarPermissaoAdmin,
  (req, res) => {
    const loja = lojas.find((loja) => loja.id === req.body.id);

    if (!loja) {
      return res.status(400).json({ mensagem: "Loja não existe!" });
    }

    const index = req.params.id - 1;
    lojas.splice(index, 1, {
      ...lojas[index],
      ...req.body,
    });

    return res.status(200).json(lojas);
  }
);

export default router;
