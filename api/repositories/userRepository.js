import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: uuidv4(), // gerar na hora da criação e único
    fullname: "Samuel Carneiro", // obrigatório
    birthdate: new Date(),
    email: "email@email.com", // obrigatorio e único
    phone: "85999999999",
    cpf: "00000000000", // cpf obrigatorio, 11 caracteres e único
  },
];

const getAllUsers = () => users;

const getUserById = (userId) => users.find((user) => user.id === userId);

const getUserByEmail = (userEmail) =>
  users.find((user) => user.email === userEmail);

const getUserByCpf = (userCpf) => users.find((user) => user.cpf === userCpf);

const createUser = (newUser) => {
  users.push(newUser);
  return newUser;
};

const editUser = (updatedUser) => {
  const index = users.findIndex((user) => user.id === updatedUser.id);
  users[index] = updatedUser;
  return updatedUser;
};

const removeUser = (userId) => {
  const index = users.findIndex((user) => user.id === userId);
  const deletedUser = users.splice(index, 1);
  return deletedUser;
};

export default {
  editUser,
  createUser,
  removeUser,
  getUserById,
  getUserByCpf,
  getAllUsers,
  getUserByEmail,
};
