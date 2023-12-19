import { getAllUsers } from "../services/usersService.js";

const listAllProducts = (req, res) => {
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

const createUser = (req, res) => {};
export { listAllProducts };
