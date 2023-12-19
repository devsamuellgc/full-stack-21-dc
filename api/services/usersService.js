import userRepository from "../repositories/userRepository.js";

const getAllUsers = () => userRepository.getAllUsers();
const getUserById = (userId) => userRepository.getUserById(userId);
const getUserByEmail = (userEmail) => userRepository.getUserByEmail(userEmail);
const getUserByCpf = (userCpf) => userRepository.getUserByCpf(userCpf);
const createUser = (newUser) => userRepository.createUser(newUser);
const deletedUser = (userId) => userRepository.deletedUser(userId);
const editUser = (userId, updatedUser) =>
  userRepository.editUser({ id: userId, ...updatedUser });

export {
  getAllUsers,
  getUserById,
  getUserByCpf,
  getUserByEmail,
  createUser,
  deletedUser,
  editUser,
};
