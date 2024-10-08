import pool from '../db.js';

export const getAllUsers = async (req, res) => {
  //Connect to database
  const posts = await pool.query('SELECT * FROM usuario;');

  return res.json(posts);
};
