import {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByCpf,
  createUser,
  editUser,
  deletedUser,
} from "../services/usersService.js";
import { v4 as uuidv4 } from "uuid";

const listAllUsers = (req, res) => {
  const users = getAllUsers();

  if (users.length === 0) {
    return res.status(200).json({
      mensagem: "Não há usuários cadastrados!",
    });
  }

  if (users) {
    return res.status(200).json({
      data: users,
      mensagem: "Usuários encontrados com sucesso!",
    });
  }

  return res.status(400).json({ mensagem: "Usuários não encontrado" });
};

const createANewUser = (req, res) => {
  const id = uuidv4();
  const userById = getUserById(id);
  const user = {
    id,
    ...req.body,
    stores: [],
  };

  if (userById) {
    return res.status(400).json({ mensagem: "Usuário já foi cadastrado!" });
  }

  if (!user.fullname) {
    return res.status(400).json({ mensagem: "O nome é obrigatório!" });
  }

  if (!user.email) {
    return res.status(400).json({ mensagem: "O e-mail é obrigatório!" });
  }

  const userByEmail = getUserByEmail(user.email);

  if (userByEmail) {
    return res.status(400).json({ mensagem: "Esse e-mail já foi cadastrado!" });
  }

  if (!user.cpf) {
    return res.status(400).json({ mensagem: "O CPF é obrigatório!" });
  }

  const userCpf = getUserByCpf(user.cpf);

  if (userCpf) {
    return res.status(400).json({ mensagem: "O CPF já está em uso!" });
  }

  if (user.cpf.length !== 11) {
    return res.status(400).json({ mensagem: "CPF inválido!" });
  }

  const newUser = createUser(user);

  if (newUser) {
    return res.status(201).json({
      data: newUser,
      mensagem: "Usuário criado com sucesso!",
    });
  }
};

const listAUser = (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ mensagem: "O id é obrigatório" });
  }

  const user = getUserById(userId);

  if (user) {
    return res
      .status(200)
      .json({ data: user, mensagem: "Usuário encontrado com sucesso!" });
  }
};

const deleteAUser = (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ mensagem: "O id é obrigatório" });
  }

  const user = getUserById(userId);

  if (!user) {
    return res.status(400).json({ mensagem: "Usuário não encontrado!" });
  }

  const deleteUser = deletedUser(userId);

  return res
    .status(200)
    .json({ data: deleteUser, mensagem: "Usuário deletado com sucesso!" });
};

const editAUser = (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ mensagem: "O id é obrigatório" });
  }

  const user = getUserById(userId);

  if (!user) {
    return res.status(400).json({ mensagem: "Usuário não encontrado!" });
  }

  const editedUser = editUser(userId, { ...user, ...req.body });

  return res
    .status(200)
    .json({ data: editedUser, mensagem: "Usuário editado com sucesso!" });
};

export { listAllUsers, createANewUser, listAUser, deleteAUser, editAUser };
