import userRepository from "../repositories/userRepository.js";

const getAllUsers = async () => await userRepository.getAllUsers();
const getUserById = async (userId) => await userRepository.getUserById(userId);
const getUserByEmail = async (userEmail) =>
  await userRepository.getUserByEmail(userEmail);
const getUserByCpf = async (userCpf) =>
  await userRepository.getUserByCpf(userCpf);
const createUser = (newUser) => userRepository.createUser(newUser);
const deletedUser = async (userId) => await userRepository.deletedUser(userId);
const editUser = (userId, updatedUser) =>
  userRepository.editUser({ id: userId, ...updatedUser });
const addStoreToAUser = (userId, store) => {
  const user = getUserById(userId);
  user.stores.push(store);
};

export {
  getAllUsers,
  getUserById,
  getUserByCpf,
  getUserByEmail,
  createUser,
  deletedUser,
  editUser,
  addStoreToAUser,
};
