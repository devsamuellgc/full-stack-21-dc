import userRepository from "../repositories/userRepository.js";

const getAllUsers = async () => await userRepository.getAllUsers();
const getUserById = async (userId) => await userRepository.getUserById(userId);
const getUserByEmail = async (userEmail) =>
  await userRepository.getUserByEmail(userEmail);
const getUserByCpf = async (userCpf) =>
  await userRepository.getUserByCpf(userCpf);
const createUser = async (newUser) => await userRepository.createUser(newUser);
const deletedUser = async (userId) => await userRepository.deletedUser(userId);
const editUser = async (userId, updatedUser) =>
  await userRepository.editUser({ id: userId, ...updatedUser });

export {
  getAllUsers,
  getUserById,
  getUserByCpf,
  getUserByEmail,
  createUser,
  deletedUser,
  editUser,
};
