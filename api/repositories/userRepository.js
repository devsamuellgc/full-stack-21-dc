import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: uuidv4(),
    fullname: "Samuel Carneiro",
    birthdate: new Date(),
    email: "email@email.com",
    phone: "85999999999",
    cpf: "00000000000",
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

const deletedUser = (userId) => {
  const index = users.findIndex((user) => user.id === userId);
  const deletedUser = users.splice(index, 1);
  return deletedUser;
};

export default {
  editUser,
  createUser,
  deletedUser,
  getUserById,
  getUserByCpf,
  getAllUsers,
  getUserByEmail,
};
