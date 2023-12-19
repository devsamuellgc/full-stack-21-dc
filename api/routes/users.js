import { Router } from "express";
import { listAllProducts } from "../controllers/usersController.js";

const usersRoutes = Router();

usersRoutes.get("/users", listAllProducts);

export default usersRoutes;
