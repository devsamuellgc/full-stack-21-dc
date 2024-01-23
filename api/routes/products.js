import { Router } from "express";
import {
  createAProduct,
  deleteAProduct,
  editAProduct,
  listAProduct,
  listAllProducts,
  listProductCost,
} from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", listAllProducts);
productsRouter.get("/products/:id", listAProduct);
productsRouter.get("/product-cost/:id", listProductCost);
productsRouter.delete("/products/:id", deleteAProduct);
productsRouter.post("/products", createAProduct);
productsRouter.patch("/products/:id", editAProduct);

export default productsRouter;
