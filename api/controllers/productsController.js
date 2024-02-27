import { v4 as uuidv4 } from "uuid";
import {
  createProduct,
  deletedProduct,
  editProduct,
  getAllProducts,
  getProductById,
  getProductCost,
  getProductsCosts,
} from "../services/productService.js";
import { getStoreById } from "../services/storesService.js";

const listAllProducts = async (req, res) => {
  const products = await getAllProducts();
  if (!products.length) {
    return res.status(200).json({ mensagem: "Não há produto cadastrado!" });
  }

  if (!!products.length) {
    return res
      .status(200)
      .json({ data: products, mensagem: "Produtos encontrados com sucesso!" });
  }

  return res.status(400).json({ mensagem: "Produtos não encontrados!" });
};

const listAProduct = async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    return res.status(400).json({ mensagem: "O id é obrigatório" });
  }

  const product = await getProductById(productId);

  if (!product.length) {
    return res.status(400).json({ mensagem: "O id é inexistente!" });
  }

  return res
    .status(200)
    .json({ data: product, mensagem: "Produto encontrado com sucesso!" });
};

const deleteAProduct = async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    return res.status(400).json({ mensagem: "O id é obrigatório!" });
  }

  const product = await getProductById(productId);

  if (!product.length) {
    return res.status(400).json({ mensagem: "O produto não foi encontrado!" });
  }

  const deleteProduct = await deletedProduct(product[0].id);

  return res
    .status(200)
    .json({ data: deleteProduct, mensagem: "Produto deletado com sucesso!" });
};

const createAProduct = async (req, res) => {
  const store = await getStoreById(req.body.storeId);

  if (!store.length) {
    return res.status(400).json({ mensagem: "Loja não encontrada!" });
  }

  const newProduct = req.body;

  if (!newProduct.name) {
    return res.status(400).json({ mensagem: "O nome é obrigatório!" });
  }

  if (!newProduct.price) {
    return res.status(400).json({ mensagem: "O preço é obrigatório!" });
  }

  if (!newProduct.quantity) {
    return res.status(400).json({ mensagem: "A quantidade é obrigatório!" });
  }

  const productCreated = await createProduct(newProduct);

  if (productCreated.affectedRows > 0) {
    return res
      .status(201)
      .json({ data: productCreated, mensagem: "Produto criado com sucesso!" });
  }
};

const editAProduct = async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    return res.status(400).json({ mensagem: "O ID do produto é obrigatório!" });
  }

  const product = await getProductById(productId);

  if (!product.length) {
    return res.status(400).json({ mensagem: "Produto não foi encontrado!" });
  }

  const editedProduct = await editProduct(product[0].id, {
    ...product[0],
    ...req.body,
  });

  return res
    .status(200)
    .json({ data: editedProduct, mensagem: "Produto editado com sucesso!" });
};

const listProductCost = async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    return res.status(400).json({ mensagem: "O id é obrigatório!" });
  }

  const product = await getProductById(productId);

  if (!product.length) {
    return res.status(400).json({ mensagem: "Produto não encontrado!" });
  }

  const productCost = await getProductCost(product[0]);

  return res
    .status(200)
    .json({ data: productCost, mensagem: "Custo calculado com sucesso!" });
};

const listProductsCosts = (req, res) => {
  const products = getAllProducts();
  if (products.length === 0) {
    return res.status(400).json({ mensagem: "Não há produtos cadastrados" });
  }

  const productsCosts = getProductsCosts(products);

  return res.status(200).json({
    data: productsCosts,
    mensagem: "Custo total de estoque dos produtos",
  });
};

export {
  createAProduct,
  deleteAProduct,
  editAProduct,
  listAProduct,
  listAllProducts,
  listProductCost,
  listProductsCosts,
};
