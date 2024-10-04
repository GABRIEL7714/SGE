export const getAllUsers = async (req, res) => {
  const users = ['walter', 'gabriel'];
  return res.json(users);
};
