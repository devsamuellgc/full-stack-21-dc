const users = [];

const getAllUsers = () => users;

const getUserById = (userId) => users.find((user) => user.id === userId);

const getUserByEmail = (userEmail) =>
  users.find((user) => user.email === userEmail);

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
  getAllUsers,
  getUserByEmail,
};
