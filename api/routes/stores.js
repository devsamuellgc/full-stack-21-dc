import { Router } from "express";
import { listAStore, listAllStores } from "../controllers/storesController.js";

const storesRouter = Router();

storesRouter.get("/stores", listAllStores);
storesRouter.get("/stores/:id", listAStore);

export default storesRouter;
