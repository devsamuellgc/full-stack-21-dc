import { connection } from "../database.js";
// import { users } from "../mock/users.js";

const getAllUsers = async () => {
  const [results] = await connection.query("SELECT * FROM `users`");
  return results;
};

const getUserById = async (userId) => {
  const [results] = await connection.query(
    `SELECT * FROM users WHERE id = ${userId}`
  );
  return results;
};

const getUserByEmail = async (userEmail) => {
  const [results] = await connection.query(
    `SELECT * FROM users WHERE email = "${userEmail}"`
  );
  return results;
};

const getUserByCpf = async (userCpf) => {
  const [results] = await connection.query(
    `SELECT * FROM users WHERE cpf = ${userCpf}`
  );
  return results;
};

const createUser = (newUser) => {
  users.push(newUser);
  return newUser;
};

const editUser = (updatedUser) => {
  const index = users.findIndex((user) => user.id === updatedUser.id);
  users[index] = updatedUser;
  return updatedUser;
};

const deletedUser = async (userId) => {
  const deletedUser = await connection.query(
    `DELETE FROM users WHERE id = ${userId}`
  );
  console.log(deletedUser);
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
