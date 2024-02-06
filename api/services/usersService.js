import userRepository from "../repositories/userRepository.js";

const getAllUsers = async () => await userRepository.getAllUsers();
const getUserById = (userId) => userRepository.getUserById(userId);
const getUserByEmail = (userEmail) => userRepository.getUserByEmail(userEmail);
const getUserByCpf = (userCpf) => userRepository.getUserByCpf(userCpf);
const createUser = (newUser) => userRepository.createUser(newUser);
const deletedUser = (userId) => userRepository.deletedUser(userId);
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
