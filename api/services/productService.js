import * as productRepository from "../repositories/productRepository.js";

const getAllProducts = () => productRepository.getAllProducts();
const getProductById = (productId) =>
  productRepository.getProductById(productId);
const createProduct = (newProduct) =>
  productRepository.createProduct(newProduct);
const deletedProduct = (productId) =>
  productRepository.deletedProduct(productId);
const editProduct = (productId, updatedProduct) =>
  productRepository.editProduct({ id: productId, ...updatedProduct });
const getProductCost = (product) => {
  const cost = Number(product.price) * Number(product.quantity);

  if (cost > 0) {
    return cost;
  }

  return 0;
};
const getProductsCosts = (products) => {
  // lógica
};

export {
  createProduct,
  deletedProduct,
  editProduct,
  getAllProducts,
  getProductById,
  getProductCost,
};
