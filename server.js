const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const path = require('path');
const postRoutes = require('./postRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    try {
      
      const result = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
      if (result.rows.length > 0) {
        return res.status(400).send('Username already exists');
      }
  
     
      const hashed = await bcrypt.hash(password, 10);
      await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashed]);
      res.send('User registered');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while registering the user');
    }
  });
  

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
  if (result.rows.length === 0) return res.status(401).send('Invalid credentials');
  const match = await bcrypt.compare(password, result.rows[0].password);
  if (!match) return res.status(401).send('Invalid credentials');
  const token = jwt.sign({ id: result.rows[0].id }, process.env.JWT_SECRET);
  res.json({ token });
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

app.get('/protected', authenticate, (req, res) => {
  res.send('This is protected data');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/post', postRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));

