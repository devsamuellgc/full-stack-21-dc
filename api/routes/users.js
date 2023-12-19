import { Router } from "express";
import {
  createANewUser,
  listAllProducts,
} from "../controllers/usersController.js";

const usersRoutes = Router();

usersRoutes.get("/users", listAllProducts);
usersRoutes.post("/users", createANewUser);

export default usersRoutes;
