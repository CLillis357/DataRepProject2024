import axios from "axios";
import { useState } from "react";

const AddGame = () => {
  // State hooks for form inputs
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const game = { title, genre, price, releaseDate, imageUrl };
    console.log(game);

    axios.post('http://localhost:4000/api/games', game)
      .then((res) => { 
        console.log(res.data); 
        alert("Game added successfully!");
        // Reset the form
        setTitle('');
        setGenre('');
        setPrice('');
        setReleaseDate('');
        setImageUrl('');
      })
      .catch((err) => {
        console.error("Error adding game:", err);
        alert("Failed to add the game. Please try again.");
      });
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Add a New Game</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Game Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter game title"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre:</label>
          <input
            type="text"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Enter game genre"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter game price"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Release Date:</label>
          <input
            type="date"
            className="form-control"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL:</label>
          <input
            type="text"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter game image URL"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Game</button>
      </form>
    </div>
  );
};

export default AddGame;
