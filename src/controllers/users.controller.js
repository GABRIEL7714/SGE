export const getAllUsers = async (req, res) => {
  //MOCK DB
  const users = ['walter', 'gabriel', 'KAREN'];

  return res.send(users);
};
