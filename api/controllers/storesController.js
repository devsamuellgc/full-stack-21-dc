import { getAllStores, getStoreById } from "../services/storesService.js";

const listAllStores = (req, res) => {
  const stores = getAllStores();

  if (stores.length === 0) {
    return res.status(200).json({
      mensagem: "Não há lojas cadastradas!",
    });
  }

  if (stores) {
    return res.status(200).json({
      data: stores,
      mensagem: "Lojas encontradas com sucesso!",
    });
  }

  return res.status(400).json({ mensagem: "Lojas não encontradas" });
};

const listAStore = (req, res) => {
  const storeId = req.params.id;

  if (!storeId) {
    return res.status(400).json({ mensagem: "O id é obrigatório" });
  }

  const store = getStoreById(storeId);

  if (store) {
    return res
      .status(200)
      .json({ data: store, mensagem: "Loja encontrada com sucesso!" });
  }
};

const createANewStore = (req, res) => {};
const deleteAStore = (req, res) => {};
const editAStore = (req, res) => {};

export { listAllStores, listAStore };
