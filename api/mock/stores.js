import { products } from "./products.js";

export const stores = [
  {
    id: "34408e18-b7b5-4cdf-823a-5ade0e1ca0e5", // id INT AI NN PK UQ
    name: "Loja", // nome varchar NN
    cnpj: "12123123000100", // cnpj varchar NN UQ
    address: { city: "Fortaleza", state: "CE" },
    invoicing: 1500, // faturamento decimal(12, 2) null
    email: "emaildaloja@loja.com", // email varchar null
    phone: "85999999999", // telefone varchar null
    userId: "7385ac56-3786-4d64-88ff-6d6870dfa540",
    products: products.filter(
      (product) => product.storeId === "34408e18-b7b5-4cdf-823a-5ade0e1ca0e5"
    ),
  },
];
