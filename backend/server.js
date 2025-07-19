// server.js

// Load environment variables from .env file BEFORE anything else
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Use movie routes
app.use('/api/movies', movieRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('🎬 Popcorn API is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
