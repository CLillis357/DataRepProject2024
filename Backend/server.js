const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.crwpe.mongodb.net/GameStoreDB')
//added a check to make sure the database is connected throws an error if not
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define the schema for games
const gameSchema = new mongoose.Schema({
  title: String,
  genre: String,
  price: Number,
  releaseDate: String,
  imageUrl: String
});

// Create a Mongoose model for games
const gameModel = mongoose.model('games', gameSchema);

// Get all games
app.get('/api/games', async (req, res) => {
  const games = await gameModel.find({});
  res.status(200).json({ games });
});

// Get a specific game by ID
app.get('/api/game/:id', async (req, res) => {
  const game = await gameModel.findById(req.params.id);
  res.json(game);
});

// Add a new game
app.post('/api/games', async (req, res) => {
  const { title, genre, price, releaseDate, imageUrl } = req.body;
  const newGame = new gameModel({ title, genre, price, releaseDate, imageUrl });
  await newGame.save();
  res.status(201).json({ message: "Game added!", game: newGame });
});

// Get a single game by ID
app.get('/api/game/:id', async (req, res) => {
  try {
    const game = await gameModel.findById(req.params.id);
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a game
app.delete('/api/game/:id', async (req, res) => {
  await gameModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Game deleted successfully" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
