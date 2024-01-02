import { Router } from "express";
import {
  createANewUser,
  deleteAUser,
  editAUser,
  listAllUsers,
  listAUser,
} from "../controllers/usersController.js";

const usersRoutes = Router();

usersRoutes.get("/users", listAllUsers);
usersRoutes.get("/users/:id", listAUser);
usersRoutes.post("/users", createANewUser);
usersRoutes.delete("/users/:id", deleteAUser);
usersRoutes.patch("/users/:id", editAUser);

export default usersRoutes;
