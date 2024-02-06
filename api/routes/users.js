import { Router } from "express";
import {
  createANewUser,
  deleteAUser,
  editAUser,
  listAllUsers,
  listAUser,
  listAUserByCpf,
  listAUserByEmail,
} from "../controllers/usersController.js";

const usersRoutes = Router();

usersRoutes.get("/users", listAllUsers);
usersRoutes.get("/users/:id", listAUser);
usersRoutes.get("/users/email/:email", listAUserByEmail);
usersRoutes.get("/users/cpf/:cpf", listAUserByCpf);
usersRoutes.post("/users", createANewUser);
usersRoutes.delete("/users/:id", deleteAUser);
usersRoutes.patch("/users/:id", editAUser);

export default usersRoutes;
