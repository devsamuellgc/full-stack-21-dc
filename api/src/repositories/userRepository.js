import { connection } from "../database.js";

const getAllUsers = async () => {
  const conn = await connection();
  const [results] = await conn.query("SELECT * FROM `users`");
  return results;
};

const getUserById = async (userId) => {
  const conn = await connection();
  const [results] = await conn.query(
    `SELECT * FROM users WHERE id = ${userId}`
  );
  return results;
};

const getUserByEmail = async (userEmail) => {
  const conn = await connection();
  const [results] = await conn.query(
    `SELECT * FROM users WHERE email = "${userEmail}"`
  );
  return results;
};

const getUserByCpf = async (userCpf) => {
  const conn = await connection();
  const [results] = await conn.query(
    `SELECT * FROM users WHERE cpf = "${userCpf}"`
  );
  return results;
};

const createUser = async (newUser) => {
  const conn = await connection();
  const columns = Object.keys(newUser);
  const [results] = await conn.query(
    `INSERT INTO users (${columns.map(
      (column) => column
    )}) VALUES (${columns.map((column) => `'${newUser[column]}'`)})`
  );
  return results;
};

const editUser = async (updatedUser) => {
  const conn = await connection();
  const columns = Object.keys(updatedUser);
  const [results] = await conn.query(
    `UPDATE users SET ${columns.map(
      (column) => `${column} = "${updatedUser[column]}" `
    )} WHERE id = ${updatedUser.id};`
  );
  return results;
};

const deletedUser = async (userId) => {
  const conn = await connection();
  const deletedUser = await conn.query(
    `DELETE FROM users WHERE id = ${userId}`
  );
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
