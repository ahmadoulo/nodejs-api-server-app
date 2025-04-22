const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});


const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.post('/', authenticate, async (req, res) => {
  const { title, content } = req.body;
  try {
    await pool.query(
      'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3)',
      [title, content, req.user.id]
    );
    res.status(201).send('Post created successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating post');
  }
});


router.delete('/:id', authenticate, async (req, res) => {
    const postId = parseInt(req.params.id);
    const userId = req.user.id;
  
    try {
      const result = await pool.query(
        'DELETE FROM posts WHERE id = $1 AND user_id = $2 RETURNING *',
        [postId, userId]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Post non trouvé ou non autorisé' });
      }
  
      res.json({ message: 'Post supprimé avec succès' });
    } catch (err) {
      console.error('Erreur lors de la suppression :', err);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  });
  
router.get('/', authenticate, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT posts.id, posts.title, posts.content, posts.created_at, users.username 
       FROM posts 
       JOIN users ON posts.user_id = users.id 
       ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching posts');
  }
});

module.exports = router;
