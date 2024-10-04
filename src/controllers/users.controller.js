import pool from '../db.js';

export const getAllUsers = async (req, res) => {
  //MOCK DB
  const users = ['walter', 'gabriel', 'KAREN'];
  // const posts = await pool.query('SELECT email FROM user;');

  return res.json(users);
};
